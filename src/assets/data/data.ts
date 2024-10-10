import { IProjects } from 'src/app/shared/interfaces/IProject.interface';

export const projects: IProjects[] = [
  {
    title: 'Help Page',
    cover:
      'https://www.dropbox.com/scl/fi/sb0vtsax06aam7gybq36n/helpPage-cover.webp?rlkey=1uy29v27cwk13mxpd7nurh0c3&raw=1',
    video:
      'https://www.loom.com/embed/279b542fffa14ecaa45cb8b8341258ca?sid=b13a99a5-0e27-4552-bac6-e4782450ecd8',
    img: [
      'https://www.dropbox.com/scl/fi/8gerwgsrti6wqd5mdocdt/helpPage.webp?rlkey=9zu7qc2xdfwlepzlm5sfdwta2&raw=1',
      'https://www.dropbox.com/scl/fi/dci147v6x3wvkxbbjvga9/helpPageRes.webp?rlkey=gb8lwt8vs8v9ayj2aypkv4223&raw=1',
    ],
    description: $localize`Copy of a help section page. Practicing separation by components and use of structural directives and styles applied using the Scss preprocessor.`,
    technologies: ['Angular', 'TypeScript', 'Scss'],
    extraTools: [],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/HelpPage',
      path: 'https://gleaming-lebkuchen-8e52b2.netlify.app/',
      platform: 'Netlify',
      icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1',
    },
    metaTag: ['replication'],
  },
  {
    title: 'Backstage Talks',
    cover:
      'https://www.dropbox.com/scl/fi/mo9pndme7qffroy6ce8gj/backStageCover.webp?rlkey=thb01ghyvjzm3t5z7cf6a9bk1&raw=1',
    video:
      'https://www.loom.com/embed/6f3e1295b9f04569af2aa1fc947cefe7?sid=564a17e4-01e7-45bc-9fd1-619d6b9bcbd2',
    img: [
      'https://www.dropbox.com/scl/fi/axav5st8h9ul95sr9a2tw/backstage-talks.webp?rlkey=ux75l2jdels4x1ivt45tnjmf0&st=y8fpzj3g&raw=1',
      'https://www.dropbox.com/scl/fi/vwvrsnwnbsng8jac75m7t/backStageRes.webp?rlkey=yam0qsxf243yf3tlzu4i97xcf&raw=1',
    ],
    description: $localize`Copy an entry page as changing images by scrolling, each new image changes the background color of the page. Styles applied with Scss in addition to conditional styles.`,
    technologies: ['Angular', 'TypeScript', 'Scss'],
    extraTools: ['IntersectionObserver'],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/BackstageTalks',
      path: 'https://backstage-talks-lt25a6f36-wanderleedev.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['favorites', 'replication'],
  },
  {
    title: 'WebVentory',
    cover:
      'https://www.dropbox.com/scl/fi/zo78ch0e4yt2wmhnxr5g4/webVentory-Mockup.png?rlkey=wn4xtlvqzyyjtqjqesukwqk3x&raw=1',
    video:
      'https://www.loom.com/embed/1529c7284f6344dfbcb7335340d15ce5?sid=f77cc834-7353-4814-9e54-a15e06a0b24c',
    img: [
      'https://www.dropbox.com/scl/fi/biwmbpeyvr4wqh36h4hz4/webventory.webp?rlkey=37gb6phq9175z5awt1eeu8fw7&st=synqjeql&raw=1',
      'https://www.dropbox.com/scl/fi/86op12i5gaecx3v920vx8/webVentoryRes.webp?rlkey=i2n9vofvpkofrcko2bplfzk0g&raw=1',
    ],
    description: $localize`Web page of a simple inventory that is saved in a table, you can create several tables, such as delete them. Use of reactive forms and communication between components.`,
    technologies: ['Angular', 'TypeScript', 'Scss'],
    extraTools: [],
    deploy: {
      repository: 'https://github.com/WanderleeDev/firstWebAngular',
      path: 'https://first-web-angular.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['favorites'],
  },
  {
    title: 'Job List',
    cover:
      'https://www.dropbox.com/scl/fi/rf23voov20hcqo7ht5wr6/jobListRes.webp?rlkey=6e2hpqm4sgu2fhbt5evoptgr1&raw=1',
    video:
      'https://www.loom.com/embed/9dd5abd193ed44448ca2a291fa038ea3?sid=2903b7d2-75a9-4c52-83ea-f0b21d7a72dd',
    img: [
      'https://www.dropbox.com/scl/fi/t3svr1hs2tnhehiez3ci3/jobList.webp?rlkey=gytarhydqok6r4nskm8m9mlqr&st=h52allgl&raw=1',
      'https://www.dropbox.com/scl/fi/mu7756e0uc2eqesxr2mg7/jobRes.webp?rlkey=q22n3526kvtbrar1km2hlkusi&raw=1',
    ],
    description: $localize`Page developed following the specifications of Frontend Mentor, a list of jobs that can be filtered based on parameters or tag. Use of services and observables to share and communicate data.`,
    technologies: ['Angular', 'TypeScript', 'Scss'],
    extraTools: [],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/FrontendMentorChallenges/tree/main/staticJobList',
      path: 'https://6501f0fe5232ef2560563207--dashing-pie-817a18.netlify.app/',
      platform: 'Netlify',
      icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1',
    },
    metaTag: ['replication', 'frontend mentor'],
  },
  {
    title: 'Ip Address',
    cover:
      'https://www.dropbox.com/scl/fi/8mjra2szk7jgi9uk84dvd/ipAddress-cover.webp?rlkey=69q0e45rprtw7n3o6gy9qicov&raw=1',
    video:
      'https://www.loom.com/embed/874fe92593e241fb82a0d1855201a6fa?sid=bd9b14ff-557b-4c79-9074-8975c051ae94',
    img: [
      'https://www.dropbox.com/scl/fi/z7vsoxgith007o9qe0fhj/ipAddress.webp?rlkey=530vre2yeor23bb9gx7rbq0m1&raw=1',
      'https://www.dropbox.com/scl/fi/jkojvo2ksxnnvb5aram2m/ipAddressRes.webp?rlkey=0iqxwll49wratc3azxmebly08&raw=1',
    ],
    description: $localize`Page developed following the specifications of Frontend Mentor, a geolocation that will be reflected on a map. Consumption of two Apis for the resolution of this test, in addition to entering the page for the first time seeks the location of the user automatically, the geolocation is referential and based on several factors.`,
    technologies: ['Angular', 'TypeScript', 'Scss'],
    extraTools: ['leaflet', 'ipify API'],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/FrontendMentorChallenges/tree/main/ipAddress',
      path: 'https://650608deef6fec4371b2c449--venerable-sherbet-350882.netlify.app/',
      platform: 'Netlify',
      icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1',
    },
    metaTag: ['favorites', 'frontend mentor'],
  },
  {
    title: 'REST Countries',
    cover:
      'https://www.dropbox.com/scl/fi/ir1scbop2ry5zsso9yczx/CountryCover.webp?rlkey=r6tjw6yahunoax9zeznkydwx2&raw=1',
    video:
      'https://www.loom.com/embed/78185872801e486f92eb90b21e9a07b5?sid=87c7d1e7-4e8e-467c-83cd-5037a4e6119c',
    img: [
      'https://www.dropbox.com/scl/fi/nq8mryotwm29y4wz8dlas/rest-countries.webp?rlkey=ma6ovrnwcv28zixn2ms2oxc7c&st=l1ljmicw&raw=1',
      'https://www.dropbox.com/scl/fi/t162q6omzpgnwjx3pllkn/CountryRes.webp?rlkey=v2ub1ugynnxxfd9i50wu7tc7y&raw=1',
    ],
    description: $localize`Page developed with Angular, it consumes an api that provides country information to re-enderize content, allows searching by name or also by selecting continent in the drop-down menu, implementation of routes and use of observables to share data and use of the Flobite component library`,
    technologies: ['Angular', 'TypeScript', 'TailwindCss'],
    extraTools: ['RestCountry API', 'Flobite'],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/miniProyectsAngular/tree/main/restCountries',
      path: 'https://rest-countries-c20tt2xl0-wanderleedev.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['frontend mentor'],
  },
  {
    title: 'Translate App',
    cover:
      'https://www.dropbox.com/scl/fi/y540ktuw18bwoj4yr2hse/tranaslateApp-mockud.webp?rlkey=6aidbciq96v3du6nelexwisal&raw=1',
    video:
      'https://www.loom.com/embed/31b761275fba40c0878be64e025bb5c6?sid=c30dede9-fd30-472c-b63a-cde96d4c94d0',
    img: [
      'https://www.dropbox.com/scl/fi/kagayvcfay2kz20idi5hv/translateApp.webp?rlkey=4ygu3y0juppg5a2btb8npqv7l&raw=1',
      'https://www.dropbox.com/scl/fi/um9cerhf4d9nnbilfm9z6/translateApp-res.webp?rlkey=gufcf9enu94mki7aiqmwsc20k&raw=1',
    ],
    description: $localize`Developed in angular 17, following the indications of DevChallenges. Sending parameters in the url and implementing text-to-speech reading using the browser's native API. Designed with mobile first and responsive design in mind.`,
    technologies: ['Angular', 'TypeScript', 'TailwindCss'],
    extraTools: ['MYmemory API', 'speechSynthesis'],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/DevChallenges/tree/main/Frontend/translate-app',
      path: 'https://translate-app-six.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['favorites', 'devChallenges'],
  },
  {
    title: 'Coffee Listing',
    cover:
      'https://www.dropbox.com/scl/fi/16mgbwq3kf5ow6mwrwds4/coffee-list-mockup.webp?rlkey=w2av0l7j2f3ff1h8ngqajr2jk&raw=1',
    video:
      'https://www.loom.com/embed/b57ae73830f645e49d9497c2f8c0d05c?sid=f603a996-2da8-4d54-96b6-286f6ed7ac48',
    img: [
      'https://www.dropbox.com/scl/fi/mwoehad6cxplq05veko4b/coffee-list-screen.webp?rlkey=tfj8t8zgckjuw2oh4b3nlg4ap&raw=1',
      'https://www.dropbox.com/scl/fi/3r5vbp9z7n5egy59pkmyd/coffee-list-res.webp?rlkey=vv0j3oxartgkxe5w4zuj13c2r&raw=1',
    ],
    description: $localize`Developed with Angular 17, testing for the first time the new syntax and lazy view loading. Using HTTPClient to consume a simple list and filter it.`,
    technologies: ['Angular', 'TypeScript', 'TailwindCss'],
    extraTools: [],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/DevChallenges/tree/main/Frontend/coffee-listing',
      path: 'https://coffee-page.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['replication', 'devChallenges'],
  },
  {
    title: 'Github Profile',
    cover:
      'https://www.dropbox.com/scl/fi/olj658tpi40rig36ah2zm/github-profile-mockup.webp?rlkey=kce96iyq0ng7u1pyolnaogvpw&raw=1',
    video:
      'https://www.loom.com/embed/41ddb7b3775545c585a405a49541e7be?sid=cfcd0809-036b-47c9-9106-8401fce96535',
    img: [
      'https://www.dropbox.com/scl/fi/tffh5c13uodq8h47onwsn/github-profile-screen.webp?rlkey=7grd6d81rppwk9zvusf3brj9g&raw=1',
      'https://www.dropbox.com/scl/fi/1k18cd1cy3y79iv1kyt2q/github-profile-resp.webp?rlkey=4v6hwqv7lmzm8ayyrgtsspmnq&raw=1',
    ],
    description: $localize`Github user profile finder, where the github api is consumed to obtain the user's data and in the same data comes another URL to obtain their repositories, chaining the requests through the use of more specific observables (ForkJoin). Use of services to store and centralize data and implementation of skeleton, loader and error messages.`,
    technologies: ['Angular', 'TypeScript', 'TailwindCss'],
    extraTools: ['Api Github'],
    deploy: {
      repository:
        'https://github.com/WanderleeDev/DevChallenges/tree/main/Frontend/github-profile',
      path: 'https://github-profile-pi-five.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['replication', 'devChallenges', 'favorites'],
  },
  {
    title: 'Learn and teach',
    cover:
      'https://www.dropbox.com/scl/fi/3qj6dfbn7hh35svnv026o/cover-learn-and-teach.webp?rlkey=e0vujal07w23oc0nsng9jqi1m&st=zjetgpe5&raw=1',
    video:
      'https://www.loom.com/embed/41ddb7b3775545c585a405a49541e7be?sid=cfcd0809-036b-47c9-9106-8401fce96535',
    img: [
      'https://www.dropbox.com/scl/fi/7xry5o58x2qunpxtgswpe/learn-and-teach.webp?rlkey=qhyb9sj69ux8r0axt83h5byh9&st=5n349atw&raw=1',
      'https://www.dropbox.com/scl/fi/d9q2tfx5q65hvpnrk31ys/learn-and-teach-resp.webp?rlkey=73cwmqva1vpw1nmeavb3iza2l&st=g2fq0rnw&raw=1',
    ],
    description: $localize`Collaborative project carried out for No Country (an Argentine platform), where I was responsible for the Frontend part, connection with the backend, and continuous communication with Backend and Design teammates.
    Task delivery through tickets, with a given time of 1 month for the MVP.`,
    technologies: ['Angular', 'TypeScript', 'TailwindCss', 'C#'],
    extraTools: [],
    deploy: {
      repository: 'https://github.com/WanderleeDev/c19-62-t-csharp-angular',
      path: 'https://learn-and-teach.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['no country', 'collaborative', 'favorites'],
  },
  {
    title: 'Preguntonic',
    cover:
      'https://www.dropbox.com/scl/fi/jltgwm3buii1dqv2r9jqp/preguntonic-cover.webp?rlkey=tg1i2qsshgsg0cpbiy9kll50n&st=wjsdikl8&raw=1',
    video:
      'https://www.loom.com/embed/41ddb7b3775545c585a405a49541e7be?sid=cfcd0809-036b-47c9-9106-8401fce96535',
    img: [
      'https://www.dropbox.com/scl/fi/7dthtmzkkzs3wlvwgpgj8/preguntonic.webp?rlkey=jovvcmnzgg8e8f8bno95vgy1a&st=g47m9gcn&raw=1',
      'https://www.dropbox.com/scl/fi/fzyc81zo0bmgiyvf1xv9y/preguntonic-resp.webp?rlkey=umpmg6d5n90lprj06lr3cytaz&st=lsb62lbw&raw=1',
    ],
    description: $localize`Preguntonic is the result of my first collaborative project for a 5-week Hackathon. We implemented a game similar to the well-known Kahoot, prioritizing mobile-first without neglecting responsiveness, and using webSockets for real-time communication. So far, it has been my best experience working in a team, which led us to win first place.`,
    technologies: ['Angular', 'TypeScript', 'Bootstrap 5', 'Java'],
    extraTools: ['WebSockets'],
    deploy: {
      repository: 'https://github.com/orgs/Devathon-2024-team5/repositories',
      path: 'https://preguntonic-test-1.netlify.app/',
      platform: 'Netlify',
      icon: 'https://www.dropbox.com/scl/fi/nv0sqziekl57wa2qg4jjs/netlify.svg?rlkey=mhea6i30zfcdby88irn2ftxay&raw=1',
    },
    metaTag: ['Devathon', 'collaborative', 'favorites'],
  },
  {
    title: 'Ubuntu Clone',
    cover:
      'https://www.dropbox.com/scl/fi/dj7w1v0xzejjukf6ih0c8/ubuntu-cover.webp?rlkey=mnkm7yr29qxr2q81q0xhxu68l&st=440d0z3h&raw=1',
    video:
      'https://www.loom.com/embed/41ddb7b3775545c585a405a49541e7be?sid=cfcd0809-036b-47c9-9106-8401fce96535',
    img: [
      'https://www.dropbox.com/scl/fi/mxt3vlk2hp08jpi5lsqfw/ubuntu-1.webp?rlkey=lxaqbkpbkxzw4urssscj054hx&st=vvd6erpd&raw=1',
      'https://www.dropbox.com/scl/fi/abn7dbmyuwkzmh9s3ff4b/ubuntu-2.webp?rlkey=0bysl7i4zc4x2bgofhiiw7rjm&st=p31vr2bi&raw=1',
    ],
    description: $localize`Clone of the local Ubuntu Fossa desktop, where several mini applications are implemented to emulate desktop functionalities such as: calendar, clock, translator, paint, code editor, settings menu, among others. This project applies the latest features of Angular 18 and a state management system (NGRX).`,
    technologies: ['Angular', 'TypeScript', 'Css', 'Tailwind'],
    extraTools: ['Signals', 'Deferable views', 'NGRX'],
    deploy: {
      repository: 'https://github.com/WanderleeDev/ubuntu-desktop',
      path: 'https://ubuntu-desktop.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['favorites', 'standalone'],
  },
  {
    title: 'Clior',
    cover:
      'https://www.dropbox.com/scl/fi/ze987xi5mzcele3gqfzm1/clior.webp?rlkey=jzp5274w1h2rcyohk9mdok0ij&st=rqpq9xhx&raw=1',
    video:
      'https://www.loom.com/embed/41ddb7b3775545c585a405a49541e7be?sid=cfcd0809-036b-47c9-9106-8401fce96535',
    img: [
      'https://www.dropbox.com/scl/fi/rwdr4sk47oqe2med96usu/clior-1.webp?rlkey=00sshemwts89g0g3is7a68r80&st=uqutciqt&raw=1',
      'https://www.dropbox.com/scl/fi/ikymsg86pp16rlnpskon3/clior-resp.webp?rlkey=pzxc0h8wy9fejnbhwnlyaqeqx&st=hufhyzra&raw=1',
    ],
    description: $localize`E-commerce for nutritional products with login and JWT, global state management, responsive design, among other features.`,
    technologies: ['Angular', 'TypeScript', 'Tailwind', 'Express'],
    extraTools: ['NGRX', 'Oauth', 'Jwt'],
    deploy: {
      repository: 'https://github.com/WanderleeDev/clior-ecommerce',
      path: 'https://clior.vercel.app/',
      platform: 'Vercel',
      icon: 'https://www.dropbox.com/scl/fi/54fy80ntgxl4afsmrcn25/vercel.webp?rlkey=ogmc9sw41hnde3c45jxu01lmk&raw=1',
    },
    metaTag: ['favorites', 'standalone'],
  }
];
