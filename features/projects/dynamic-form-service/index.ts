import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "dynamic-form-service",
    title: "Dynamic Form Service",
    category: "service",
    featured: false,
    nodes: ["COMPONENTS", "FORM CONFIG", "SERVICES"],
    tags: ["React", "Components", "Microservice"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
