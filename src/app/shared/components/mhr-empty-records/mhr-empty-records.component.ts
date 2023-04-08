import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mhr-empty-records',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <img src="/assets/images/empty-sheets.svg" />
    <p *ngIf="description">
      {{ description }}
    </p>
    <button
      *ngIf="buttonText"
      mat-flat-button
      color="primary"
      (click)="buttonClick.emit()"
    >
      <span class="text">
        {{ buttonText }}
      </span>
    </button>
  `,
  styleUrls: ['./mhr-empty-records.component.scss'],
})
export class MhrEmptyRecordsComponent {
  @Input()
  description!: string;

  @Input()
  buttonText!: string;

  @Output()
  buttonClick: EventEmitter<void> = new EventEmitter();
}
