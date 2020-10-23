import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { HeroService } from "../../hero.service";
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-customers2-list',
  templateUrl: './customers2-list.component.html',
  styleUrls: ['./customers2-list.component.scss']
})
export class Customers2ListComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<any>;

  dtOptions: DataTables.Settings[] = [];

  dtOption1;
  dtOption2;
  dtOption3;
  dt3:any;
  persons1:any;
  persons2:any;
  persons3 :any = {
    data:[],
      recordsTotal:0,
  recordsFiltered:0
  };
  flag = "user";
  
  sh(data){
    this.flag = data;
  }
  data3:any;
  constructor(private http:HttpClient,private hero:HeroService) { }


  displayToConsole(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      dtElement.dtInstance.then((dtInstance: any) => {
        console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
      });
    });
  }


  ngOnInit(): void {

    this.data3 = this.hero.data;
    let that = this;
    this.dtOption1 = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        that.http.get<any>('http://jsonresp.herokuapp.com/datatable/'+dataTablesParameters.length).subscribe(resp => {
            that.persons1 = resp.data;
  
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
   //   columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
    this.dtOption2 = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http.get<any>('http://jsonresp.herokuapp.com/datatable/'+dataTablesParameters.length).subscribe(resp => {
            that.persons2 = resp.data;
  
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
   //   columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
    this.dtOptions[0] = this.dtOption1;
    this.dtOptions[1] = this.dtOption2;




    this.http.get("http://jsonresp.herokuapp.com/datatable/10").pipe(
      tap(d => {

        that.persons3 = d;
        console.log("that.persons3 init =>",that.persons3)
      } )
    ).subscribe(resp =>{
       that.dt3 = that.hero.getrx(resp);

    })

    that.dtOption3 = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        
      console.log("that.persons3 in ajax=>",that.persons3)
        that.dt3.ob.next(that.persons3);
        that.persons3 = that.persons3;
        
        callback({
          recordsTotal: that.persons3.recordsTotal,
          recordsFiltered: that.persons3.recordsFiltered,
          data: []
        });
        
      },
   //   columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
    this.dtOptions[2] = this.dtOption3;

 

    
  }  
  
  }