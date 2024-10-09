import { Component, Input } from '@angular/core';
import { IProjects } from 'src/app/shared/interfaces/IProject.interface';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html'
})
export class CardProjectComponent {
  @Input() project!: IProjects;
  imgError = 'assets/images/default.png';

  error(newImg: string) {
    this.project.img[0] = newImg;
  }
}
