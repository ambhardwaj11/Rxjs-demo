import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor( private designUtlity : DesignUtlitiyService ) { }

  //  Subscription
  sub1:Subscription
  sub2:Subscription
  sub3:Subscription
  //  Messages
  msg1
  msg2
  msg3

  ngOnInit(): void {
        // Ex - 01
    const broadcastVideos = interval(1000)

    this.sub1= broadcastVideos.pipe(
      map(data => 'Videos ' + data )
    ).subscribe(res =>{
      // console.log( res) 
      this.msg1 = res
    })

    setTimeout(() => {
        this.sub1.unsubscribe()
    }, 10000);

    // Ex - 02
    this.sub2 = broadcastVideos.pipe(
      map(data => data * 10  )
    )
    .subscribe(res =>{
      // console.log(res)
      this.msg2 = res
    })

    setTimeout(() => {
        this.sub2.unsubscribe()
    }, 10000);

      // Ex - 03
      const members = from([
        { id :1, name :'aman' },
        { id :2, name :'anmol' },
        { id :3, name :'ankit' },
        { id :4, name :'akshat' },
        { id :5, name :'mohit' },
        { id :6, name :'rohit' },
      ])
      members.pipe(
        map( data => data.name )
      )
      .subscribe(res =>{
        console.log(res)
        // this.msg3 = res
        this.designUtlity.print(res,'elcontainer')
      })

  }

}
