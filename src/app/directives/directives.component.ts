import { Component } from '@angular/core';
import { Directives } from './directives';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  directives: Directives = {
    title: 'Wassup',
  };
  isAdmin: boolean = true;
  handleClick() {
    console.log('toggle is admin');
    this.isAdmin = !this.isAdmin;
  }
}
