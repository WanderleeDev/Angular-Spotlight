import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { LightboxManagerService } from 'src/app/services/lightbox-manager.service';
//  interface
import { IProjects } from 'src/app/interfaces/IProject.interface';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit, OnDestroy{
  projectSub = new Subscription();
  projectData!: IProjects;
  isVisibleLightBox!:boolean;
  lightBoxSub = new Subscription();

  constructor(
    private lightboxManagerSvc: LightboxManagerService,
  ) {}

  ngOnInit(): void {
    this.projectSub = this.lightboxManagerSvc.getObservableLightBoxData()
      .subscribe(res => this.projectData = res)
    this.lightBoxSub = this.lightboxManagerSvc.getObservableLightBox()
      .subscribe(res => this.isVisibleLightBox = res)
    }

    ngOnDestroy(): void {
      this.lightBoxSub.unsubscribe();
      console.log('fin');
      console.log(this.isVisibleLightBox);

  }

  closeLightBox() {
    this.lightboxManagerSvc.appearLightBoxToggle();
  }
}
