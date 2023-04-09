import { Component, Input } from '@angular/core';

@Component({
  selector: 'patient-list-tile',
  template: `
    <mhr-list-tile [active]="active">
      <mhr-list-tile-title>
        {{ name }}
      </mhr-list-tile-title>
      <mhr-list-tile-subtitle>
        {{ address }}
      </mhr-list-tile-subtitle>
      <mhr-list-tile-action>
        <span>
          {{ connections }}&nbsp;{{
            connections > 1 ? 'connections' : 'connection'
          }}
        </span>
      </mhr-list-tile-action>
    </mhr-list-tile>
  `,
  styleUrls: ['./patient-list-tile.component.scss'],
})
export class PatientListTileComponent {
  @Input()
  name!: string;

  @Input()
  address!: string;

  @Input()
  connections!: number;

  @Input()
  active: boolean = false;
}
