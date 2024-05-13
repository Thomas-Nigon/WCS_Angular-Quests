import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss',
})
export class MyFormComponent {
  newOrder: Order = {
    title: '',
    quantity: 0,
    date: new Date(),
    contact: '',
  };

  onSubmit(): void {
    console.log('submitting the form :');
    console.log(this.newOrder);
  }
}
