import { FormControl, FormGroup, Validators } from '@angular/forms';

const _nameMaxLength: number = 8;
const _descriptionMaxLength: number = 32;

export type ConnectionRecordMetadataForm = {
  (): FormGroup;
  nameMaxLength: number;
  descriptionMaxLength: number;
};

export const connectionRecordMetadataForm: ConnectionRecordMetadataForm = () =>
  new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.maxLength(_nameMaxLength)],
    }),
    description: new FormControl<string>('', {
      validators: [Validators.maxLength(_descriptionMaxLength)],
    }),
  });

connectionRecordMetadataForm.nameMaxLength = _nameMaxLength;
connectionRecordMetadataForm.descriptionMaxLength = _descriptionMaxLength;
