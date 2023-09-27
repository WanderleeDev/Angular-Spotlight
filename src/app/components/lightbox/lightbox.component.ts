import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightboxManagerService } from 'src/app/services/lightbox-manager.service';
import { HttpErrorResponse } from '@angular/common/http';
//  interface
import { IProjects } from 'src/app/interfaces/IProject.interface';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit, OnDestroy{
  project!: IProjects;
  isVisibleLightBox!:boolean;
  lightBoxSub = new Subscription()

  constructor(
    private lightboxManagerSvc: LightboxManagerService,
  ) {}

  ngOnInit(): void {
    this.lightBoxSub = this.lightboxManagerSvc.getObservableLightBox()
      .subscribe({
        next: (res) => this.isVisibleLightBox = res,
        error: (err: HttpErrorResponse) => console.log(`Ha ocurrido un error al tratar de obtener el estado inicial ${err.message}`),
        complete: () => console.log('Estado inicial obtenido')
      })
  }

  ngOnDestroy(): void {
    this.lightBoxSub.unsubscribe();
  }

  closeLightBox() {
    this.lightboxManagerSvc.appearLightBoxToggle();
  }
}
