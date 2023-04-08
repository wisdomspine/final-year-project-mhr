import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MhrIconButtonComponent } from '@mhr/components';

@Component({
  selector: 'mhr-add-record-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule, MhrIconButtonComponent],
  template: `
    <mhr-icon-button>
      <div class="content">
        <mat-icon color="primary" svgIcon="plus"> </mat-icon>
      </div>
    </mhr-icon-button>
  `,
  styleUrls: ['./mhr-add-record-icon.component.scss'],
})
export class MhrAddRecordIconComponent {}
