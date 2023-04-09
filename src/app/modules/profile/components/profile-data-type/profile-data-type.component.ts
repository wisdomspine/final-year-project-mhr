import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileRecordStatus } from '../../components';

@Component({
  selector: 'mhr-profile-data-type',
  templateUrl: './profile-data-type.component.html',
  styleUrls: ['./profile-data-type.component.scss'],
})
export class ProfileDataTypeComponent {
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);
  empty: boolean = false;
  readonly records: {
    address: string;
    time: Date;
    status: ProfileRecordStatus;
  }[] = [
    {
      time: new Date(new Date().setHours(16, 17)),
      address: 'ZW3ISEHZUHPO7OZGMKLKIIMKVICOUDRCERI454I3DB2BH52HGLSO67W754',
      status: 'signed',
    },
    {
      time: new Date(new Date().setFullYear(2021)),
      address: 'ZW3ISEHZUHPO7OZGMKLKIIMKVICOUDRCERI454I3DB2BH52HGLSO67W754',
      status: 'pending',
    },
  ];

  addRecord() {
    this.router.navigate(['add-record'], {
      relativeTo: this.activatedRoute,
    });
  }
}
