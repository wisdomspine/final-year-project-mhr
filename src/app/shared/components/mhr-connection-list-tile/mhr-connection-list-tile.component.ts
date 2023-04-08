import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MhrListTileActionComponent,
  MhrListTileComponent,
  MhrListTileSubtitleComponent,
  MhrListTileTitleComponent,
} from '@mhr/components';
import { MhrRelativeTimePipe } from '@mhr/pipes';

export type MhrConnectionStatus = 'active' | 'pending' | 'completed';

@Component({
  selector: 'mhr-connection-list-tile',
  standalone: true,
  imports: [
    CommonModule,
    MhrListTileComponent,
    MhrListTileTitleComponent,
    MhrListTileSubtitleComponent,
    MhrListTileActionComponent,
    MhrRelativeTimePipe,
  ],
  template: `
    <mhr-list-tile [active]="active">
      <mhr-list-tile-title>
        {{ name }}
      </mhr-list-tile-title>
      <mhr-list-tile-subtitle>
        {{ time | mhrRelativeTime }}
      </mhr-list-tile-subtitle>
      <mhr-list-tile-action>
        <span>
          {{ status }}
        </span>
      </mhr-list-tile-action>
    </mhr-list-tile>
  `,
  styleUrls: ['./mhr-connection-list-tile.component.scss'],
})
export class MhrConnectionListTileComponent {
  @Input()
  name!: string;

  @Input()
  time!: string | Date | number;

  @HostBinding('class')
  @Input()
  status!: MhrConnectionStatus;

  @Input()
  active: boolean = false;
}
