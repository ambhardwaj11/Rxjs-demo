import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username:string="Akshat";
  constructor(  private designUtlity : DesignUtlitiyService ) { 
  this.designUtlity.username.subscribe(res =>{
    this.username = res
  })
  }

  ngOnInit(): void {
    this.designUtlity.exclusive.next(true)
  }

  ngOnDestroy(){
    this.designUtlity.exclusive.next(false)
  }
}
