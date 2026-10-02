import type { ExperienceCopy } from "@/locales/experience/types";

export const responsibilities: {
  id: keyof ExperienceCopy["responsibilities"];
  projectIds: string[];
}[] = [
  { id: "frontend", projectIds: ["dynamic-form-service", "nsm-e-portfolio", "appreciation-gifts"] },
  {
    id: "backend",
    projectIds: ["form-builder-prototype", "data-import-prototype", "points-service"],
  },
  {
    id: "services",
    projectIds: ["document-workflow", "points-service", "asset-service"],
  },
  {
    id: "workflows",
    projectIds: ["fleet-booking", "maintenance-management", "asset-service"],
  },
  {
    id: "integrations",
    projectIds: ["healthcare-engagement", "fleet-booking", "maintenance-management"],
  },
  { id: "search", projectIds: ["ocr-search"] },
  {
    id: "production",
    projectIds: ["nsm-e-portfolio", "fleet-booking", "event-platform", "appreciation-gifts"],
  },
  {
    id: "collaboration",
    projectIds: ["fleet-booking", "maintenance-management", "healthcare-engagement"],
  },
];

export const toolGroups: {
  id: keyof ExperienceCopy["toolGroups"];
  tools: string[];
}[] = [
  { id: "frontend", tools: ["TypeScript", "React", "MUI (Material UI)", "LINE LIFF"] },
  { id: "backend", tools: ["Node.js", "MongoDB", "PostgreSQL", "Redis", "Socket", "LINE Messaging API"] },
  { id: "delivery", tools: ["GitLab", "Docker", "Harbor", "Jenkins", "Termius"] },
  { id: "processing", tools: ["Python", "Tesseract OCR", "Elasticsearch"] },
];
