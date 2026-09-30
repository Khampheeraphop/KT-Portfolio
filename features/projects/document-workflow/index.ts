import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "document-workflow",
    title: "Document Workflow",
    category: "service",
    featured: false,
    nodes: ["FORM", "WORKFLOW", "METADATA"],
    tags: ["Workflow", "Forms", "Microservice"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
