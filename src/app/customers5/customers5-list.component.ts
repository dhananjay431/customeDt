import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { data } from "./data";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-customers5-list',
  templateUrl: './customers5-list.component.html',
  styleUrls: ['./customers5-list.component.scss']
})
export class Customers5ListComponent  implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  constructor() { }
  refresh(){
    let vm = this;
    fetch('http://jsonresp.herokuapp.com/datatable/'+Math.floor(Math.random() * 101))
      .then(response => response.json())
      .then(json => {
        this.dtOptions.data = json.data;
        vm.rerenderIn();
      });
  }
  ngOnInit(): void {
    this.dtOptions = {
      data:[],
      columns: [{
        title: 'Product',
        data: 'product'
      }, {
        title: 'city',
        data: 'city'
      }, {
        title: 'First Name',
        data: 'user.firstName'
      }]
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  rerenderIn(): void {
    let vm = this;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}