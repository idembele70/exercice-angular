import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/mid/day-03/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: '',
    component: MainViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
