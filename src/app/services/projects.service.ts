import { Injectable } from '@angular/core';
//  interface
import { IProjects } from '../interfaces/IProject.interface';
import { BehaviorSubject, Observable } from 'rxjs';

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
      },
      metaTag: ["Replication"]
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
      },
      metaTag: ["Favorites", "Replication"]
    },
    {
      title: 'Backstage Talks',
      cover: 'https://www.dropbox.com/scl/fi/mo9pndme7qffroy6ce8gj/backStageCover.webp?rlkey=thb01ghyvjzm3t5z7cf6a9bk1&raw=1',
      video: 'https://www.loom.com/embed/6f3e1295b9f04569af2aa1fc947cefe7?sid=564a17e4-01e7-45bc-9fd1-619d6b9bcbd2',
      img: [
        'https://www.dropbox.com/scl/fi/aynlw6q5d7zkmzjvid9em/webVentory.webp?rlkey=rp50yucxgno1zrfo0amhybv5e&raw=1',
        'https://www.dropbox.com/scl/fi/l6ek1u0ppcq5bi18bly7h/webVentory-fullPage.webp?rlkey=s02pg2usar0fjqlxar2n8fn8d&raw=1',
        'https://www.dropbox.com/scl/fi/vwvrsnwnbsng8jac75m7t/backStageRes.webp?rlkey=yam0qsxf243yf3tlzu4i97xcf&raw=1'
      ],
      description: 'Copy an entry page as changing images by scrolling, each new image changes the background color of the page. Styles applied with Scss in addition to conditional styles ',
      technologies: ['Angular', 'TypeScript', 'Scss'],
      extraTools: ['IntersectionObserver'],
      deploy: {
        repository: 'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/BackstageTalks',
        path: 'https://backstage-talks-lt25a6f36-wanderleedev.vercel.app/#issue1',
        platform: 'Vercel',
        icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1'
      },
      metaTag: ["Favorites", "Replication"]
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
        icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1'
      },
      metaTag: ["Favorites"]
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
      },
      metaTag: ["Replication", "Frontend Mentor"]
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
      },
      metaTag: ["Favorites", "Frontend Mentor"]
    },
    {
      title: 'REST Countries',
      cover: 'https://www.dropbox.com/scl/fi/ir1scbop2ry5zsso9yczx/CountryCover.webp?rlkey=r6tjw6yahunoax9zeznkydwx2&raw=1',
      video: 'https://www.loom.com/embed/78185872801e486f92eb90b21e9a07b5?sid=87c7d1e7-4e8e-467c-83cd-5037a4e6119c',
      img: [
        'https://www.dropbox.com/scl/fi/z7vsoxgith007o9qe0fhj/ipAddress.webp?rlkey=530vre2yeor23bb9gx7rbq0m1&raw=1',
        'https://www.dropbox.com/scl/fi/zn8crem6depkyyvnb3jxv/ipAddress-FullPage.webp?rlkey=oh695z72vpuavju1obny1gq59&raw=1',
        'https://www.dropbox.com/scl/fi/t162q6omzpgnwjx3pllkn/CountryRes.webp?rlkey=v2ub1ugynnxxfd9i50wu7tc7y&raw=1'
      ],
      description: 'Page developed with Angular, it consumes an api that provides country information to re-enderize content, allows searching by name or also by selecting continent in the drop-down menu, implementation of routes and use of observables to share data and use of the Flobite component library',
      technologies: ['Angular', 'TypeScript', 'TailwindCss'],
      extraTools: ['RestCountry API', 'Flobite'],
      deploy: {
        repository: 'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/restCountries',
        path: 'https://rest-countries-c20tt2xl0-wanderleedev.vercel.app/',
        platform: 'Vercel',
        icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1'
      },
      metaTag: ["Frontend Mentor"]
    },
    {
      title: 'Translate App',
      cover: 'https://www.dropbox.com/scl/fi/y540ktuw18bwoj4yr2hse/tranaslateApp-mockud.webp?rlkey=6aidbciq96v3du6nelexwisal&raw=1',
      video: 'https://www.loom.com/embed/31b761275fba40c0878be64e025bb5c6?sid=c30dede9-fd30-472c-b63a-cde96d4c94d0',
      img: [
        'https://www.dropbox.com/scl/fi/kagayvcfay2kz20idi5hv/translateApp.webp?rlkey=4ygu3y0juppg5a2btb8npqv7l&raw=1',
        'https://www.dropbox.com/scl/fi/zn8crem6depkyyvnb3jxv/ipAddress-FullPage.webp?rlkey=oh695z72vpuavju1obny1gq59&raw=1',
        'https://www.dropbox.com/scl/fi/um9cerhf4d9nnbilfm9z6/translateApp-res.webp?rlkey=gufcf9enu94mki7aiqmwsc20k&raw=1'
      ],
      description: "Developed in angular 17, following the indications of DevChallenges. Sending parameters in the url and implementing text-to-speech reading using the browser's native API. Designed with mobile first and responsive design in mind.",
      technologies: ['Angular', 'TypeScript', 'TailwindCss'],
      extraTools: ['MYmemory API', 'speechSynthesis'],
      deploy: {
        repository: 'https://github.com/WanderleeDev/DevChallenges/tree/main/Frontend/translate-app',
        path: 'https://translate-app-six.vercel.app/',
        platform: 'Vercel',
        icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1'
      },
      metaTag: ["Favorites", "DevChallenges"]
    },
    {
      title: 'Coffee Listing',
      cover: 'https://www.dropbox.com/scl/fi/16mgbwq3kf5ow6mwrwds4/coffee-list-mockup.webp?rlkey=w2av0l7j2f3ff1h8ngqajr2jk&raw=1',
      video: 'https://www.loom.com/embed/b57ae73830f645e49d9497c2f8c0d05c?sid=f603a996-2da8-4d54-96b6-286f6ed7ac48',
      img: [
        'https://www.dropbox.com/scl/fi/mwoehad6cxplq05veko4b/coffee-list-screen.webp?rlkey=tfj8t8zgckjuw2oh4b3nlg4ap&raw=1',
        'https://www.dropbox.com/scl/fi/zn8crem6depkyyvnb3jxv/ipAddress-FullPage.webp?rlkey=oh695z72vpuavju1obny1gq59&raw=1',
        'https://www.dropbox.com/scl/fi/3r5vbp9z7n5egy59pkmyd/coffee-list-res.webp?rlkey=vv0j3oxartgkxe5w4zuj13c2r&raw=1'
      ],
      description: "Developed with Angular 17, testing for the first time the new syntax and lazy view loading. Using HTTPClient to consume a simple list and filter it.",
      technologies: ['Angular', 'TypeScript', 'TailwindCss'],
      extraTools: [],
      deploy: {
        repository: 'https://github.com/WanderleeDev/DevChallenges/tree/main/Frontend/coffee-listing',
        path: 'https://coffee-page.vercel.app/',
        platform: 'Vercel',
        icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1'
      },
      metaTag: ["Replication", "DevChallenges"]
    }
  ];
  private projects$ = new BehaviorSubject<IProjects[]>(this.projects);

  public getProjects$(): Observable<IProjects[]> {
    return this.projects$.asObservable();
  }

  public getFilterProjects (param: string):void  {
    if (param.toLowerCase() === 'all') {
      this.updateProjects([...this.projects]);
      return
    }

    const productsFilter = this.projects.filter(project => project.metaTag.includes(param));
    this.updateProjects(productsFilter)
  }

  private updateProjects(projects: IProjects[]) {
    this.projects$.next(projects);
  }
}
