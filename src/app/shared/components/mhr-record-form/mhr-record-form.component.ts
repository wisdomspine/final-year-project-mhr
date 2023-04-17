import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FormFieldOptions,
  FormFieldType,
  MhrRecordFormFieldComponent,
} from '@mhr/components';

interface _BaseRecordField {
  placeholder?: string;
  label: string;
  type: FormFieldType;
}

interface _TextRecordField extends _BaseRecordField {
  type: 'text';
}

interface _SelectRecordField extends _BaseRecordField {
  type: 'select';
  options: FormFieldOptions[];
}

export type RecordField = _TextRecordField | _SelectRecordField;
export interface RecordFields {
  [key: string]: RecordField;
}

@Component({
  selector: 'mhr-record-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MhrRecordFormFieldComponent],
  template: `
    <mhr-record-form-field
      *ngFor="let key of controlKeys"
      [type]="fields[key].type"
      [placeholder]="fields[key].placeholder ?? ''"
      [label]="fields[key].label"
      [control]="formGroup.controls[key]"
      [options]="getFieldOptions(key)"
    >
    </mhr-record-form-field>
  `,
  styleUrls: ['./mhr-record-form.component.scss'],
})
export class MhrRecordFormComponent {
  @Input()
  fields!: RecordFields;

  @Input()
  set formGroup(group: FormGroup<{ [key: string]: FormControl }>) {
    this._formGroup = group;
    this.controlKeys = Object.keys(this.formGroup.controls);
  }

  get formGroup(): FormGroup<{ [key: string]: FormControl }> {
    return this._formGroup;
  }

  getFieldOptions(key: string) {
    return (this.fields[key] as _SelectRecordField).options;
  }

  controlKeys: string[] = [];
  private _formGroup!: FormGroup;
}
