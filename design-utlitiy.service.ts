import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtlitiyService {

  constructor() { }

  print(val,containerID){
    let el = document.createElement("li");
    el.innerText= val
    document.getElementById(containerID).appendChild(el)
  } 

}
