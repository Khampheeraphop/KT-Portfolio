import type { ExperienceCopy } from "./types";

const en: ExperienceCopy = {
  introduction: [
    "I’m Khampheeraphop Thongsaeng, also known as Phop. I study Information Technology and Digital Innovation at North Bangkok University and am a Full Stack Developer intern at Blueseas Enterprise Co., Ltd.",
    "During my internship, I contributed to 13 projects, from proofs of concept for team and client demonstrations to production applications, internal systems, and shared microservices. Most of my work covered both frontend and backend development.",
    "My experience includes dynamic form builders, document workflows, portfolios, concert events, vehicle booking, points and rewards, assets, and maintenance. I worked in sprints with the team, tested complete user workflows, recorded bug cases, and resolved application issues.",
  ],
  internshipSummary:
    "Developed web applications with the team using React, TypeScript, and MUI, connecting interfaces with Node.js backend functionality. Worked with MongoDB, designed a PostgreSQL database for the points service, and integrated microservices, LINE, and notification systems according to each project's scope.",
  internshipHighlights: [
    "Built proofs of concept for team and client demonstrations, including a dynamic form builder for internal concept discussions and a data-import prototype for client presentations.",
    "Developed frontend and backend features with the team for NSM E-Portfolio, Siriraj Event, and Siriraj Give Phase 2. Helped resolve more than 100 bug cases in each of the two Siriraj projects.",
    "Designed the PostgreSQL database and implemented stored procedures and functions for Points & Rewards Service, including points, reward redemption, and connected application authentication.",
    "Developed LINE LIFF and Rich Menu flows, connected surveys with the points service, used Redis for point and stock deductions, and implemented cron jobs and LINE Messaging API notifications.",
    "Tested complete NSM E-Portfolio workflows before handover and vehicle booking workflows during QA and UAT, recording bug cases and fixing issues.",
    "Developed OCR & Search, from document upload and Python/Tesseract processing to Elasticsearch fuzzy matching with highlighted Thai and English results.",
  ],
  scopeTitle: "What I worked on",
  scopeIntroduction:
    "My work covers interfaces, backend functionality, databases, integrations, testing, and team collaboration. Responsibilities varied by project: I developed OCR & Search, contributed to production systems with the team, and developed selected parts of StepNode and metadata handling in Document Workflow.",
  relatedWork: "Related projects",
  responsibilities: {
    frontend: {
      title: "Interfaces and reusable components",
      description:
        "Built user and administrator screens with React, TypeScript, and MUI, following Figma designs for NSM E-Portfolio and implementing responsive layouts for Siriraj Give Phase 2. Developed an A4 drag-and-drop form builder and property controls, socket-based ticket queues, zone selection and price calculation for Siriraj Event, and reward redemption forms and payment UI for Siriraj Give Phase 2.",
    },
    backend: {
      title: "Backend functionality and application data",
      description:
        "Developed Node.js and TypeScript backend functionality connected to application data. Worked with MongoDB and handled database development for Form Builder Prototype. Designed the PostgreSQL database and implemented stored procedures and functions for Points & Rewards Service, supporting point accrual, deductions, refunds, and redemption, alongside data import, Excel exports, and A4 PDF generation.",
    },
    services: {
      title: "Microservice development and integration",
      description:
        "Developed and integrated services for forms, points, and asset records. Implemented Basic Auth, keys, and tokens for Points & Rewards Service and tokens for Asset Management Service. Configured and tested flows and developed selected StepNode and metadata functionality in Document Workflow, along with a playground for trying asset service operations and stock deductions.",
    },
    integrations: {
      title: "LINE, notifications, and scheduled tasks",
      description:
        "Integrated LINE LIFF, Rich Menu, and QR codes in Healthcare Engagement, covering surveys, points, and reward redemption. Used Redis for point and stock deductions, implemented cron jobs, and connected LINE Messaging API notifications. Also integrated notification services in vehicle booking and Maintenance Management, creating all email templates for Maintenance Management.",
    },
    workflows: {
      title: "Application workflows and user permissions",
      description:
        "Developed vehicle request and evaluation forms, reports, travel calendars, roles and permissions, and contributed to automated vehicle allocation. Built repair workflows from technician acceptance to case closure, spare part requisitions, and maintenance planning in Maintenance Management. Also worked on equipment and material records and asset number formatting, with an understanding of fiscal year and calendar year concepts.",
    },
    search: {
      title: "Document processing and content search",
      description:
        "Developed frontend and backend functionality for OCR & Search. Connected document upload with Python and Tesseract OCR, stored and indexed text in Elasticsearch, and implemented keyword search and fuzzy matching for Thai and English, with highlighted text and source document references.",
    },
    production: {
      title: "System testing and issue resolution",
      description:
        "Tested NSM E-Portfolio workflows end to end before handover and vehicle booking workflows during QA and UAT, recording bug cases and fixing issues. Tested and resolved issues in Maintenance Management, and helped resolve more than 100 bug cases in Siriraj Event and more than 100 in Siriraj Give Phase 2.",
    },
    collaboration: {
      title: "Sprint collaboration and deployment experience",
      description:
        "Worked in sprints with the team on vehicle booking and Maintenance Management, participating in Sprint Planning and Sprint Review. Implemented assigned backlog items for vehicle booking and tried deploying Healthcare Engagement to QA and staging using Harbor and Termius to prepare the system for testing.",
    },
  },
  toolsIntroduction:
    "Tools used according to each project's scope: PostgreSQL in Points & Rewards Service, Redis and LINE in Healthcare Engagement, sockets in Siriraj Event, and Python, Tesseract, and Elasticsearch in OCR & Search.",
  toolGroups: {
    frontend: "User interfaces",
    backend: "Backend and databases",
    delivery: "Team development tools",
    processing: "Document and text processing",
  },
};
export default en;
