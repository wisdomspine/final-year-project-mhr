import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mhr-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  readonly router = inject(Router);
  empty: boolean = false;
  readonly patients: { name: string; address: string; connections: number }[] =
    [
      {
        name: 'John Abdul',
        address: 'YEUZBQWVSIYEVXKRGIQRJ25XTRNG454LNVAN3B6AESRHE6UIXCA4XZP3E4',
        connections: 3,
      },
      {
        name: 'Blessing Ombugadu',
        address: '4A6QOQRGD54OUB67SUYZV4RCNAJSFBEEF5MY65A5JYJ2AO6FIKE5CPX5YI',
        connections: 4,
      },
      {
        name: 'Patient 1',
        address: 'ZW3ISEHZUHPO7OZGMKLKIIMKVICOUDRCERI454I3DB2BH52HGLSO67W754',
        connections: 1,
      },
    ];

  requestConnection() {
    this.router.navigate(['/connections'], {
      queryParams: {
        'request-connection': true,
      },
    });
  }

  get noPatientSelected(): boolean {
    return (
      !this.empty &&
      this.router.isActive('/patients', {
        fragment: 'ignored',
        matrixParams: 'ignored',
        paths: 'exact',
        queryParams: 'ignored',
      })
    );
  }
}
