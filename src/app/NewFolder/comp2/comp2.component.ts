import { Component, OnInit } from '@angular/core';
import { DesignUtlitiyService } from 'src/app/appServices/design-utlitiy.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  username:string="Ankit"
  constructor( private designUtlity : DesignUtlitiyService ) { 
    this.designUtlity.username.subscribe(res =>{
      this.username = res
    })
  }

  ngOnInit(): void {

  }

  onchange(uname){
    console.log(uname.value)
    this.designUtlity.username.next(uname.value)
  } 

}
