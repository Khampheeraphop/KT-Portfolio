import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "points-service",
    title: "Points & Rewards Service",
    category: "service",
    featured: false,
    nodes: ["APPLICATIONS", "POINTS", "REWARDS"],
    tags: ["Microservice", "Integration", "Rewards"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
