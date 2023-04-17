import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckComponentDeactivation } from '@app/core/guards';
import { RecordFields } from '@mhr/components';

@Component({
  selector: 'mhr-new-profile-record',
  templateUrl: './new-profile-record.component.html',
  styleUrls: ['./new-profile-record.component.scss'],
})
export class NewProfileRecordComponent implements CheckComponentDeactivation {
  readonly records: RecordFields = {
    id: {
      placeholder: 'Staff ID',
      type: 'text',
      label: 'ID',
    },
    name: {
      label: 'Name',
      placeholder: 'Name',
      type: 'text',
    },
  };

  readonly form = new FormGroup<{ [key: string]: FormControl }>({
    id: new FormControl(),
    name: new FormControl(),
  });

  canDeactivate() {
    return !(this.form.dirty || this.form.touched);
  }
}
