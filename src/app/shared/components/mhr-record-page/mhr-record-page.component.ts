import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MhrRecordDetailsComponent, MhrRecordField } from '@mhr/components';

@Component({
  selector: 'mhr-record-page',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MhrRecordDetailsComponent],
  template: `
    <!--header  -->
    <div class="header mat-headline-5" [matTooltip]="tooltip || title">
      {{ title }}
    </div>

    <!-- records -->
    <mhr-record-details [details]="recordFields"> </mhr-record-details>
  `,
  styleUrls: ['./mhr-record-page.component.scss'],
})
export class MhrRecordPageComponent {
  @Input()
  title!: string;

  @Input()
  tooltip!: string;

  @Input()
  recordFields: MhrRecordField[] = [];
}
