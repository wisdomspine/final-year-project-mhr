import { Injectable } from '@angular/core';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from 'algorand-walletconnect-qrcode-modal';
import {
  ReplaySubject,
  Subject,
  filter,
  skip,
  switchMap,
  take,
  takeUntil,
  throwError,
} from 'rxjs';
export type ErrorType = 'session' | 'connect' | 'disconnect';
@Injectable({
  providedIn: 'root',
})
export class WalletConnectService {
  readonly connector: WalletConnect = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal,
  });
  private connected$: ReplaySubject<string | null> = new ReplaySubject(1);
  private error$: Subject<{
    type: ErrorType;
    error: Error;
  } | null> = new Subject();
  constructor() {
    this.init();
  }

  private init() {
    if (this.connector.connected) {
      this.connected$.next(this.connector.accounts[0]);
    }
    this.connector.on('connect', (error, payload) => {
      if (error) {
        this.handleError('connect', error);
      }
      // Get provided accounts
      const { accounts } = payload.params[0];
      this.connected$.next(accounts[0]);
    });

    this.connector.on('disconnect', (error, payload) => {
      //emit disconnection event
      if (error) {
        this.handleError('disconnect', error);
      }
      this.connected$.next(null);
    });

    this.connector.on('session_update', (error, payload) => {
      if (error) {
        this.handleError('session', error);
      }

      const { accounts } = payload.params[0];
      this.connected$.next(accounts[0]);
    });
  }

  private handleError(type: ErrorType, error: Error) {
    if (!this.connector.connected) {
      this.connected$.next(null);
    }
    // send error message
    this.error$.next({ type, error });
  }

  get connected() {
    return this.connected$.asObservable();
  }
  get error() {
    return this.error$.asObservable();
  }

  connect() {
    this.connector.createSession();
    return this.connected.pipe(
      skip(1),
      take(1),
      takeUntil(
        this.error.pipe(
          filter((error) => error?.type == 'connect'),
          switchMap((error) => throwError(() => error?.error))
        )
      )
    );
  }

  disconnect() {
    this.connector.killSession();
    return this.connected.pipe(
      skip(1),
      take(1),
      takeUntil(
        this.error.pipe(
          filter((error) => error?.type == 'disconnect'),
          switchMap((error) => throwError(() => error?.error))
        )
      )
    );
  }
}
