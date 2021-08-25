import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor( private designUtlity : DesignUtlitiyService ) { }

  myColor:string;
  ngOnInit(): void {

    const source = interval(1000)

    // Ex - 01 
  const names=[ 'aman', 'ankit','anmol', 'ankita',]
  let obsSubscription:Subscription

   obsSubscription =  source.pipe(
       tap(res =>{
        // console.log('tap => '+ res )
        if(res == 4 ){
          obsSubscription.unsubscribe()
        }
      }),
       map(res =>   names[res] )
    )
    .subscribe(res =>{
    // console.log(res)
      this.designUtlity.print(res,'elcontainer' )
  })

  //  Ex - 02
  const colors=[ 'red', 'blue','orange', 'pink','black','brown','yellow']
  let obsSubscription2:Subscription

   obsSubscription2 =  source.pipe(
       tap(res =>{
         this.myColor = colors[res]
        console.log('tap => '+ res )
        if(res == 7 ){
          obsSubscription2.unsubscribe()
        }
      }),
       map(res =>   colors[res] )
    )
    .subscribe(res =>{
    console.log(res)
      this.designUtlity.print(res,'elcontainer2' )
  })


  }

}
