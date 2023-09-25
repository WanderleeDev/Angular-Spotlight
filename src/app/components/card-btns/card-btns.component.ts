import { Component } from '@angular/core';

@Component({
  selector: 'app-card-btns',
  templateUrl: './card-btns.component.html',
  styleUrls: ['./card-btns.component.css']
})
export class CardBtnsComponent {
  btnCard = 'h-8 w-8 bg-no-repeat bg-purple-800 bg-min bg-center p-2 rounded-md hover:scale-110 active:scale-95 duration-200 border-purple-500 border-[1px] shadow-md shadow-purple-800'
}
