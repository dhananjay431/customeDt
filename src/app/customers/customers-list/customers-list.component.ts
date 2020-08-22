
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from, Subject, of } from 'rxjs';
import { map, tap, switchMap, finalize, take } from "rxjs/operators";
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  title = 'customeDt';
  ob$: Subject<any>;
  obi$: Observable<any>;
  data: any = {
    row: 10,
    page: 2
  };
  tableData = [];
  x = false;
  ajax() {
    let vm = this;
    return from(fetch('http://jsonresp.herokuapp.com/datatable/95')
      .then(response => response.json())).pipe(
        map(d => d.data),
        tap((d) => {
          vm.tableData = d;
        })
      )
  }
  pagi(dta) {
    let x = Array.from(Array(Math.round(dta)), (_, i) => i + 1);
    return x;
  }
  show(data) {
    let start = ((Math.round(Number(this.data.page) - 1) * 10));
    console.log(start + 1, start + Math.round(Number(this.data.row)));
    return data.slice(start + 1, start + Math.round(Number(this.data.row)))
  }
  load(ob) {
    let vm = this;
    return of([]).pipe(
      tap(() => { vm.x = true; }),
      switchMap(() => ob),
      finalize(() => { vm.x = false; })
    );
  }
  ngOnInit() {


    let vm = this;

    vm.data = {
      row: 10,
      page: 1
    }
    this.ajax().subscribe(r => {
      vm.ob$ = new BehaviorSubject(r);
      vm.obi$ = this.ob$.asObservable();
    })
  }
  change(id, data) {
    let vm = this;
    if (id == 'row') {
      this.data = {
        row: data,
        page: 1
      };
    }
    if (id == 'page') {
      this.data.page = data;
    }
    if (id == 'btn') {
      this.data = {
        row: 10,
        page: 1
      };
      vm.load(vm.ajax()).subscribe(resp => {
        vm.ob$.next(resp)
      })
    } else {
      vm.ob$.next(vm.tableData)
    }
    console.log("dd show=>", this.data);
  }

}

