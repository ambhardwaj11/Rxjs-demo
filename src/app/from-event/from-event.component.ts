import { ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor( private designutility: DesignUtlitiyService ) { }

  @ViewChild('addBtn') addBtn:ElementRef;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    let count=1
    fromEvent(this.addBtn.nativeElement, 'click').subscribe( res => {
       let val1="Video " + count++
        console.log(val1)  
        this.designutility.print(val1,'eleContainer')
        this.designutility.print(val1,'eleContainer2')
      })
  }  

}
