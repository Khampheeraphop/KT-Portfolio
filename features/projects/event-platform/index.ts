import type { Project } from "../types";
import th from "./th";
import en from "./en";
import preview from "./assets/preview.png?url";
const project: Project = {
  ...{
    id: "event-platform",
    title: "Siriraj Event",
    category: "production",
    featured: true,
    nodes: ["EVENT", "APPLICATION", "SUPPORT"],
    tags: ["Frontend", "Backend", "Socket", "Production", "Bug fixing"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
  image: {
    src: preview,
    alt: { th: "หน้ากิจกรรม Siriraj Event", en: "Siriraj Event activities page" },
    width: 1920, height: 920,
  },
};
export default project;
