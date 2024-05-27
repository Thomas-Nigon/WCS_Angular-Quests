import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isRequiredValidator } from '../shared/validators/isRequiredValidator';
import { CommonModule } from '@angular/common';
import { rangeDateValidator } from '../shared/validators/rangeDateValidator';
import { SearchMovieFormModel } from '../models/searchMovie.model';

@Component({
  selector: 'app-search-movies',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-movies.component.html',
  styleUrl: './search-movies.component.scss',
})
export class SearchMoviesComponent {
  constructor(private fb: NonNullableFormBuilder) {}
  searchMovieForm: FormGroup<SearchMovieFormModel> = this.fb.group(
    {
      id: [''],
      title: [''],
      info: this.fb.group({
        type: ['TV show'],
        releaseYear: [1900, [rangeDateValidator()]],
        description: [''],
      }),
    },
    { validators: isRequiredValidator('id', 'title') }
  );

  ngOnInit() {
    this.searchMovieForm.valueChanges.subscribe((value) => {
      this.searchMovieForm.patchValue({
        info: { description: 'short' },
      });
    });
  }
  submit() {
    console.log('test');
    console.log(this.searchMovieForm.value);
  }
}
