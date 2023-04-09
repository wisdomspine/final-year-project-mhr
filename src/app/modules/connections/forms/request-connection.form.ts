import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const emptyPeriod: ValidatorFn = (control: AbstractControl) => {
  const { hours, minutes } = control.value;
  if (typeof hours == 'number' && typeof minutes == 'number') {
    return hours * 60 + minutes > 0 ? null : { emptyPeriod: true };
  }
  return null;
};
export const requestConnectionForm = () => {
  return new FormGroup(
    {
      address: new FormControl<string>('', {
        validators: [Validators.required],
      }),
      name: new FormControl<string | undefined>(undefined, {
        validators: [Validators.maxLength(16)],
      }),
      description: new FormControl<string | undefined>(undefined, {
        validators: [Validators.maxLength(64)],
      }),
      hours: new FormControl<number>(0, {
        validators: [Validators.min(0)],
      }),
      minutes: new FormControl<number>(0, {
        validators: [Validators.max(59), Validators.min(0)],
      }),
    },
    {
      validators: [emptyPeriod],
    }
  );
};
