import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customers3RoutingModule } from './customers3-routing.module';
import { Customers3ListComponent } from './customers3-list.component';


@NgModule({
  declarations: [Customers3ListComponent],
  imports: [
    CommonModule,
    Customers3RoutingModule
  ]
})
export class Customers3Module { }
