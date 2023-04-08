import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'mhr-list-tile',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  template: `
    <div class="container" matRipple [matRippleDisabled]="rippleDisabled">
      <!-- titles -->
      <div class="titles">
        <ng-content select="mhr-list-tile-title"></ng-content>
        <ng-content select="mhr-list-tile-subtitle"></ng-content>
      </div>
      <ng-content select="mhr-list-tile-action"></ng-content>
    </div>
  `,
  styleUrls: ['./mhr-list-tile.component.scss'],
})
export class MhrListTileComponent {
  @HostBinding('class.active')
  @Input()
  active: boolean = false;

  @Input()
  rippleDisabled: boolean = false;
}
