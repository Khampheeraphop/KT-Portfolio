export interface ExperienceCopy {
  introduction: string[];
  internshipSummary: string;
  internshipHighlights: string[];
  scopeTitle: string;
  scopeIntroduction: string;
  relatedWork: string;
  responsibilities: {
    frontend: { title: string; description: string };
    backend: { title: string; description: string };
    services: { title: string; description: string };
    workflows: { title: string; description: string };
    integrations: { title: string; description: string };
    search: { title: string; description: string };
    production: { title: string; description: string };
    collaboration: { title: string; description: string };
  };
  toolGroups: {
    frontend: string;
    backend: string;
    delivery: string;
    processing: string;
  };
  toolsIntroduction: string;
}
