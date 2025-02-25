import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  //template: `<h1>I am a card</h1>`,
  templateUrl: 'property-card.component.html',
  //styles:['h1{font-weight: normal;}']
  styleUrls: ['property-card.component.css']
}

)
export class PropertyCardComponent {
 @Input() property:any




}