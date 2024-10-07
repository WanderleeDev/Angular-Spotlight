import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';
import { Metadata, OpenGraph } from './shared/interfaces/Metadata.interface';
import { FlowbiteService } from './services/flowbite.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <ngx-sonner-toaster closeButton position="top-center" />
      <router-outlet />
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100dvh;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  private readonly pageDescription =
    'I invite you to explore my growth at Angular through these mini projects. Each project reflects my dedication and learning.';
  private readonly pageTitle = 'Entry Page Angular';
  private readonly logo =
    'https://www.dropbox.com/scl/fi/87cat8qkbi7ziw6ieyejj/angular-projects.webp?rlkey=775m3t5vwpam6tptintb5eycz&st=0st7hxgd&raw=1';
  private readonly author = 'Max Gutierrez Gamboa';
  private readonly keywords =
    'my projects angular, css, tailwind, responsive design, typescript';
  private readonly openGraphConfig: Partial<OpenGraph> = {
    'og:title': this.pageTitle,
    'og:description': this.pageDescription,
    'og:type': 'website',
    'og:image': this.logo,
    'og:image:alt': `${this.pageTitle}`,
    'og:site_name': this.pageTitle,
    'og:url': environment.CANONICAL_URL,
    'twitter:description': this.pageDescription,
    'twitter:title': this.pageTitle,
    'twitter:card': 'summary',
    'twitter:image:src': this.logo,
  };
  private readonly metaTagConfig: Metadata = {
    description: this.pageDescription,
    author: this.author,
    keywords: this.keywords,
  };

  constructor(
    private readonly seoSvc: SeoService,
    private readonly flowbiteSvc: FlowbiteService
  ) {

    this.seoSvc.applyIndexFollow();
    this.seoSvc.setCanonicalURL(environment.CANONICAL_URL);
    this.seoSvc.updateMetaTags({
      metaTags: this.metaTagConfig,
      ogTags: this.openGraphConfig,
    });
  }

  ngOnInit(): void {
    this.flowbiteSvc.loadFlowbite();
  }
}
