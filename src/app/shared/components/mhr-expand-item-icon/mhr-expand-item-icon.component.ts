import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mhr-expand-item-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `<mat-icon svgIcon="expand-arrow" color="primary"></mat-icon>`,
  styles: [
    `
      mat-icon {
        width: 16px;
      }
    `,
  ],
})
export class MhrExpandItemIconComponent {}
