import type { Project } from "../types";
import th from "./th";
import en from "./en";
const project: Project = {
  ...{
    id: "fleet-booking",
    title: "Vehicle Booking System",
    category: "production",
    featured: false,
    nodes: ["BOOKING", "ALLOCATION", "PERMISSIONS"],
    tags: ["Frontend", "Backend", "Sprint", "Role & Permission", "Notifications", "Excel", "Cron Job"],
  },
  localizedTitle: { th: "ระบบจองรถ", en: "Vehicle Booking System" },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
};
export default project;
