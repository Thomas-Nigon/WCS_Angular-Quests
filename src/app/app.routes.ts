import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DirectivesComponent } from './directives/directives.component';
import { MenuComponent } from './menu/menu.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', component: MenuComponent },
  { path: 'form', component: SignUpComponent },
  { path: 'movies', component: SearchMoviesComponent },
];
