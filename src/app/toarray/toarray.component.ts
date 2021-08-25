import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {

  constructor() { }

  sourceSub;
  ngOnInit(): void {

    const source = interval(1000)
    this.sourceSub = source.pipe(
      take(5)
    ).subscribe(res =>{
      console.log(res)
      if (res >= 3){
        this.sourceSub.unsubscribe()
      }
    })

  }



}
