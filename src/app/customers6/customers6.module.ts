import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customers6RoutingModule } from './customers6-routing.module';
import { Customers6ListComponent } from './customers6-list.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [Customers6ListComponent],
  imports: [
    CommonModule,
    Customers6RoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class Customers6Module { }
