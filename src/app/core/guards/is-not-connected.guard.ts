import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isConnected } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

export const isNotConnectedGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(Store)
    .select(isConnected)
    .pipe(
      map((connected) => {
        if (!connected) return true;
        return router.parseUrl('/');
      })
    );
};
