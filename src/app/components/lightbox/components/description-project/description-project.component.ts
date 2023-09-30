import { Component, Input } from '@angular/core';
import { IProjects } from 'src/app/interfaces/IProject.interface';

@Component({
  selector: 'app-description-project',
  templateUrl: './description-project.component.html',
})
export class DescriptionProjectComponent {
  @Input() projectData!: IProjects;
}
