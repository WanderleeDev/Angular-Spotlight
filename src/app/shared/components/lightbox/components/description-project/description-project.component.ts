import { Component, Input } from '@angular/core';
import { IProjects } from 'src/app/shared/interfaces/IProject.interface';

@Component({
  selector: 'app-description-project',
  templateUrl: './description-project.component.html',
})
export class DescriptionProjectComponent {
  @Input() projectData!: IProjects;
}
