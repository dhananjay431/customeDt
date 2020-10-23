import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers6-list',
  templateUrl: './customers6-list.component.html',
  styleUrls: ['./customers6-list.component.scss']
})
export class Customers6ListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  dtOptions: DataTables.Settings = {};
  data:any  ={
    data:[]
  }
  ngOnInit(): void {
    this.dtOptions = {
    
    };

    this.refresh();
  }
  cordysData(){
    let obj ={
      unit:'BLR-MEDICARE',
      custType:'Non Govt.',
      linkstat:1,
      amntFrom:'',
      amntTo:'',
      cusFilter:''
    };
  }
  refresh(){
    let vm = this;
    fetch('http://jsonresp.herokuapp.com/datatable/100')
      .then(response => response.json())
      .then(json => {
        vm.data = json;
      })
  }



}
