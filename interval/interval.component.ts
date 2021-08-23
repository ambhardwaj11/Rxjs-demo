import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtlitiyService } from '../design-utlitiy.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor( private designUtility : DesignUtlitiyService ) { }

  obsMsg;
  videoSubscription:Subscription
  ngOnInit(): void {

    // const broadcastVideos = interval(1000)
    const broadcastVideos = timer(5000,1000)

    this.videoSubscription=broadcastVideos.subscribe(res =>{ 
      console.log(res++ )
      this.obsMsg= 'Video '+ res;
      this.designUtility.print(this.obsMsg,'elContainer')
      this.designUtility.print(this.obsMsg,'elContainer2')
      this.designUtility.print(this.obsMsg,'elContainer3')
      if(res >=5){
        this.videoSubscription.unsubscribe()
      }
    } )
  }

}
