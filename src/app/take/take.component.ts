import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor( private designUtlity : DesignUtlitiyService ) { }

   randomNames:any[]=[ 'aman', 'ankit','anmol', 'ankita','mathew','alex', 'john']
  
  ngOnInit(): void {

    const nameSource = from(this.randomNames)

    // Ex - 01 | Take
      nameSource.pipe( take(5) )
      .subscribe(res =>{
      // console.log(res  )
      this.designUtlity.print(res,'elcontainer')
    })

    // Ex - 02 | Take
      nameSource.pipe( takeLast(5) )
      .subscribe(res =>{
      // console.log(res  )
      this.designUtlity.print(res,'elcontainer2')
    })

    // Ex - 03 | TakeUntil
    let condition1 = timer(9000)
    let condition2 = fromEvent(document,'click')

  const source = interval(1000)
  source.pipe(
    map(res =>'Number ' + res ),
    takeUntil(condition2)
  )
  .subscribe(res =>{
    console.log(res)
    this.designUtlity.print(res,'elcontainer3')

  })


  }

}
