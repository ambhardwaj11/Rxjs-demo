import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  promiseVal:any

  constructor() { }

  dellAvailable(){
      return true
  }
  
  hpAvailable(){
      return false
  }
  dell={
    brand:'dell',
    color:'black',
  }
  hp={
    brand:'hp',
    color:'white',
  }
  nota={
    brand:'not available',
    color:'failed',
  }


  ngOnInit(): void {

    let buylaptop = new  Promise((resovle, reject)=>{
      // resovle("promise is resovled")
      // reject("promise is not not not not")
      if(this.dellAvailable()) {
        return setTimeout(() => {
          // resovle("dell is available")
          resovle(this.dell)
        }, 5000);
      }else if(this.hpAvailable()){
        return setTimeout(() => {
          // resovle("hp is  purchase")
          resovle(this.hp)
        }, 1000);
      } else{
        return setTimeout(() => {
          reject(this.nota)
        }, 2000);
      }
    } )

      buylaptop.then(res =>{
      console.log(res)
      this.promiseVal=res
    } ).catch(res =>{
      this.promiseVal=res
      console.log(res)
    })

  } 

}
