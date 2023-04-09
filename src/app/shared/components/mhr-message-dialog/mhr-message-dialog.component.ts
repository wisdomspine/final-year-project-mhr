import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type MessageDialogAction = 'primary' | 'secondary';
export interface MessageDialogConfig {
  title?: string;
  text: string;
  primary: string;
  secondary?: string;
}

@Component({
  selector: 'mhr-message-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div matDialogContent class="content">
      <div
        *ngIf="data.title"
        [innerHTML]="data.title"
        class="mat-headline-5"
      ></div>
      <p [innerHTML]="data.text"></p>

      <!-- actions -->
      <div class="actions">
        <button
          mat-flat-button
          class="secondary"
          *ngIf="data.secondary"
          type="button"
          (click)="dialogRef.close('secondary')"
        >
          <span class="button-text">
            {{ data.secondary }}
          </span>
        </button>
        <button
          mat-flat-button
          class="primary"
          *ngIf="data.secondary"
          color="primary"
          type="button"
          (click)="dialogRef.close('primary')"
        >
          <span class="button-text">
            {{ data.primary }}
          </span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./mhr-message-dialog.component.scss'],
})
export class MhrMessageDialogComponent {
  dialogRef = inject(MatDialogRef<MhrMessageDialogComponent>);
  data: MessageDialogConfig = inject(MAT_DIALOG_DATA);
}
