import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@core/services';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  readonly dialogService = inject(DialogService);
  readonly router = inject(Router);
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
          this.router.navigateByUrl('/connect');
        }
      });
  }
}
