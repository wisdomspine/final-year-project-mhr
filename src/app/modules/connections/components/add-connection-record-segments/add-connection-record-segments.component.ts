import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '@core/services';
import { RecordFields } from '@mhr/components';

@Component({
  selector: 'mhr-add-connection-record-segments',
  templateUrl: './add-connection-record-segments.component.html',
  styleUrls: ['./add-connection-record-segments.component.scss'],
})
export class AddConnectionRecordSegmentsComponent {
  readonly dialogService = inject(DialogService);
  readonly ref = inject(MatDialogRef<AddConnectionRecordSegmentsComponent>);
  readonly segments = ['Facility (FCT)', 'Test', 'Insurance', 'Admission'];
  readonly fields: RecordFields = {
    type: {
      placeholder: 'Type',
      type: 'select',
      label: 'Select type',
      options: [
        {
          display: 'PRA',
          value: 'PRA',
        },
        {
          display: 'TSA',
          value: 'TSA',
        },
      ],
    },
    'PRA-1': {
      label: '(PRA-1) Primary key',
      placeholder: 'Primary key',
      type: 'text',
    },
    'PRA-2': {
      label: '(PRA-2) Group',
      placeholder: 'Group',
      type: 'text',
    },
  };

  readonly form = new FormGroup<{ [key: string]: FormControl }>({
    type: new FormControl(),
    'PRA-1': new FormControl(),
    'PRA-2': new FormControl(),
  });

  activeIndex: number = 0;
  close() {
    this.dialogService
      .show({
        primary: 'Cancel',
        secondary: 'Discard',
        title: 'Discard progress',
        text: `Are you sure you want to cancel inputting data for this record?
        Any unsaved changes will be lost.`,
      })
      .afterClosed()
      .subscribe((action) => {
        if (action === 'secondary') this.ref.close();
      });
  }

  deleteSegement(index: number) {
    this.dialogService
      .show({
        primary: 'Cancel',
        secondary: 'Remove',
        title: 'Remove Segment',
        text: `Are you sure you want to this segment?
      Any unsaved changes will be lost.`,
      })
      .afterClosed()
      .subscribe((action) => {
        if (action === 'secondary') this.segments.splice(index, 1);
        this.activeIndex = Math.min(this.activeIndex, this.segments.length - 1);
      });
  }

  submit() {
    // TODO: send sign request
    this.dialogService
      .show({
        primary: 'I’ve Signed',
        secondary: 'Resend',
        title: 'Sign record',
        text: `Please sign the transaction with your Algorand wallet to complete submission. Thank you for using our decentralized medical health record system.`,
      })
      .afterClosed()
      .subscribe((action) => {
        if (action === 'primary') this.recordSubmitted();
      });
  }

  recordSubmitted() {
    this.ref.close();
    this.dialogService.show({
      primary: 'Dismiss',
      secondary: 'Resend',
      text: `Your record has been successfully submitted to the decentralized medical health record system. It will be confirmed on the blockchain shortly`,
    });
  }
}
