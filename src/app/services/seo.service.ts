import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {
  MetaTagConfig,
  MetaIndex,
} from '../shared/interfaces/Metadata.interface';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  readonly #title: Title = inject(Title);
  readonly #meta: Meta = inject(Meta);
  readonly #document: Document = inject(DOCUMENT);

  public setCanonicalURL(url: string): void {
    if (!URL.canParse(url)) throw new Error(`Invalid URL: ${url}`);

    const documentHead = this.#document.head;
    let linkElement: HTMLLinkElement | null = documentHead.querySelector(
      'link[rel="canonical"]'
    );

    if (!linkElement) {
      linkElement = this.#document.createElement('link');
      linkElement.rel = 'canonical';
      documentHead.appendChild(linkElement);
    }

    linkElement.href = url;
  }

  public applyIndexFollow(value = true): void {
    this.#meta.updateTag({
      name: 'robots',
      content: value ? 'index, follow' : 'noindex, nofollow',
    });
  }

  public updateMetaTags({ metaTags, ogTags }: Partial<MetaTagConfig>): void {
    if (!metaTags && !ogTags) return;

    this.setMetaTags(metaTags);
    this.setMetaTags(ogTags);
  }

  public setTitle(title: string): void {
    this.#title.setTitle(title);
  }

  private setMetaTags(objectTags: Partial<MetaIndex | undefined>): void {
    if (objectTags === undefined || Object.keys(objectTags).length <= 0) return;

    for (const [key, value] of Object.entries(objectTags)) {
      if (value === undefined || value.trim() === '') continue;

      if (key.startsWith('og:') || key.startsWith('twitter:')) {
        this.#meta.updateTag({ property: key, content: value });
      } else {
        this.#meta.updateTag({ name: key, content: value });
      }
    }
  }
}
