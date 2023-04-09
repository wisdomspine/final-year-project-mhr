import { Component, HostBinding, Input } from '@angular/core';

export type ProfileRecordStatus = 'pending' | 'signed';
@Component({
  selector: 'profile-record-list-tile',
  template: `
    <mhr-list-tile [active]="active">
      <mhr-list-tile-title>
        {{ address }}
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
  styleUrls: ['./profile-record-list-tile.component.scss'],
})
export class ProfileRecordListTileComponent {
  @Input()
  address!: string;

  @Input()
  time!: string | Date | number;

  @HostBinding('class')
  @Input()
  status!: ProfileRecordStatus;

  @Input()
  active: boolean = false;
}
