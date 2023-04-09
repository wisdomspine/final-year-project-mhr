import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MhrIconButtonComponent } from '@mhr/components';

@Component({
  selector: 'mhr-go-back-button',
  standalone: true,
  imports: [CommonModule, MhrIconButtonComponent, MatIconModule],
  template: `
    <mhr-icon-button>
      <mat-icon svgIcon="arrow-left-long"> </mat-icon>
    </mhr-icon-button>
  `,
  styles: [
    `
      :host {
        mat-icon {
          width: 24px;
        }
      }
    `,
  ],
})
export class MhrGoBackButtonComponent {}
