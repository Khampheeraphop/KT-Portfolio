import type { Project } from "../types";
import th from "./th";
import en from "./en";
import preview from "./assets/preview.png?url";

const project: Project = {
  id: "sugarcane-care",
  title: "Sugarcane Care",
  localizedTitle: { th: "อ้อยดี · Sugarcane Care", en: "Sugarcane Care" },
  category: "personal",
  featured: true,
  nodes: ["LEAF SCREENING", "ONNX API", "FIELD SURVEY"],
  tags: ["React", "TypeScript", "FastAPI", "ONNX", "Cloudflare", "Render"],
  url: "https://sugarcane-care.khampheeraphop-thon.workers.dev/",
  repositories: [
    { label: "Web", url: "https://github.com/Khampheeraphop/Sugarcane_web" },
    { label: "API", url: "https://github.com/Khampheeraphop/Sugarcane_api" },
  ],
  subtitle: { th: th.subtitle, en: en.subtitle },
  description: { th: th.description, en: en.description },
  contribution: { th: th.contribution, en: en.contribution },
  image: {
    src: preview,
    alt: {
      th: "หน้าเว็บอ้อยดีสำหรับเลือกภาพใบอ้อยและดูผลคัดกรอง",
      en: "Sugarcane Care leaf photo upload and screening interface",
    },
    width: 1440,
    height: 1000,
  },
};
export default project;
