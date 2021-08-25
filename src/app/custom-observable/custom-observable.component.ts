import { Component, OnDestroy, OnInit } from '@angular/core';
import {  observable, Observable, Subscription } from 'rxjs';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  constructor(private designUtility : DesignUtlitiyService ) { }
  status;
  sub2:Subscription
  ngOnInit(): void {

    // Ex =01 Mannual Observables
    const cusobs1 = Observable.create( observer => {
      setTimeout(() => {
        observer.next("Angular") 
        // observer.complete()
        // observer.error("Error is  pending")
      }, 2000);
      setTimeout(() => {
        observer.next("Typescript") 
      }, 4000);
      setTimeout(() => {
        observer.next("React") 
        observer.complete()
        // this.status='completed';
      }, 6000);
    })
    cusobs1.subscribe(res=>{
      // console.log(res)
      this.designUtility.print(res,"elcontainer1")
    },
    (error) => {  this.status='error' },
    () => {  this.status='completed' },
    )

    const cusObs2 = Observable.create(observer=>{
      let count=1;
      setInterval(()=>{
        observer.next('Data is emited ' + count )
        count++;
        if(count >=5){
          observer.complete()
        }
      }, 1000)
    })
    this.sub2= cusObs2.subscribe( res =>{
      console.log( res )
    } )
  }

  ngOnDestroy(){
    this.sub2.unsubscribe()
  }

}
