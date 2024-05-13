import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatoepia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatoepia.component.html',
  styleUrl: './create-onomatoepia.component.scss',
})
export class CreateOnomatoepiaComponent {
  newOnomatoepia: string = '';
  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
  createOnomatoepia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatoepia);
    console.log('create onomatoepia:', this.newOnomatoepia);
  }
}
