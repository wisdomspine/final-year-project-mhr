import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'mhr-icon-button',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  template: `
    <div matRipple class="button" [matRippleDisabled]="rippleDisabled">
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        line-height: 1;
        &:not(.disabled) {
          cursor: pointer;
        }
        .button {
          padding: 8px;
          border-radius: 24px;
        }
      }
    `,
  ],
})
export class MhrIconButtonComponent {
  @HostBinding('class.disabled')
  @Input()
  rippleDisabled: boolean = false;
}
