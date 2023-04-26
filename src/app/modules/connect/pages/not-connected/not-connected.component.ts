import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAction, isConnected } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-not-connected',
  templateUrl: './not-connected.component.html',
  styleUrls: ['./not-connected.component.scss'],
})
export class NotConnectedComponent implements OnDestroy {
  readonly router = inject(Router);
  readonly store = inject(Store);
  private readonly destroy$ = new Subject<void>();
  private navigate = this.store
    .select(isConnected)
    .pipe(takeUntil(this.destroy$))
    .subscribe((connected) => {
      if (connected) {
        this.router.navigateByUrl('/connections');
      }
    });

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  connect() {
    this.store.dispatch(AuthAction.connect());
  }
}
