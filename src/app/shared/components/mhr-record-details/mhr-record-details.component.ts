import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MhrConnectionStatus,
  MhrListTileComponent,
  MhrListTileSubtitleComponent,
  MhrListTileTitleComponent,
} from '@mhr/components';

export interface MhrRecordField {
  name: string | number;
  value: string | number;
  status?: MhrConnectionStatus;
}
@Component({
  selector: 'mhr-record-details',
  standalone: true,
  imports: [
    CommonModule,
    MhrListTileComponent,
    MhrListTileTitleComponent,
    MhrListTileSubtitleComponent,
  ],
  template: `
    <mhr-list-tile *ngFor="let item of details" [rippleDisabled]="true">
      <mhr-list-tile-title>
        <span class="mat-caption">
          {{ item.name }}
        </span>
      </mhr-list-tile-title>
      <mhr-list-tile-subtitle [class]="item.status">
        <span class="mat-subtitle-1">
          {{ item.value }}
        </span>
      </mhr-list-tile-subtitle>
    </mhr-list-tile>
  `,
  styleUrls: ['./mhr-record-details.component.scss'],
})
export class MhrRecordDetailsComponent {
  @Input()
  details: MhrRecordField[] = [];
}

export const MockRecords: MhrRecordField[] = [
  {
    name: 'Connection address',
    value: '4ZK3UPFRJ643ETWSWZ4YJXH3LQTL2FUEI6CIT7HEOVZL6JOECVRMPP34CY',
  },
  {
    name: 'Connection name',
    value: 'Admission at FMC Keffi',
  },
  {
    name: 'Creator’s address',
    value: 'x0989289cfdbcea',
  },
  {
    name: 'Amount required to join',
    value: '0.3 Algos',
  },
  {
    name: 'Records',
    value: '23',
  },
  {
    name: 'Status',
    value: 'Active',
  },
  {
    name: 'Auto-ends in ',
    value: '30 minutes',
  },
  {
    name: 'Started',
    value: '40 minutes ago',
  },
  {
    name: 'Description',
    value: 'Please approve this connection to allow us',
  },
];
