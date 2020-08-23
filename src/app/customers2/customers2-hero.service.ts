import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Customers2HeroService {

  constructor() { }
  get(){
     let ob = new BehaviorSubject([]);
     let obo = ob.asObservable();
     return {ob,obo};
  }

}
