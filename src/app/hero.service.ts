import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var _:any;
@Injectable({
  providedIn: 'root'
})
export class HeroService  {

  constructor() { }
  getrx(data){
    let ob = new BehaviorSubject(data);
    let obo = ob.asObservable();
    return {ob:ob,obo:obo};
 }
    data = this.getrx({});
    

}
