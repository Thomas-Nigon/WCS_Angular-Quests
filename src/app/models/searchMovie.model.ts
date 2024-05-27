import { FormControl, FormGroup } from '@angular/forms';

export interface SearchMovieFormModel {
  id: FormControl<string>;
  title: FormControl<string>;
  info: FormGroup<{
    type: FormControl<string>;
    releaseYear: FormControl<number>;
    description: FormControl<string>;
  }>;
}
