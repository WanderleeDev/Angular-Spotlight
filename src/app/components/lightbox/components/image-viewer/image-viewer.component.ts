import { Component, Input, OnInit } from '@angular/core';
// services
import { IframeManagerService } from 'src/app/services/iframe-manager.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent implements OnInit{
  @Input() listImages!: string[];
  mainImg!: string;

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
