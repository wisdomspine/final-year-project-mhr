import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mhr-connection-records',
  templateUrl: './connection-records.component.html',
  styleUrls: ['./connection-records.component.scss'],
})
export class ConnectionRecordsComponent {
  empty: boolean = false;
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

  get noRecordSelected(): boolean {
    const regex = /^\/connections\/([^/]+)\/records\/([^/]+)(\/|$)/i;
    this.router.url;
    this.router.isActive;
    return !this.empty && !regex.test(this.router.url);
  }
}
