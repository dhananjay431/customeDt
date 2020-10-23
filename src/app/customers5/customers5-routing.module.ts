import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customers5ListComponent } from './customers5-list.component';

const routes: Routes = [
  {
    path:"",
    component:Customers5ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customers5RoutingModule { }
