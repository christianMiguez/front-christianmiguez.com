export interface Post {
  id: string;
  title: string;
  publishedDate: Date;
  hero: Hero;
  layout: Layout[];
  slug: string;
  breadcrumbs: Breadcrumb[];
  meta: Meta;
  _status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Breadcrumb {
  doc: string;
  label: string;
  id: string;
}

export interface Hero {
  type: string;
  richText: HeroRichText[];
  links: any[];
  media: Media;
}

export interface Media {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  caption?: Caption[];
}

export interface Caption {
  children: CaptionChild[];
}

export interface CaptionChild {
  text: string;
}

export interface HeroRichText {
  children: RichTextChild[];
  type?: string;
}

export interface RichTextChild {
  text?: string;
  type?: string;
  linkType?: string;
  url?: string;
  newTab?: boolean;
  children?: CaptionChild[];
}

export interface Layout {
  backgroundColor?: string;
  columns?: Column[];
  id: string;
  blockType: string;
  mediaBlockBackgroundColor?: string;
  position?: string;
  media?: Media;
  blockName?: string;
  ctaBackgroundColor?: string;
  richText?: LayoutRichText[];
  links?: any[];
}

export interface Column {
  size: string;
  richText: HeroRichText[];
  link: Link;
  id: string;
}

export interface Link {
  type: string;
  appearance: string;
}

export interface LayoutRichText {
  children: RichTextChild[];
}

export interface Meta {
  title: string;
  description: string;
  image: Media;
}
