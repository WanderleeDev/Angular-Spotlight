import { Injectable } from '@angular/core';
//  interface
import { IProjects } from '../interfaces/IProject.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projects: IProjects[] = [
    {
      title: 'Help Page',
      img: [
        'https://www.dropbox.com/scl/fi/8gerwgsrti6wqd5mdocdt/helpPage.webp?rlkey=9zu7qc2xdfwlepzlm5sfdwta2&raw=1',
        'https://www.dropbox.com/scl/fi/kxoamb0zcj0b2kzfrvd4c/helpPage-fullPage.webp?rlkey=sjl0nrb2i0drkqne2xvked2n3&raw=1',
        'https://www.dropbox.com/scl/fi/4z9pdb1kxfax1xssqqovk/helpPage-mobile.webp?rlkey=gsq1zsydg63z4ey4bc8hdzwqk&raw=1'
      ],
      description: 'Copy of a help section page. Practicing separation by components and use of structural directives and styles applied using the Scss preprocessor.',
      technologies: ['Angular', 'TypeScript', 'Scss'],
      extraTools: [],
      deploy: {
        repository: 'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/HelpPage',
        path: 'https://gleaming-lebkuchen-8e52b2.netlify.app/',
        platform: 'Netlify',
        icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1'
      }
    },
    {
      title: 'About Page',
      img: [
        'https://www.dropbox.com/scl/fi/aynlw6q5d7zkmzjvid9em/webVentory.webp?rlkey=rp50yucxgno1zrfo0amhybv5e&raw=1',
        'https://www.dropbox.com/scl/fi/l6ek1u0ppcq5bi18bly7h/webVentory-fullPage.webp?rlkey=s02pg2usar0fjqlxar2n8fn8d&raw=1',
        'https://www.dropbox.com/scl/fi/gk0okej1s4szuovj486yz/webVentory-mobile.webp?rlkey=r017ekqf5ikgpmfq5502kfyv8&raw=1'
      ],
      description: 'Por terminar...',
      technologies: ['Angular', 'TypeScript', 'Scss'],
      extraTools: [],
      deploy: {
        repository: 'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/AboutPage',
        path: 'https://gleaming-lebkuchen-8e52b2.netlify.app/',
        platform: 'Netlify',
        icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1'
      }
    },
    {
      title: 'Backstage Talks',
      img: [
        'https://www.dropbox.com/scl/fi/aynlw6q5d7zkmzjvid9em/webVentory.webp?rlkey=rp50yucxgno1zrfo0amhybv5e&raw=1',
        'https://www.dropbox.com/scl/fi/l6ek1u0ppcq5bi18bly7h/webVentory-fullPage.webp?rlkey=s02pg2usar0fjqlxar2n8fn8d&raw=1',
        'https://www.dropbox.com/scl/fi/gk0okej1s4szuovj486yz/webVentory-mobile.webp?rlkey=r017ekqf5ikgpmfq5502kfyv8&raw=1'
      ],
      description: 'Copy an entry page as changing images by scrolling, each new image changes the background color of the page. Styles applied with Scss in addition to conditional styles ',
      technologies: ['Angular', 'TypeScript', 'TailwindCss'],
      extraTools: [],
      deploy: {
        repository: 'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/BackstageTalks',
        path: 'https://gleaming-lebkuchen-8e52b2.netlify.app/',
        platform: 'Netlify',
        icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1'
      }
    },
    {
      title: 'WebVentory',
      img: [
        'https://www.dropbox.com/scl/fi/aynlw6q5d7zkmzjvid9em/webVentory.webp?rlkey=rp50yucxgno1zrfo0amhybv5e&raw=1',
        'https://www.dropbox.com/scl/fi/l6ek1u0ppcq5bi18bly7h/webVentory-fullPage.webp?rlkey=s02pg2usar0fjqlxar2n8fn8d&raw=1',
        'https://www.dropbox.com/scl/fi/gk0okej1s4szuovj486yz/webVentory-mobile.webp?rlkey=r017ekqf5ikgpmfq5502kfyv8&raw=1'
      ],
      description: 'Web page of a simple inventory that is saved in a table, you can create several tables, such as delete them. Use of reactive forms and communication between components.',
      technologies: ['Angular', 'TypeScript', 'Scss'],
      extraTools: [],
      deploy: {
        repository: 'https://github.com/WanderleeDev/firstWebAngular',
        path: 'https://first-web-angular.vercel.app/',
        platform: 'Vercel',
        icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1'
      }
    },
    {
      title: 'Job List',
      img: [
        'https://www.dropbox.com/scl/fi/t3svr1hs2tnhehiez3ci3/jobList.webp?rlkey=gytarhydqok6r4nskm8m9mlqr&raw=1',
        'https://www.dropbox.com/scl/fi/wdka5wx7scpt0gzq57tge/jobList-fullPage.webp?rlkey=nsyrc8j9rtt4v4uznbhn3pt94&raw=1',
        'https://www.dropbox.com/scl/fi/c6zv2gs0qx05s4q7doc95/jobList-mobile.webp?rlkey=smwkjowzyyzhz9unafpxd46vw&raw=1'
      ],
      description: 'Page developed following the specifications of Frontend Mentor, a list of jobs that can be filtered based on parameters or tag. Use of services and observables to share and communicate data.',
      technologies: ['Angular', 'TypeScript', 'Scss'],
      extraTools: [],
      deploy: {
        repository: 'https://github.com/WanderleeDev/FrontendMentorChallenges/tree/main/staticJobList',
        path: 'https://6501f0fe5232ef2560563207--dashing-pie-817a18.netlify.app/',
        platform: 'Netlify',
        icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1'
      }
    },
    {
      title: 'Ip Address',
      img: [
        'https://www.dropbox.com/scl/fi/z7vsoxgith007o9qe0fhj/ipAddress.webp?rlkey=530vre2yeor23bb9gx7rbq0m1&raw=1',
        'https://www.dropbox.com/scl/fi/zn8crem6depkyyvnb3jxv/ipAddress-FullPage.webp?rlkey=oh695z72vpuavju1obny1gq59&raw=1',
        'https://www.dropbox.com/scl/fi/j0j9slm2conk7o0fp4nnp/ipAddress-mobile.webp?rlkey=xp25qndfhp4ygadhr43vjwhiv&raw=1'
      ],
      description: 'Page developed following the specifications of Frontend Mentor, a geolocator that will be reflected on a map. Consumption of two Apis for the resolution of this test, in addition to entering the page for the first time seeks the location of the user automatically, the geolocation is referential and based on several factors.',
      technologies: ['Angular', 'TypeScript', 'Scss'],
      extraTools: ['leaflet', 'ipify API'],
      deploy: {
        repository: 'https://github.com/WanderleeDev/FrontendMentorChallenges/tree/main/ipAddress',
        path: 'https://650608deef6fec4371b2c449--venerable-sherbet-350882.netlify.app/',
        platform: 'Netlify',
        icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1'
      }
    }
  ];

  public getProjects(): IProjects[] {
    return this.projects
  }

  public errorEventImg(text: string) {
    console.log(`Error al cargar la imagen ${text}`);
  }
}
