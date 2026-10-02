import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "maintenance-management",
    title: "Maintenance Management",
    category: "production",
    featured: false,
    nodes: ["REQUEST", "WORKFLOW", "ROLES"],
    tags: ["Frontend", "Backend", "Sprint", "Workflow", "Role & Permission", "Notifications", "Testing"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
