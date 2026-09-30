import type { Project } from "@/features/projects/types";
import type { Locale } from "@/locales";

export function getProjectTitle(project: Project, locale: Locale): string {
  return project.localizedTitle?.[locale] ?? project.title;
}
