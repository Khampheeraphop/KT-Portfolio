import type { Project } from "../types";
import th from "./th";
import en from "./en";
import preview from "./assets/preview.png?url";
const project: Project = {
  ...{
    id: "appreciation-gifts",
    title: "Siriraj Give Phase 2",
    category: "production",
    featured: true,
    nodes: ["GIFTS", "APPLICATION", "SUPPORT"],
    tags: ["Frontend", "Backend", "Responsive", "Production", "Bug fixing"],
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
  image: {
    src: preview,
    alt: { th: "หน้าเว็บไซต์ Siriraj Give", en: "Siriraj Give website homepage" },
    width: 1920, height: 920,
  },
};
export default project;
