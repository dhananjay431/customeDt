import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customers5RoutingModule } from './customers5-routing.module';
import { Customers5ListComponent } from './customers5-list.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [Customers5ListComponent],
  imports: [
    CommonModule,
    Customers5RoutingModule,
    DataTablesModule
  ]
})
export class Customers5Module { }
