import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { LightboxManagerService } from 'src/app/services/lightbox-manager.service';
import { IframeManagerService } from 'src/app/services/iframe-manager.service';
//  interface
import { IProjects } from 'src/app/interfaces/IProject.interface';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit, OnDestroy{
  projectSub = new Subscription();
  lightBoxSub = new Subscription();
  iframeSub = new Subscription();

  projectData!: IProjects;
  isVisibleLightBox!:boolean;
  isViewIframe!: boolean

  constructor(
    private lightboxManagerSvc: LightboxManagerService,
    private iframeManagerSvc: IframeManagerService
  ) {}

  ngOnInit(): void {
    this.projectSub = this.lightboxManagerSvc.getObservableLightBoxData()
      .subscribe(res => this.projectData = res)
    this.lightBoxSub = this.lightboxManagerSvc.getObservableLightBox()
      .subscribe(res => this.isVisibleLightBox = res)
    this.iframeSub = this.iframeManagerSvc.getIframeView$()
      .subscribe(res => this.isViewIframe = res)
    }

    ngOnDestroy(): void {
      this.lightBoxSub.unsubscribe();
      console.log('fin');
      console.log(this.isVisibleLightBox);
  }

  closeLightBox() {
    this.lightboxManagerSvc.setIsVisible();
  }
}
