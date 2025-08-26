import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/beginner/day/three/register-form/register-form.component';
import { UserCardComponent } from './components/beginner/day/two/user-card/user-card.component';
import { CounterComponent } from './components/beginner/day/one/counter/counter.component';
import { UserListComponent } from './components/beginner/day/three/user-list/user-list.component';
import { userResolver } from './resolvers/beginner/day/three/user.resolver';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DashboardComponent } from './components/beginner/day/seven/dashboard/dashboard.component';
import { HomeComponent } from './components/mid/day-01/home/home.component';
import { LoginComponent } from './components/mid/day-01/login/login.component';
import { authGuard } from './guards/mid/day-01/auth/auth.guard';
import { UserComponent } from './components/mid/day-02/user/user.component';
import { roleGuard } from './guards/mid/day-02/role/role.guard';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  }, 
  {
    path: 'register',
    component: RegisterFormComponent,
  }, 
  {
    path: 'user/:id',
    component: UserListComponent,
    resolve: {
      user: userResolver
    }
  },
  {
    path: '',
    component: MainViewComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile/:id',
    component: UserComponent,
    canActivate: [roleGuard]
  },
];
