import type { Localized } from "@/locales";
export const projectCategories = [
  "production",
  "service",
  "poc",
  "personal",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];
export interface Project {
  id: string;
  title: string;
  localizedTitle?: Localized;
  category: ProjectCategory;
  subtitle: Localized;
  description: Localized;
  contribution: Localized;
  tags: string[];
  nodes: string[];
  featured?: boolean;
  url?: string;
  repositories?: { label: string; url: string }[];
  image?: {
    src: string;
    alt: Localized;
    width: number;
    height: number;
  };
}
