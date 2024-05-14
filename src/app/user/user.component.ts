import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  userName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  number = new FormControl('');
  zipcode = new FormControl('');
  city = new FormControl('');

  onSubmit(): void {
    this.newUser = new User(
      this.userName.value,
      this.email.value,
      this.password.value,
      this.street.value,
      this.number.value,
      this.zipcode.value,
      this.city.value
    );
  }
}
