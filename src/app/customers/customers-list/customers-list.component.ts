
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from, Subject, of } from 'rxjs';
import { map, tap, switchMap, finalize, take } from "rxjs/operators";
import { HeroService } from 'src/app/hero.service';
import { _ParseAST } from '@angular/compiler';
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

  constructor(private hero:HeroService){}
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

  tbl2show(data){
    console.log("tbl2=>",data);
    let vm = this;
    let d =  _.cloneDeep(this.tbl2Data)
    if(d.search != ""){
      d.data = d.data.filter(x =>{
        return x.product.match(RegExp(d.search,"i"));
     })
     d.data =  d.data.splice((data.pages - 1)*(data.row),( Number(data.row)));
     vm.tbl2.ob.next(d);
     return d.data;
    }else{
      
      d.data =  d.data.splice((data.pages - 1)*(data.row),( Number(data.row)));
      vm.tbl2.ob.next(d);
      return d.data;
    }
    ;
  }
  refresh(){
    let vm = this;
    vm.ajax().subscribe(s =>{
        s.row = 10;
        s.pages = 1;
        s.total = s.data.length;
        s.data = s.data;
        s.search = "";
        vm.tbl2Data = s;
      vm.tbl2 = vm.hero.getrx(s);
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
      this.refresh();
  }


}

