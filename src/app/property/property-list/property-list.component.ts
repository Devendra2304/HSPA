import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,CommonModule,HttpClientModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  
  properties: any;


  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('data/properties.json').subscribe(
      data=>{
        this.properties=data;
        console.log(data);

      }
 

    );

  } 
}