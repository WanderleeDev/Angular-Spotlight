import { Component, Input, OnInit } from '@angular/core';
//  services
import { ProjectsService } from 'src/app/services/projects.service';
// interfaces
import { IProjects } from 'src/app/interfaces/IProject.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styles: ['host: { display: contents }']
})
export class GridGalleryComponent implements OnInit {
  @Input({ required: true }) titleGallery = 'My gallery'
  listProjects?: Observable<IProjects[]>;
  filterProjects?: (param: string) => void;

  constructor(private projectsSvc: ProjectsService,) {
    this.filterProjects = this.projectsSvc.getFilterProjects.bind(this.projectsSvc);
  }

  ngOnInit(): void {
    this.listProjects = this.projectsSvc.getProjects$();
  }
}
