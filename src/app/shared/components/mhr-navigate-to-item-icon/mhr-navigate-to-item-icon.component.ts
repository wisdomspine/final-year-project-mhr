import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mhr-navigate-to-item-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: ` <mat-icon svgIcon="chevron-right"> </mat-icon> `,
  styles: [
    `
      mat-icon {
        height: 14px;
      }
    `,
  ],
})
export class MhrNavigateToItemIconComponent {}
