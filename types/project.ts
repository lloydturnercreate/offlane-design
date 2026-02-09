export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  aspectRatio: string;
  caption?: string;
  isVideo?: boolean;
}

export interface GalleryLayout {
  fullWidthIndices?: number[];
  twoRowIndices?: number[];
  pairedIndices?: number[]; // pairs of indices to display side-by-side with matched heights
}

export interface Project {
  id: number;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  timeline: string;
  aspectRatio: string;

  // Hero section
  heroImage?: string;
  heroVideo?: string;
  heroLogo?: string;
  heroGradient?: string;
  heroDarkText?: boolean; // Use dark text instead of white on media backgrounds
  tagline: string;
  description: string;

  // Content sections
  challenge?: string;
  solution?: string;
  process?: ProcessStep[];
  results?: string;

  // Simplified archive-style page
  isArchive?: boolean;
  introText?: string;

  // Additional content
  testimonial?: Testimonial;
  gallery: GalleryImage[];
  galleryLayout?: GalleryLayout;

  // Navigation
  nextProjectSlug: string;
  nextProjectImage?: string; // Dedicated image for the "next project" card
}
