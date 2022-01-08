import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookLibrary app';
  users:any;

  constructor(private http: HttpClient){}
  ngOnInit(){
    this.getUser();
  }
  
  getUser(){
    this.http.get("https://localhost:44319/api/Users/All Users").subscribe(response =>{
      this.users = response;
    }, error =>{
      console.log(error)
    })
  }

}
