import { Component } from '@angular/core';
import { BtnBase } from 'src/app/shared/interfaces/BtnBase.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  btns: BtnBase[] = [
    {
      modifier: 'primary',
      text: 'My Projects',
      redirection: '#projects',
      alt: 'go to Angular projects'
    },
    {
      modifier: 'secondary',
      text: 'React Projects',
      redirection: 'https://react-showcase-three.vercel.app/',
      alt: 'go to React projects'
    },
  ];
}

