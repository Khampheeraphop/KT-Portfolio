import type { Localized } from "@/locales";
export type ProjectCategory = "production" | "service" | "poc";
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
  image?: {
    src: string;
    alt: Localized;
    width: number;
    height: number;
  };
}
