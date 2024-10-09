import { Injectable } from '@angular/core';
//  interface
import { IProjects } from '../shared/interfaces/IProject.interface';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { Filters } from '../shared/interfaces/Filters.enum';
import { projects } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsSubject = new BehaviorSubject<IProjects[]>([]);
  private backup: IProjects[] = [];
  private readonly projects$ = this.projectsSubject.asObservable();

  constructor() {
    this.updateProjects(projects);
    this.backup = projects;
  }

  public getProjects$(): Observable<IProjects[]> {
    return this.projects$.pipe(distinctUntilChanged());
  }

  public getProjectBy(filter = Filters.ALL): void {
    const filteredProjects =
      filter === Filters.ALL
        ? [...this.backup]
        : this.backup.filter((p) => p.metaTag.includes(filter));

    this.projectsSubject.next(filteredProjects);
  }

  private updateProjects(projects: IProjects[]) {
    this.projectsSubject.next(projects);
  }
}
