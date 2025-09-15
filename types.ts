export interface ProductCategory {
  title: string;
  video: string;
  galleryImages: string[];
  description: string[];
  technicalDetails: string;
  whatsappIdentifier: string;
  modalVideo?: string;
}

export type SectionRefs = {
  home: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
  products: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
};