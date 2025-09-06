import { Routes } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { LoginComponent } from './components/mid/day-08/login/login.component';
import { authGuard } from './guards/mid/day-08/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/mid/day-08/admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
