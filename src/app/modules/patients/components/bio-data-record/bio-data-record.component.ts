import { Component } from '@angular/core';
import { MockRecords } from '@mhr/components';

@Component({
  selector: 'mhr-bio-data-record',
  template: `
    <mhr-record-page
      title="Facility (FCT)"
      [recordFields]="recordFields"
    ></mhr-record-page>
  `,
})
export class BioDataRecordComponent {
  readonly recordFields = MockRecords;
}
