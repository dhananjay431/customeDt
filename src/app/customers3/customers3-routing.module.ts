import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customers3ListComponent } from "./customers3-list.component";
const routes: Routes = [
  {
    path:"",
    component:Customers3ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customers3RoutingModule { }
