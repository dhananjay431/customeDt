import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customers4RoutingModule } from './customers4-routing.module';
import { Customers4ListComponent } from './customers4-list.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [Customers4ListComponent],
  imports: [
    CommonModule,
    Customers4RoutingModule,
    DataTablesModule
  ]
})
export class Customers4Module { }
