import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignIn } from '../models/signIn.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  newSignIn: SignIn = {
    firstName: '',
    lastName: '',
    email: '',
  };

  onSubmit(): void {
    console.log('submitting the form :');
    console.log(this.newSignIn);
  }
}
