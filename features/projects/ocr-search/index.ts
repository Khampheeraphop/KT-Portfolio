import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "ocr-search",
    title: "OCR & Search",
    category: "poc",
    featured: false,
    nodes: ["DOCUMENTS", "OCR", "SEARCH"],
    tags: ["Python", "TypeScript", "Elasticsearch"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
