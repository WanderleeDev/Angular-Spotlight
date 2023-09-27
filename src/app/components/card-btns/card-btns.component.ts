import { Component, Input } from '@angular/core';
import { IDataLink } from 'src/app/interfaces/IProject.interface';
import { LightboxManagerService } from 'src/app/services/lightbox-manager.service';
@Component({
  selector: 'app-card-btns',
  templateUrl: './card-btns.component.html',
})
export class CardBtnsComponent {
  @Input() links!: IDataLink;
  btnCard = 'h-8 w-8 bg-no-repeat bg-purple-800 bg-min bg-center p-2 rounded-md hover:scale-110 active:scale-95 duration-200 border-purple-500 border-[1px] shadow-md shadow-purple-800';

  constructor(
    private lightboxManagerSvc: LightboxManagerService
  ) {}

  lightBoxHandler() {
    this.lightboxManagerSvc.appearLightBoxToggle()
  }
}
