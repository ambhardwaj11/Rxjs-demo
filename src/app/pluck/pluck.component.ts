import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data;
  constructor() { }

  users=[
    { name : 'aman' , skills : 'Angular',job:{ title :'Angular developer' , exp :'6 Years' }  },
    { name : 'ankit' , skills : 'React' ,job:{ title :'React developer' , exp :'4 Years' }  },
    { name : 'mohit' , skills : 'Vue.js',job:{ title :'Vue.js developer' , exp :'2 Years' }  },
    { name : 'rohit' , skills : 'html'  ,job:{ title :'html developer' , exp :'10 Years' }  },
  ]

  ngOnInit(): void {

from(this.users).pipe(
  // map(data => data.name)
  pluck('job','title')
  ,toArray()
)
.subscribe(res =>{
  console.log(res)
  this.data = res
})

  }

}
