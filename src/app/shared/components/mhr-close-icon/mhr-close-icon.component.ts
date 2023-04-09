import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MhrIconButtonComponent } from '@mhr/components/mhr-icon-button/mhr-icon-button.component';

@Component({
  selector: 'mhr-close-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule, MhrIconButtonComponent],
  template: `
    <mhr-icon-button>
      <mat-icon color="primary" svgIcon="xmark"> </mat-icon>
    </mhr-icon-button>
  `,
  styles: [
    `
      mat-icon {
        width: 24px;
      }
    `,
  ],
})
export class MhrCloseIconComponent {}
