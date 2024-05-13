import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form/my-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    MyFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular_Quest_03';
}
