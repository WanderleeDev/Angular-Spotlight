export interface MetaIndex {
  [key: string]: string;
}

type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'music.song'
  | 'music.album';

type TwitterCardType = 'summary' | 'summary_large_image' | 'app' | 'player';

export interface Metadata extends MetaIndex {
  description: string;
  keywords: string;
  author: string;
}

export interface OpenGraph extends MetaIndex {
  'og:title': string;
  'og:description': string;
  'og:url': string;
  'og:image': string;
  'og:image:alt': string;
  'og:video': string;
  'og:type': OpenGraphType;
  'og:site_name': string;
  'og:audio': string;
  'twitter:card': TwitterCardType;
  'twitter:site': string;
  'twitter:title': string;
  'twitter:description': string;
  'twitter:image:src': string;
}

export interface MetaTagConfig {
  metaTags: Partial<Metadata>;
  ogTags: Partial<OpenGraph>;
}
