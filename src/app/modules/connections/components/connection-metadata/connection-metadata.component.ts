import { Component } from '@angular/core';
import { MockRecords } from '@mhr/components';

@Component({
  selector: 'mhr-connection-metadata',
  template: `
    <mhr-record-page
      title="Metadata"
      [recordFields]="recordFields"
    ></mhr-record-page>
  `,
})
export class ConnectionMetadataComponent {
  readonly recordFields = MockRecords;
}
