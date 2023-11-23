import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  title = 'client';

  products:IProduct[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:5136/api/Products').subscribe ((response:any) => {
      this.products = response;
    }, error => {
      console.log("htss");
    })
  }
}
