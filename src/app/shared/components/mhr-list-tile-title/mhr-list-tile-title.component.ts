import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mhr-list-tile-title',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,

  styles: [
    `
      :host {
        word-break: break-word;
        color: var(--mhr-primary-color);
        &.mat-subtitle-1 {
          margin-bottom: 0px;
        }
      }
    `,
  ],
})
export class MhrListTileTitleComponent {
  @HostBinding('class.mat-subtitle-1')
  bind: boolean = true;
}
