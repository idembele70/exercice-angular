import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './guards/day/three/auth.guard';
import { RegisterFormComponent } from './components/day/three/register-form/register-form.component';
import { UserCardComponent } from './components/day/two/user-card/user-card.component';
import { CounterComponent } from './components/day/one/counter/counter.component';
import { UserListComponent } from './components/day/three/user-list/user-list.component';
import { userResolver } from './resolvers/day/three/user.resolver';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
    canActivate: [authGuard]
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
  }
];
