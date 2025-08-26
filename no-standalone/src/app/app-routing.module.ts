import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { LoggedComponent } from './components/mid/day-04/logged/logged.component';
import { LoginComponent } from './components/mid/day-04/login/login.component';
import { authGuard } from './guards/mid/day-04/auth.guard';

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
    path: 'logged',
    component: LoggedComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
