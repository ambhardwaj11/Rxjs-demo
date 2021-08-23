import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtlitiyService } from '../design-utlitiy.service';

@Component({
  selector: 'app-offrom',
  templateUrl: './offrom.component.html',
  styleUrls: ['./offrom.component.css']
})
export class OffromComponent implements OnInit {

  objMsg;
  constructor( private designUtility : DesignUtlitiyService ) { }

  ngOnInit(): void {


    const obj1 = of('Anup', 'Shekhar' , 'Anmol')
     obj1.subscribe( res => { console.log(res) 
      this.designUtility.print(res,'elcontainer')
    })

    const obj2 = of({ a:'Aman', b:'Souvik',c:'Rupesh' })

    // FROM OBJECTS
     obj2.subscribe( res => {
      this.objMsg = res 
      console.log( 'objMsg => ', res) 
    })

      //  FROM ARRAY
    const Obs3=from(['Warton', 'Alex' , 'John'])
    Obs3.subscribe( res => {
      this.designUtility.print(res,'elcontainer6')
    })

    //  FROM PROMISE
    const promise = new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve('Promised Resolved')
      }, 3000);
    })

    const obj4= from(promise)
    obj4.subscribe(res =>{
      console.log('from Promise =>', res)
      this.designUtility.print(res,'elcontainer7')
    })

    //  FROM STRING
    const obj5= from("Welcome to New World")
    obj5.subscribe(res =>{
      console.log('From String =>', res)
      this.designUtility.print(res,'elcontainer8')
    })


  }

}
