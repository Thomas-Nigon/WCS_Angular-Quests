import { Component, EventEmitter, Output } from '@angular/core';
import { CreateOnomatoepiaComponent } from '../create-onomatoepia/create-onomatoepia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onomatoepia',
  standalone: true,
  imports: [CreateOnomatoepiaComponent, CommonModule],
  templateUrl: './onomatoepia.component.html',
  styleUrl: './onomatoepia.component.scss',
})
export class OnomatoepiaComponent {
  onomatoepiaList: Array<string> = [];
  onReceiveNewOnomatopia(onomatoepia: string): void {
    console.log('received onomatoepia:', onomatoepia);
    this.onomatoepiaList.push(onomatoepia);
  }
}
