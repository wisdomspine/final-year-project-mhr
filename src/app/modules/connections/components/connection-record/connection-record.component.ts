import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MockRecords } from '@mhr/components';

@Component({
  selector: 'mhr-connection-record',
  templateUrl: './connection-record.component.html',
  styleUrls: ['./connection-record.component.scss'],
})
export class ConnectionRecordComponent {
  readonly router = inject(Router);
  records: { name: string; id: string }[] = [
    {
      name: 'Facility (FCT)',
      id: '0x33dc34',
    },
    {
      name: 'Test',
      id: '0x33dc78',
    },
    {
      name: 'Insurance',
      id: '0x335c34',
    },
    {
      name: 'Admission',
      id: '0x22dc34',
    },
  ];

  get noSegmentSelected(): boolean {
    const regex = /^\/connections\/([^/]+)\/records\/([^/]+)\/([^/]+)(\/|$)/i;
    this.router.url;
    this.router.isActive;
    return !regex.test(this.router.url);
  }
}
