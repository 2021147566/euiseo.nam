export type ContentBlockType = "heading" | "text" | "image" | "pdf" | "divider";

export interface ContentBlock {
  type: ContentBlockType;
  // heading / text
  content?: string;
  // image
  src?: string;
  alt?: string;
  caption?: string;
  // pdf
  pdfSrc?: string;
  pdfLabel?: string;
}

export interface ProjectContent {
  blocks: ContentBlock[];
}
