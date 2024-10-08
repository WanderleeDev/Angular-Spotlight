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
      text: $localize`:@@myProjectsBtn:My Projects`,
      redirection: '#projects',
      alt: $localize`:@@myProjectsAlt:go to Angular projects`
    },
    {
      modifier: 'secondary',
      text: $localize`:@@reactProjectsBtn:React Projects`,
      redirection: 'https://react-showcase-three.vercel.app/',
      alt: $localize`:@@reactProjectsAlt:go to React projects`
    },
  ];
}

