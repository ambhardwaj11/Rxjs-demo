import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { delay, retry, retryWhen, scan, take, takeLast, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor( private http: HttpClient ) { }
  
  person;
  status="No Data";
  fetching:boolean=false
  
  ngOnInit(): void {
    // this.fetchDetails()
  }

  fetchDetails(){
this.fetching=true
    https://  insigts-brand.s3.ap-south-1.amazonaws.com/1629448583753play_circle_filled_black_24dp.svg
      this.http.get("https://jsonplaceholder.typicode.com/users").pipe( 
        // retry(2) 
        retryWhen( err => err.pipe( 
          delay(3000),
          scan( (retryCount) => {
            if( retryCount >= 5){
                throw err;
            }else{
                retryCount = retryCount + 1; 
                console.log('Retry Count ' + retryCount )
                this.status = 'Retrying Attempt #' + retryCount;
                return retryCount;
            }
          },0 )
         ) )
        )
      .subscribe( res =>{
      console.log(res)
      this.person= res
      this.status="Data is Fetched"
      this.fetching=false,
      // console.log(this.person)
      (error)=> { console.log(error)
        this.status="Problem in Fetching"
        this.fetching=false
      }
      
    })
  }

}
