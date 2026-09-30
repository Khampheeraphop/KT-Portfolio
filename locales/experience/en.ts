import type { ExperienceCopy } from "./types";

const en: ExperienceCopy = {
  introduction: [
    "I’m Khampheeraphop Thongsaeng, also known as Phop. I study Information Technology and Digital Innovation at North Bangkok University and am a Full Stack Developer intern at Blueseas Enterprise Co., Ltd.",
    "During my internship, I contributed to 13 projects spanning client demonstration prototypes, production applications, internal organizational systems, and shared services used by multiple applications. Most of my work covered both frontend and backend development, with database responsibilities in relevant projects.",
    "My experience includes digital forms, document workflows, portfolios, vehicle booking, points and rewards, assets, and maintenance requests. Alongside feature development, I worked with the team to resolve reported issues in production systems.",
  ],
  internshipSummary:
    "Developed web applications with the team using TypeScript, React, Node.js, and MongoDB as the core stack, with MUI (Material UI) for interface components and styling. Worked across user interfaces, backend functionality, and application data.",
  internshipHighlights: [
    "Built prototypes to demonstrate proposed functionality to clients, including form-building and data-import tools.",
    "Contributed to developing and delivering client systems with the team, including NSM E-Portfolio, Siriraj Event, and Siriraj Give Phase 2, through feature development and fixes for production use.",
    "Contributed to shared services for forms, document workflows, points, and asset information.",
    "Collaborated on bug fixes, contributing to more than 100 resolved cases in each of the event and appreciation gift projects.",
  ],
  scopeTitle: "What I worked on",
  scopeIntroduction:
    "My responsibilities varied by project, from frontend and backend feature development to individual components and production fixes.",
  relatedWork: "Related projects",
  responsibilities: {
    frontend: {
      title: "Interfaces and reusable components",
      description:
        "Built user-facing and administrative screens with React and TypeScript, using MUI (Material UI) for components and styling. Developed form components such as text, text fields, and images, with controls for labels, placeholders, values, border colors, and border thickness.",
    },
    backend: {
      title: "Backend functionality and application data",
      description:
        "Developed backend functionality with Node.js and TypeScript, connecting interfaces to application data. Worked with MongoDB and handled database responsibilities for the form prototype, alongside data import, Excel-related tasks, and PDF generation.",
    },
    services: {
      title: "Shared services and workflows",
      description:
        "Contributed to microservices for forms, document workflows, points and rewards, and asset information. Worked with flow and node configuration, metadata, and role-based permissions in internal applications.",
    },
    production: {
      title: "Production development and issue resolution",
      description:
        "Contributed features and fixes to applications in active use. Helped resolve more than 100 reported bug cases in the concert event platform and more than 100 in the second phase of the appreciation gift platform.",
    },
  },
  toolsIntroduction:
    "Technologies and tools used during my internship, grouped by the work they supported. Python, Tesseract, and Elasticsearch were used in the OCR project.",
  toolGroups: {
    frontend: "User interfaces",
    backend: "Backend and databases",
    delivery: "Team development tools",
    processing: "Document and text processing",
  },
};
export default en;
