import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value);
    const minDate = new Date(1900, 0, 1).getFullYear();
    console.log('minDate:', minDate);

    const today = new Date().getFullYear();
    console.log('today:', today);
    const movieRealease = new Date(control.value, 0, 1).getFullYear();
    console.log('movieRealease: ', movieRealease);
    if (movieRealease > minDate && movieRealease < today) {
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
