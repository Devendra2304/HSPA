import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PropertyListComponent,NavBarComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
