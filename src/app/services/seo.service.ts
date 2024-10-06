import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {
  MetaTagConfig,
  MetaIndex,
} from '../shared/interfaces/Metadata.interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly _title: Title = inject(Title);
  private readonly _meta: Meta = inject(Meta);

  public setCanonicalURL(url: string): void {
    this._meta.updateTag({ name: 'canonical', content: url });
  }

  public applyIndexFollow(value = true): void {
    this._meta.updateTag({
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
    this._title.setTitle(title);
  }

  private setMetaTags(objectTags: Partial<MetaIndex | undefined>): void {
    if (objectTags === undefined || Object.keys(objectTags).length <= 0) return;

    for (const [key, value] of Object.entries(objectTags)) {
      if (value === undefined || value.trim() === '') continue;

      if (key.startsWith('og:')) {
        this._meta.updateTag({ property: key, content: value });
      } else if (key.startsWith('twitter:')) {
        this._meta.updateTag({ name: key, content: value });
      } else {
        this._meta.updateTag({ [key]: value });
      }
    }
  }
}
