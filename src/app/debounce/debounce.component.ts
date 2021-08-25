import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements  AfterViewInit {

  reqData=null;
  reqData2=null;
  @ViewChild('myInput')  myInput:ElementRef
  @ViewChild('myInput2')  myInput2:ElementRef
  constructor( private loadingBar: LoadingBarService ) { }

  ngAfterViewInit(): void {

    //  Ex -01 Debounce
    const searchTerm =  fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map( event => event.target.value  ),
      debounceTime(1000)
    )

    searchTerm.subscribe(res =>{
      console.log(res)
      this.reqData= res;
      this.loadingBar.start()

      setTimeout(() => {
          this.reqData= null
          this.loadingBar.stop()
      }, 3000);
    })

    // Ex -02 DintinctUntilchange
    const searchTerm2 =  fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map( event => event.target.value  ),
      debounceTime(1000),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res =>{
      console.log(res)
      this.reqData2= res;
      this.loadingBar.start()

      setTimeout(() => {
          this.reqData2= null
          this.loadingBar.stop()
      }, 3000);
    })

  }

  
}
