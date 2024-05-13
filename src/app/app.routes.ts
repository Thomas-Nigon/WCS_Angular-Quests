import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DeveloperComponent } from './developer/developer.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'form', component: SignUpComponent },
  { path: 'developer', component: DeveloperComponent },
];
