import { Component, Input } from '@angular/core';
//  services
import { ProjectsService } from 'src/app/services/projects.service';
// interfaces
import { IProjects } from 'src/app/interfaces/IProject.interface';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styles: ['host: { display: contents }']
})
export class GridGalleryComponent {
  @Input({ required: true }) titleGallery = 'My gallery'
  listProjects: IProjects[] = [];

  constructor(
    private projectsSvc: ProjectsService,
  ) {
    this.listProjects = this.projectsSvc.getProjects()
  }
}
