import type { Project } from "../types";
import th from "./th";
import en from "./en";
import preview from "./assets/preview.png?url";
const project: Project = {
  ...{
    id: "nsm-e-portfolio",
    title: "NSM E-Portfolio",
    category: "production",
    featured: true,
    nodes: ["ACTIVITIES", "CERTIFICATES", "PORTFOLIO"],
    tags: ["Frontend", "Backend", "Production"],
    url: "https://e-portfolio.nsm.or.th/",
  },
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
  image: {
    src: preview,
    alt: { th: "หน้าเว็บไซต์ NSM E-Portfolio", en: "NSM E-Portfolio website homepage" },
    width: 1920, height: 920,
  },
};
export default project;
