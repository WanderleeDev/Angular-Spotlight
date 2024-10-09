import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
//  services
import { ProjectsService } from 'src/app/services/projects.service';
// interfaces
import { IProjects } from 'src/app/shared/interfaces/IProject.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styles: [':host { display: contents }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridGalleryComponent implements OnInit {
  @Input({ required: true }) titleGallery = 'My gallery';
  listProjects?: Observable<IProjects[]>;

  constructor(private projectsSvc: ProjectsService) {}

  ngOnInit(): void {
    this.listProjects = this.projectsSvc.getProjects$()
  }
}
