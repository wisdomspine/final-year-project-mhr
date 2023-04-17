import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  AddConnectionRecordSegmentsComponent,
  ConnectionRecordMetadataDialogComponent,
} from '../../components';

@Component({
  selector: 'mhr-connection-records',
  templateUrl: './connection-records.component.html',
  styleUrls: ['./connection-records.component.scss'],
})
export class ConnectionRecordsComponent {
  empty: boolean = false;
  readonly router = inject(Router);
  readonly dialog = inject(MatDialog);
  records: { name: string; id: string; time: Date }[] = [
    {
      name: 'Admission',
      id: '0x33dc34',
      time: new Date(new Date().setHours(16, 20)),
    },
    {
      name: 'Test',
      id: '0x33dc78',
      time: new Date(new Date().setMonth(0)),
    },
    {
      name: '5IIFGXH2CJNRRTZJ4SFATW52X3AQKEG2HRSDQQKKMRCGJGW3FTB4F7ZMRI',
      id: '5IIFGXH2CJNRRTZJ4SFATW52X3AQKEG2HRSDQQKKMRCGJGW3FTB4F7ZMRI',
      time: new Date(new Date().setFullYear(2022)),
    },
  ];

  get noRecordSelected(): boolean {
    const regex = /^\/connections\/([^/]+)\/records\/([^/]+)(\/|$)/i;
    this.router.url;
    this.router.isActive;
    return !this.empty && !regex.test(this.router.url);
  }

  addRecord() {
    this.dialog
      .open(ConnectionRecordMetadataDialogComponent, {
        width: 'min(540px, 80vw)',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((args) => {
        this.showSegmentDialog(args);
      });
  }

  showSegmentDialog(args: { name?: string; description?: string }) {
    const ref = this.dialog.open(AddConnectionRecordSegmentsComponent, {
      width: 'min(940px, 80vw)',
      minHeight: 'min(640px, 80vh)',
      maxHeight: '90vh',
      disableClose: true,
    });
  }
}
