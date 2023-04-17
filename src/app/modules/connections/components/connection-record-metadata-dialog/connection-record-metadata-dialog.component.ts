import { Component, inject } from '@angular/core';
import { connectionRecordMetadataForm } from '../../forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mhr-connection-record-metadata-dialog',
  templateUrl: './connection-record-metadata-dialog.component.html',
  styleUrls: ['./connection-record-metadata-dialog.component.scss'],
})
export class ConnectionRecordMetadataDialogComponent {
  form = connectionRecordMetadataForm();
  readonly connectionRecordMetadataForm = connectionRecordMetadataForm;
  readonly ref = inject(MatDialogRef<ConnectionRecordMetadataDialogComponent>);

  submit() {
    this.ref.close(this.form.value);
  }
}
