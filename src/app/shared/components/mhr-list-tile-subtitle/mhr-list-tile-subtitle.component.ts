import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mhr-list-tile-subtitle',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        color: var(--mhr-text-color);
      }
    `,
  ],
})
export class MhrListTileSubtitleComponent {
  @HostBinding('class.mat-subtitle-2')
  bind: boolean = true;
}
