import { Component, Input, OnInit } from '@angular/core';
import { IDataLink, IProjects } from 'src/app/interfaces/IProject.interface';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html'
})
export class CardProjectComponent implements OnInit {
  @Input() project!: IProjects;
  imgError = '../../../assets/images/default.png';
  links!: IDataLink;


  ngOnInit(): void {
    this.links =  {
        name: this.project.title,
        repositoryLink: this.project.deploy.repository,
        demoLink: this.project.deploy.path,
      };
  }

  error(newImg: string) {
    this.project.img[0] = newImg;
  }
}
