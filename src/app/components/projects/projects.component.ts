import { Component } from '@angular/core';
import { IProjects } from 'src/app/interfaces/IProject.interface';
import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  listProjects: IProjects[] = [];

  constructor(
    private projectsSvc: ProjectsService,
  ) {
    this.listProjects = this.projectsSvc.getProjects()
  }
}
