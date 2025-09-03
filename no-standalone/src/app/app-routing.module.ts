import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { UnauthorizedComponent } from './components/mid/day-07/unauthorized/unauthorized.component';
import { AdminComponent } from './components/mid/day-07/admin/admin.component';
import { roleGuard } from './guards/mid/day-07/role.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
