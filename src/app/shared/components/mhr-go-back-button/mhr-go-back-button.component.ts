import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
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
})
export class MhrGoBackButtonComponent {}
