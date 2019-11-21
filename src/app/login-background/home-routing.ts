import {LoginBackgroundComponent} from './login-background.component';
import {LoginComponent} from '../login/login.component';
import {LiteraryComponent} from './literary/literary.component';


export const homeRout = [
  {
    path: '',
    redirectTo: 'homepages',
    pathMatch: 'full'
  },
  {
    path: 'homepages',
    component: LoginBackgroundComponent
  },
  {
    path: 'literary',
    component: LiteraryComponent
  },
];
