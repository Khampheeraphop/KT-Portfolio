import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "data-import-prototype",
    title: "Data Import Prototype",
    category: "poc",
    featured: false,
    nodes: ["IMPORT", "RECORDS", "EXCEL"],
    tags: ["Frontend", "Backend", "Excel"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
