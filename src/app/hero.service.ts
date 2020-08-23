import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  get(data){
    let ob = new BehaviorSubject(data);
    let obo = ob.asObservable();
    return {ob,obo};
 }
  
}
