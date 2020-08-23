import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var _:any;
function getob(data){
  return new BehaviorSubject(data)
}
function getobo(data){
  return data.asObservable();
}

@Injectable({
  providedIn: 'root'
})
export class HeroService  {
  constructor() { }
  getrx(data){
    return ((d)=>{ return {ob:d,obo:getobo(d)}; })(getob(data))
  }
  data = this.getrx({});
}
