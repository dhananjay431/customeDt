import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Customers2RoutingModule } from './customers2-routing.module';
import { Customers2ListComponent } from './customers2-list/customers2-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Customers2ListComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    Customers2RoutingModule,
    HttpClientModule
  ]
})
export class Customers2Module { }
