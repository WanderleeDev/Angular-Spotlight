import { Component, Input } from '@angular/core';
import { IProjects } from 'src/app/shared/interfaces/IProject.interface';
import { LightboxManagerService } from 'src/app/services/lightbox-manager.service';
@Component({
  selector: 'app-card-btns',
  templateUrl: './card-btns.component.html',
})
export class CardBtnsComponent {
  @Input() hasBtnComplementary = true
  @Input() project!: IProjects;
  btnCard = 'size-10 bg-no-repeat bg-purple-800 bg-min bg-center p-2 rounded-md hover:scale-110 active:scale-95 duration-200 border-purple-500 border-[1px] shadow-md shadow-purple-800';

  constructor(
    private lightboxManagerSvc: LightboxManagerService
  ) {}

  public lightBoxHandler(data: IProjects) {
    this.lightboxManagerSvc.setIsVisible();
    this.lightboxManagerSvc.setDataLightBox(data)
  }
}
