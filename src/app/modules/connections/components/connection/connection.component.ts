import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@core/services';
import { MhrConnectionStatus } from '@mhr/components';

@Component({
  selector: 'mhr-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent {
  status: MhrConnectionStatus = 'active';
  readonly dialogService = inject(DialogService);
  readonly router = inject(Router);
  endConnection() {
    this.dialogService
      .show({
        title: 'End connection',
        text: 'Confirm to prevent updates. You can still view patient records. Proceed?',
        primary: 'Cancel',
        secondary: 'Proceed',
      })
      .afterClosed()
      .subscribe((action) => {
        if (action == 'secondary') {
          // TODO: end connection
          this.router.navigateByUrl('/connections');
        }
      });
  }
}
