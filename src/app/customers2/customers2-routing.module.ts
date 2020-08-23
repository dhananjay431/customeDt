import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Customers2ListComponent } from "./customers2-list/customers2-list.component";
const routes: Routes = [
  {
    path:"",
    component:Customers2ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customers2RoutingModule { }
