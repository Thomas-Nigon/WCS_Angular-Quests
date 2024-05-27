import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const minDate = new Date(1900, 0, 1).getFullYear();

    const today = new Date().getFullYear();

    const movieRealease = new Date(control.value, 0, 1).getFullYear();

    if (movieRealease >= minDate && movieRealease <= today) {
      return null;
    } else {
      return {
        isValid: {
          valid: false,
        },
      };
    }
  };
}
