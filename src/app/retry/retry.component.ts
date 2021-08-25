import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {

    this.fetchDetails()
    
  }

  fetchDetails(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe( res =>{
      console.log(res)
    })
  }

}
