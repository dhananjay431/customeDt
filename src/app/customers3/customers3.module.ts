import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { Customers3RoutingModule } from './customers3-routing.module';
import { Customers3ListComponent } from './customers3-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [Customers3ListComponent],
  imports: [
    CommonModule,
    Customers3RoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class Customers3Module { }
