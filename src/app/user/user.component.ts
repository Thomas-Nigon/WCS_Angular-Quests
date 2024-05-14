import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { User } from '../models/myUser.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  public newUser: User | undefined;

  public userForm = this.fb.group({
    userName: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
    /*     address: this.fb.group({
      street: [''],
      number: [''],
      zipCode: [''],
      city: [''],
    }), */
  });
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.userForm.value.credentials);
  }
}
