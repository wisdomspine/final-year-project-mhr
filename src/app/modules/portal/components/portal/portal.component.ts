import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAction, isConnected } from '@core/store/auth';
import { DialogService } from '@core/services';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnDestroy {
  readonly dialogService = inject(DialogService);
  readonly router = inject(Router);
  readonly store = inject(Store);
  readonly navLinks: { title: string; path: string; svgIcon: string }[] = [
    {
      title: 'Patients',
      svgIcon: 'users-medical',
      path: '/patients',
    },
    {
      title: 'Connections',
      svgIcon: 'link-horizontal',
      path: '/connections',
    },
    {
      title: 'Profile',
      svgIcon: 'user-doctor',
      path: '/profile',
    },
  ];

  private readonly destroy$ = new Subject<void>();
  private navigate = this.store
    .select(isConnected)
    .pipe(takeUntil(this.destroy$))
    .subscribe((connected) => {
      if (!connected) {
        this.router.navigateByUrl('/connect');
      }
    });

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  disconnectWallet() {
    this.dialogService
      .show(
        {
          title: 'Disconnect Wallet',
          text: 'Are you sure you want to disconnect your wallet from the application?',
          primary: 'Stay connected',
          secondary: 'Disconnect wallet',
        },
        {
          disableClose: true,
        }
      )
      .afterClosed()
      .subscribe((action) => {
        if (action == 'secondary') {
          this.store.dispatch(AuthAction.disconnect());
        }
      });
  }
}
