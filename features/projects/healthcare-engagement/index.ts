import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "healthcare-engagement",
    title: "Healthcare Engagement",
    category: "production",
    featured: false,
    nodes: ["QR / FORMS", "SURVEYS", "REWARDS"],
    tags: ["Healthcare", "Surveys", "Rewards"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
