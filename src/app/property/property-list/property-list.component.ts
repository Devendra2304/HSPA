import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,CommonModule,HttpClientModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  properties: Array<any>;

  constructor(private import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  
  @Injectable({providedIn: 'root'})
  export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }
    
  }) {}

  ngOnInit(): void {
    
  }

}
