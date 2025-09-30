import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { UnauthorizedComponent } from './components/mid/day-07/unauthorized/unauthorized.component';
import { AdminComponent } from './components/mid/day-07/admin/admin.component';
import { roleGuard } from './guards/mid/day-07/role.guard';
import { LoginComponent } from './components/mid/day-11/login/login.component';
import { ProfileComponent } from './components/mid/day-11/profile/profile.component';
import { UserResolver } from './resolvers/mid/day-11/user.resolver';
import { AuthGuard } from './guards/mid/day-11/auth.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/mid/day-03/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: '',
    component: MainViewComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [roleGuard]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'day-11/login',
    component: LoginComponent,
  },
  {
    path: 'day-11/profile/:id',
    component: ProfileComponent,
    resolve: {
      user: UserResolver,
    },
    canActivate: [AuthGuard]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
