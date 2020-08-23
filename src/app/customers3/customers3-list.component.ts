import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-customers3-list',
  templateUrl: './customers3-list.component.html',
  styleUrls: ['./customers3-list.component.scss']
})
export class Customers3ListComponent implements OnInit {

  constructor(private hero:HeroService) { }
  
  data:any = {ob:"",obo:""};
  data2:any;
  data3:any;

  ngOnInit(): void {
    let that = this;
    this.data = this.hero.getrx({date:new Date().getTime()});
    // setInterval(()=>{
    //   this.data.ob.next({date:"_" + new Date().getTime()});
    // },500)

    this.data2 = that.hero.getrx({nn:"sdfsf"});
    this.data3 = that.hero.data;

    this.data3.obo.subscribe(s =>{
      s.cus3 = new Date().getTime();
        
      that.data3.ob.next(s);
      //   fetch('http://jsonresp.herokuapp.com/datatable')
      // .then(response => response.json())
      // .then(json => {
      //   s.dt = json;
      //   that.data3.ob.next(s);
      // })

    })


  
    

  }
  set(data){
    
    let d = {tax:new Date().getTime()}
    this.data2.ob.next(d);
    return d;
  }  
  getOb(){
    this.data2.ob.next({mm:new Date().getTime()})
    this.data3.ob.next({mm:new Date().getTime()})
  }
  changeOb(){
    this.data.ob.next({date:new Date().getTime()});
  }

}
