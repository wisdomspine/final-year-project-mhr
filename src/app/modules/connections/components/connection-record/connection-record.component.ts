import { Component } from '@angular/core';
import { MockRecords } from '@mhr/components';

@Component({
  selector: 'mhr-connection-record',
  template: `
    <mhr-record-page
      title="Facility (FCT)"
      [recordFields]="recordFields"
    ></mhr-record-page>
  `,
})
export class ConnectionRecordComponent {
  readonly recordFields = MockRecords;
}
