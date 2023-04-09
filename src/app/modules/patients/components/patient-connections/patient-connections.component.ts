import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MockConnections } from '@mhr/components';

@Component({
  selector: 'mhr-patient-connections',
  templateUrl: './patient-connections.component.html',
  styleUrls: ['./patient-connections.component.scss'],
})
export class PatientConnectionsComponent {
  empty: boolean = false;
  readonly router = inject(Router);
  readonly connections: typeof MockConnections = MockConnections;
  requestConnection() {
    this.router.navigate(['/connections'], {
      queryParams: {
        'request-connection': true,
        // TODO: change this to get actual address
        'request-connection-address':
          'ZW3ISEHZUHPO7OZGMKLKIIMKVICOUDRCERI454I3DB2BH52HGLSO67W754',
      },
    });
  }
}
