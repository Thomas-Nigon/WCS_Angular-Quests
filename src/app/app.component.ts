import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { OnomatoepiaComponent } from './onomatoepia/onomatoepia.component';
import { HelloWorldService } from './Services/hello-world.service';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    MyFormComponent,
    DeveloperComponent,
    SkillComponent,
    OnomatoepiaComponent,
    CocktailListComponent,
    UserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular_Quest_14';
  private helloWorldService = inject(HelloWorldService);
  onClick() {
    console.log(this.helloWorldService.getHelloWorld());
  }
}
