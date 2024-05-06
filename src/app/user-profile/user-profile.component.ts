import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user-profile';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    hidden: false,
  };
  showAge: boolean = true;
  handleClick() {
    this.showAge = !this.showAge;
  }
}
