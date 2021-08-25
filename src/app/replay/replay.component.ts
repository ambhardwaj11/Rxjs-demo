import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { interval, Subscription } from 'rxjs';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  constructor( private designUtlity : DesignUtlitiyService ) { }

  userList=[
    'Angular 1',
    'Angular 2'
  ]

  userList2=[
  ]

  userList3=[
  ]

  // Subcribe Mode 2
  subscribe2:boolean=false

  // Subcribe Mode 3
  subscribe3:boolean=false

  // Method Interval
  methodInterval:boolean=false

  // Subscription 2
  subscription2:Subscription

  // Subscription 3
  subscription3:Subscription

  // Inteval Subscription 3
  intervalSubscription:Subscription

  ngOnInit(): void {
    this.designUtlity.videoEmit.subscribe(res =>{
      // console.log(res)
      this.userList.push(res)
    })
  }

  // Video Add Method
  onVideoAdd(video){
    // console.log(video.value)
    this.designUtlity.videoEmit.next(video.value)
  }

//  User 2 Subscribe Button
  user2subscribe(){
  if(this.subscribe2){
    this.subscription2.unsubscribe()
  }
  else{
    this.subscription2 = this.designUtlity.videoEmit.subscribe(res =>{
      this.userList2.push(res)
    })
  }
  this.subscribe2 = !this.subscribe2
}

//  User 3 Subscribe Button
user3subscribe(){
  if(this.subscribe3){
    this.subscription3.unsubscribe()
  }
  else{
    this.subscription3 = this.designUtlity.videoEmit.subscribe(res =>{
      this.userList3.push(res)
    })
  }
  this.subscribe3 = !this.subscribe3
}

// Toggle Method
toggleMethod(){
  const broadcastVideo = interval(1000)
  if(!this.methodInterval){
    this.intervalSubscription=broadcastVideo.subscribe(res=>{
      this.designUtlity.videoEmit.next(res)
    })
  }else{
    this.intervalSubscription.unsubscribe()
  }
  this.methodInterval= !this.methodInterval
} 

}

