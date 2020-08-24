
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from, Subject, of } from 'rxjs';
import { map, tap, switchMap, finalize, take } from "rxjs/operators";
import { HeroService } from 'src/app/hero.service';
import { _ParseAST } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
declare var _:any;
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  tbl2:any = {
    ob:"",obo:false
  }
  tbl2Data = {
    row:10,
    pages:0,
    total:0,
    data:[],
    search:""
  };
  sub:any = {
    obo:false,
    og:""
  };
  tbl2DataClone:any;
  constructor(private hero:HeroService,private http:HttpClient){}
  ajax() {
    let vm = this;
    return from(fetch('http://jsonresp.herokuapp.com/datatable/95')
      .then(response => response.json()));
    
  }

/*   load(ob) {
    let vm = this;
    return of([]).pipe(
      tap(() => { vm.x = true; }),
      switchMap(() => ob),
      finalize(() => { vm.x = false; })
    );
  } */

  tbl2show(data,flag){
    data.data = data.data.map(function(d){  d.sh = false; return d;});
    console.log("tbl2=>",data);
    let vm = this;
    if(flag != 'pages')
    {
       data.pages = 1;
    }
      let d =  data.data;
      if(data.search != ""){
        
        d.data = d.data.filter(x =>{
          return x.product.match(RegExp(data.search,"i"));
       }).map((d)=> {d.sh = true; return d});

       vm.tbl2Data.total = d.data.length;
       vm.tbl2Data.data =  d.data.splice((data.pages - 1)*(data.row),( Number(data.row))).map((d)=> {d.sh = true; return d});
       
      }else{
        vm.tbl2Data.total = d.data.length;
        vm.tbl2Data.data =  d.data.splice((data.pages - 1)*(data.row),( Number(data.row))).map((d)=> {d.sh = true; return d});
        
        //vm.tbl2.ob.next(d);
      }
      return data;
    
  }
  refresh(){
    let vm = this;
    vm.ajax().subscribe(s =>{
        s.row = 2;
        s.pages = 1;
        s.total = s.data.length;
        s.data = s.data;
        s.search = "";
        vm.tbl2Data = _.cloneDeep(s);
     //   vm.tbl2DataClone = _.cloneDeep(s);
        vm.tbl2show(vm.tbl2Data,"table");
      // /vm.tbl2 = vm.hero.getrx(s);
    })
  }
  pre(data){
    data.pages -= 1;
     return data;
  }
  next(data){
    data.pages += 1;
     return data;
  }
  ngOnInit() {
    let vm = this;
      // this.refresh();
      this.http.get("http://jsonresp.herokuapp.com/datatable").subscribe(r =>{
        vm.sub = this.hero.getrx(r);
      })
      
  }
  change(data,id){
    let vm = this;
    if(id === 'row'){
      this.http.get("http://jsonresp.herokuapp.com/datatable/"+data.row).pipe(
          map((d:any) => { d.data = d.data.map(x => { x.flag=true; return x;}); return d; }),
          tap(d => console.log("print=>",d))
      ).subscribe(r =>{
        vm.sub.ob.next(r);
      })
    }
    console.log("data=>",data);
     this.sub.ob.next(data);
  }


}

