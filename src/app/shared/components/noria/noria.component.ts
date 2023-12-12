import { Component } from '@angular/core';

@Component({
  selector: 'app-noria',
  templateUrl: './noria.component.html',
  styleUrls: ['./noria.component.css']
})
export class NoriaComponent {
  pathsImages = [
    "/assets/images/angular-forms.webp",
    "/assets/images/angular-httpModule.webp",
    "/assets/images/angular-options.webp",
    "/assets/images/angular-red.webp",
    "/assets/images/angular-testing.webp",
    "/assets/images/angularCli.webp",
    "/assets/images/angularMaterial.webp",
    "/assets/images/router.webp"
  ];

  public getImgCount (): number {
    return this.pathsImages.length
  }
}
