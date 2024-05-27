import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isRequiredValidator } from '../shared/validators/isRequiredValidator';
import { CommonModule } from '@angular/common';
import { rangeDateValidator } from '../shared/validators/rangeDateValidator';

@Component({
  selector: 'app-search-movies',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-movies.component.html',
  styleUrl: './search-movies.component.scss',
})
export class SearchMoviesComponent {
  constructor(private fb: FormBuilder) {}
  public searchMovieForm = this.fb.group(
    {
      id: [],
      title: [''],
      info: this.fb.group({
        type: [''],
        releaseYear: [, [rangeDateValidator()]],
        description: [''],
      }),
    },
    { validators: isRequiredValidator('id', 'title') }
  );

  ngOnInit() {
    this.searchMovieForm.patchValue({
      info: { description: 'short' },
    });
  }
  submit() {
    console.log('test');
    console.log(this.searchMovieForm.value);
  }
}
