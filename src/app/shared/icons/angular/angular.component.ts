import { Component, Input } from '@angular/core';

interface ISvgSizes {
  width: number;
  height: number;
}
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styles: ['host: { display: contents }']
})
export class AngularComponent {
  @Input() sizes: ISvgSizes  = { 'width': 30, 'height': 30 };
}
