import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent implements OnInit{
  mainImg!: string;
  @Input() listImages!: string[];

  ngOnInit(): void {
    this.mainImg = this.listImages[0]
  }

  public changeImage(img: string) {
    this.mainImg = img;
  }
}
