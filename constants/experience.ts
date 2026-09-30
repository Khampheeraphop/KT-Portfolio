import type { ExperienceCopy } from "@/locales/experience/types";

export const responsibilities: {
  id: keyof ExperienceCopy["responsibilities"];
  projectIds: string[];
}[] = [
  { id: "frontend", projectIds: ["dynamic-form-service", "nsm-e-portfolio"] },
  {
    id: "backend",
    projectIds: ["form-builder-prototype", "data-import-prototype"],
  },
  {
    id: "services",
    projectIds: ["document-workflow", "points-service", "fleet-booking"],
  },
  { id: "production", projectIds: ["event-platform", "appreciation-gifts"] },
];

export const toolGroups: {
  id: keyof ExperienceCopy["toolGroups"];
  tools: string[];
}[] = [
  { id: "frontend", tools: ["TypeScript", "React", "MUI (Material UI)"] },
  { id: "backend", tools: ["Node.js", "MongoDB"] },
  { id: "delivery", tools: ["GitLab", "Docker", "Harbor", "Jenkins"] },
  { id: "processing", tools: ["Python", "Tesseract OCR", "Elasticsearch"] },
];
