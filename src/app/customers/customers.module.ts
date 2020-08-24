import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CustomersModule { }
