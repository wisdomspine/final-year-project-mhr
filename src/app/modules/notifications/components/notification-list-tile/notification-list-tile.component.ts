import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification-list-tile',
  template: `
    <mhr-list-tile [active]="active">
      <mhr-list-tile-title>
        {{ title }}
      </mhr-list-tile-title>
      <mhr-list-tile-subtitle>
        {{ description }}
      </mhr-list-tile-subtitle>
      <mhr-list-tile-action>
        <span>
          {{ time | mhrRelativeTime }}
        </span>
      </mhr-list-tile-action>
    </mhr-list-tile>
  `,
  styleUrls: ['./notification-list-tile.component.scss'],
})
export class NotificationListTileComponent {
  @Input()
  title!: string;

  @Input()
  description!: string;

  @Input()
  time!: Date | string | number;

  @Input()
  active: boolean = false;
}
