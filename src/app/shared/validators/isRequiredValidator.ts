import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isRequiredValidator(id: any, title: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value1 = control.get(id)?.value;
    const value2 = control.get(title)?.value;

    return value1 || value2
      ? null
      : {
          isRequired: false,
        };
  };
}
