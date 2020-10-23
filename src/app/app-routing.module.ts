import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/show2',
    pathMatch: 'full',
  },
  // {
  //   path:'show',
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  // },
  {
    path:'show2',
    loadChildren: () => import('./customers2/customers2.module').then(m => m.Customers2Module)
  },
  {
    path:'show3',
    loadChildren: () => import('./customers3/customers3.module').then(m => m.Customers3Module)
  },
  {
    path:'show4',
    loadChildren: () => import('./customers4/customers4.module').then(m => m.Customers4Module)
  },
  {
    path:'show5',
    loadChildren: () => import('./customers5/customers5.module').then(m => m.Customers5Module)
  },
  {
    path:'show6',
    loadChildren: () => import('./customers6/customers6.module').then(m => m.Customers6Module)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
