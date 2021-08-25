import { Component, OnInit } from '@angular/core';
import { DesignUtlitiyService } from '../appServices/design-utlitiy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive:boolean=false
  constructor( private designUtlity : DesignUtlitiyService ) { }

  ngOnInit(): void {

    this.designUtlity.exclusive.subscribe(res =>{
      this.exclusive = res
    })

  }

}
