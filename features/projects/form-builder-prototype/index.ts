import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "form-builder-prototype",
    title: "Form Builder Prototype",
    category: "poc",
    featured: false,
    nodes: ["LAYOUT", "FORM BUILDER", "PDF"],
    tags: ["Frontend", "Backend", "Database", "PoC"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
