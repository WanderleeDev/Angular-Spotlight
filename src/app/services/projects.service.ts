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
      cover: 'https://www.dropbox.com/scl/fi/sb0vtsax06aam7gybq36n/helpPage-cover.webp?rlkey=1uy29v27cwk13mxpd7nurh0c3&raw=1',
      video: 'https://www.loom.com/embed/279b542fffa14ecaa45cb8b8341258ca?sid=b13a99a5-0e27-4552-bac6-e4782450ecd8',
      img: [
        'https://www.dropbox.com/scl/fi/8gerwgsrti6wqd5mdocdt/helpPage.webp?rlkey=9zu7qc2xdfwlepzlm5sfdwta2&raw=1',
        'https://www.dropbox.com/scl/fi/kxoamb0zcj0b2kzfrvd4c/helpPage-fullPage.webp?rlkey=sjl0nrb2i0drkqne2xvked2n3&raw=1',
        'https://www.dropbox.com/scl/fi/dci147v6x3wvkxbbjvga9/helpPageRes.webp?rlkey=gb8lwt8vs8v9ayj2aypkv4223&raw=1'
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
      cover: '',
      video: '',
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
      cover: '',
      video: '',
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
      cover: 'https://www.dropbox.com/scl/fi/zo78ch0e4yt2wmhnxr5g4/webVentory-Mockup.png?rlkey=wn4xtlvqzyyjtqjqesukwqk3x&raw=1',
      video: 'https://www.loom.com/embed/1529c7284f6344dfbcb7335340d15ce5?sid=f77cc834-7353-4814-9e54-a15e06a0b24c',
      img: [
        'https://www.dropbox.com/scl/fi/zo78ch0e4yt2wmhnxr5g4/webVentory-Mockup.png?rlkey=wn4xtlvqzyyjtqjqesukwqk3x&raw=1',
        'https://www.dropbox.com/scl/fi/l6ek1u0ppcq5bi18bly7h/webVentory-fullPage.webp?rlkey=s02pg2usar0fjqlxar2n8fn8d&raw=1',
        'https://www.dropbox.com/scl/fi/86op12i5gaecx3v920vx8/webVentoryRes.webp?rlkey=i2n9vofvpkofrcko2bplfzk0g&raw=1'
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
      cover: 'https://www.dropbox.com/scl/fi/rf23voov20hcqo7ht5wr6/jobListRes.webp?rlkey=6e2hpqm4sgu2fhbt5evoptgr1&raw=1',
      video: 'https://www.loom.com/embed/9dd5abd193ed44448ca2a291fa038ea3?sid=2903b7d2-75a9-4c52-83ea-f0b21d7a72dd',
      img: [
        'https://www.dropbox.com/scl/fi/rf23voov20hcqo7ht5wr6/jobListRes.webp?rlkey=6e2hpqm4sgu2fhbt5evoptgr1&raw=1',
        'https://www.dropbox.com/scl/fi/wdka5wx7scpt0gzq57tge/jobList-fullPage.webp?rlkey=nsyrc8j9rtt4v4uznbhn3pt94&raw=1',
        'https://www.dropbox.com/scl/fi/mu7756e0uc2eqesxr2mg7/jobRes.webp?rlkey=q22n3526kvtbrar1km2hlkusi&raw=1'
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
      cover: 'https://www.dropbox.com/scl/fi/8mjra2szk7jgi9uk84dvd/ipAddress-cover.webp?rlkey=69q0e45rprtw7n3o6gy9qicov&raw=1',
      video: 'https://www.loom.com/embed/874fe92593e241fb82a0d1855201a6fa?sid=bd9b14ff-557b-4c79-9074-8975c051ae94',
      img: [
        'https://www.dropbox.com/scl/fi/z7vsoxgith007o9qe0fhj/ipAddress.webp?rlkey=530vre2yeor23bb9gx7rbq0m1&raw=1',
        'https://www.dropbox.com/scl/fi/zn8crem6depkyyvnb3jxv/ipAddress-FullPage.webp?rlkey=oh695z72vpuavju1obny1gq59&raw=1',
        'https://www.dropbox.com/scl/fi/jkojvo2ksxnnvb5aram2m/ipAddressRes.webp?rlkey=0iqxwll49wratc3azxmebly08&raw=1'
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
