import { Component } from '@angular/core';
import { MockRecords } from '@mhr/components';

@Component({
  selector: 'mhr-profile-record',
  template: `
    <mhr-record-page title=" " [recordFields]="recordFields"></mhr-record-page>
  `,
})
export class ProfileRecordComponent {
  readonly recordFields = MockRecords;
}
