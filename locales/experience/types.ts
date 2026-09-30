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
    production: { title: string; description: string };
  };
  toolGroups: {
    frontend: string;
    backend: string;
    delivery: string;
    processing: string;
  };
  toolsIntroduction: string;
}
