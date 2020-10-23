import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customers6ListComponent } from './customers6-list.component';

const routes: Routes = [
  {
    path:"",
    component:Customers6ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customers6RoutingModule { }
