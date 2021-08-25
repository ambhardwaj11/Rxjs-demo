import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  data;
  data2;
  data3;
  constructor() { }

  usersArr=[
    { id : 1, name : 'aman' , skills : 'Angular', gender:'male' },
    { id : 2, name : 'ankit' , skills : 'React' , gender:'male' },
    { id : 3, name : 'ankita' , skills : 'Vue.js', gender:'female' },
    { id : 4, name : 'rohit' , skills : 'html'  , gender:'male' },
    { id : 5, name : 'palvi' , skills : 'html'  , gender:'female' },
  ]

  ngOnInit(): void {

    const source = from(this.usersArr)

    //  Ex - 01 Filter by length
    source.pipe( filter( data => data.name.length > 1 )
      ,toArray())
    .subscribe(res =>{
    console.log(res)
    this.data = res
  })

    //  Ex - 02 Filter by Gender
    source.pipe( filter( data => data.gender == 'male' )
      ,toArray())
    .subscribe(res =>{
    console.log(res)
    this.data2 = res
  })

    //  Ex - 03 Filter by nth Term
    source.pipe( filter( data => data.id > 2 )
      ,toArray())
    .subscribe(res =>{
    console.log(res)
    this.data3 = res
  })


  }

}
