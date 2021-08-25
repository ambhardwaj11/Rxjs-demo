import { Component, OnInit } from '@angular/core';
import { DesignUtlitiyService } from 'src/app/appServices/design-utlitiy.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username:string="Anmol"
  constructor( private designUtlity : DesignUtlitiyService ) { 
    this.designUtlity.username.subscribe(res =>{
        this.username = res;
    })

  }

  ngOnInit(): void {
  }

  onchange(uname){
    console.log(uname.value)
    this.designUtlity.username.next(uname.value)

  }

}
