import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export type FormFieldType = 'select' | 'text';
export interface FormFieldOptions {
  display: string;
  selected?: boolean;
  value: string;
}

@Component({
  selector: 'mhr-record-form-field',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  template: `
    <mat-form-field appearance="outline">
      <mat-label *ngIf="label || placeholder">
        {{ label || placeholder }}
      </mat-label>
      <input
        *ngIf="type === 'text'"
        matInput
        [formControl]="control"
        [placeholder]="placeholder || ''"
      />
      <mat-select *ngIf="type === 'select'" [formControl]="control">
        <mat-option *ngFor="let option of options ?? []" [value]="option.value">
          {{ option.display }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styleUrls: ['./mhr-record-form-field.component.scss'],
})
export class MhrRecordFormFieldComponent {
  @Input()
  type: FormFieldType = 'text';

  @Input()
  placeholder!: string;

  @Input()
  label!: string;

  @Input()
  control!: FormControl;

  @Input()
  options!: FormFieldOptions[];
}
