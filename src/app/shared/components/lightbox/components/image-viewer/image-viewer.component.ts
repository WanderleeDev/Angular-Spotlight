import { Component, Input, OnInit } from '@angular/core';
import { IDeploy } from 'src/app/interfaces/IProject.interface';
// services
import { IframeManagerService } from 'src/app/services/iframe-manager.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent implements OnInit{
  @Input() listImages: string[] = [];
  @Input() deploy!: IDeploy;
  mainImg = '';

  constructor (private iframeManagerSvc: IframeManagerService) {}

  ngOnInit(): void {
    this.mainImg = this.listImages[0]
  }

  public changeImage(img: string) {
    this.mainImg = img;
  }

  public appearIframe() {
    this.iframeManagerSvc.toggleIframeView()
  }
}
