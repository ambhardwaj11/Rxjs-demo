import { Component, OnInit } from '@angular/core';
import { DesignUtlitiyService } from 'src/app/appServices/design-utlitiy.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  username:string="Aman";
  constructor( private designUtlity : DesignUtlitiyService ) { 
    this.designUtlity.username.subscribe(res =>{
      this.username = res
    })
  }

  ngOnInit(): void {

  }

  onchange(aman){
      console.log(aman.value)
      this.designUtlity.username.next(aman.value)
  }
}
