import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthAction } from './';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { WalletConnectService } from '@app/core/services';

export const connectWalletEffect = createEffect(
  (
    action$ = inject(Actions),
    walletConnectService = inject(WalletConnectService)
  ) => {
    return action$.pipe(
      ofType(AuthAction.connect),
      switchMap(() => {
        return walletConnectService.connect().pipe(
          map((address) => {
            return AuthAction.connected({ address });
          }),
          catchError((error) => {
            return of(AuthAction.error({ message: error }));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const disconnectWalletEffect = createEffect(
  (
    action$ = inject(Actions),
    walletConnectService = inject(WalletConnectService)
  ) => {
    return action$.pipe(
      ofType(AuthAction.disconnect),
      switchMap(() => {
        return walletConnectService.disconnect().pipe(
          map((address) => {
            return AuthAction.connected({ address });
          }),
          catchError((error) => {
            return of(AuthAction.error({ message: error }));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const initialStatusEffect = createEffect(
  (walletConnectService = inject(WalletConnectService)) => {
    return walletConnectService.connected.pipe(
      map((address) => {
        return AuthAction.connected({ address });
      })
    );
  },
  {
    functional: true,
  }
);
