import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customers5ListComponent } from '../customers5/customers5-list.component';
import { Customers4ListComponent } from './customers4-list.component';

const routes: Routes = [
  {
    path:"",
    component:Customers4ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customers4RoutingModule { }
