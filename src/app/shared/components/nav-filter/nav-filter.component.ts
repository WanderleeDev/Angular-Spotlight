import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Filters } from '../../interfaces/Filters.enum';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styles: [':host{ display: contents}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavFilterComponent {
  dataNav = [
    { icon: '🌐', name: $localize`All`, filter: Filters.ALL },
    { icon: '⭐', name: $localize`Favorites`, filter: Filters.FAVORITES },
    {
      icon: '👥',
      name: $localize`Collaborative`,
      filter: Filters.COLLABORATIVE,
    },
  ];
  currentBtn = 0;

  constructor(private readonly projectsSvc: ProjectsService) {}

  public onClick(filter: Filters, index = 0): void {
    this.projectsSvc.getProjectBy(filter);
    this.currentBtn = index;
  }
}
