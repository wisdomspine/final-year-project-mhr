import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mhr-list-tile-action',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
})
export class MhrListTileActionComponent {}
