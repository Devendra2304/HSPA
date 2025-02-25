import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,CommonModule,HttpClientModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  
  properties: Array<any>;


  constructor()
  {
    this.properties = new Array<any>();

  }

  
  // @Injectable({providedIn: 'root'})
  // export class ServiceNameService {
  //   constructor(private httpClient: HttpClient) { }
    
  // }) {}

  ngOnInit(): void {
    this.properties = [
      {
        "Id":1,
        "Name":"Birla House",
        "type":"House",
        "Price":12000
    },
    {
      "Id":1,
      "Name":"Birla House",
      "type":"House",
      "Price":12000
  },
]
  }

}
