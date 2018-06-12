import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/components/dashboard/component';
import {LoginComponent} from './usuario/components/login/component';
import {AppAuth} from './app.auth';

export const routes: Routes = [
  {path: 'home', component: DashboardComponent, canActivate: [AppAuth]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
