import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "asset-service",
    title: "Asset Management Service",
    category: "service",
    featured: false,
    nodes: ["ASSETS", "INVENTORY", "LIFECYCLE"],
    tags: ["Microservice", "Inventory", "Assets"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
