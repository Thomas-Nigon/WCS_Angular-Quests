import { Component, input } from '@angular/core';
import { Developer } from '../models/developer.model';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent, CommonModule],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
  jacob = new Developer('Jacob', 'Delafon', 35, 'male', 'My info and bio', [
    new Skill(
      'React',
      'https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png',
      'https://react.dev/'
    ),
    new Skill(
      'Java',
      'https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png',
      'https://www.java.com/fr/'
    ),
    new Skill(
      'Angular',
      'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
      'https://angular.io/'
    ),
  ]);
}
