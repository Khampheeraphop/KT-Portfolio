import project0 from "./nsm-e-portfolio";
import project1 from "./dynamic-form-service";
import project2 from "./document-workflow";
import project3 from "./form-builder-prototype";
import project4 from "./data-import-prototype";
import project5 from "./ocr-search";
import project6 from "./event-platform";
import project7 from "./appreciation-gifts";
import project8 from "./fleet-booking";
import project9 from "./points-service";
import project10 from "./healthcare-engagement";
import project11 from "./asset-service";
import project12 from "./maintenance-management";
export const projects = [
  project0,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
];
export const getProject = (id: string) =>
  projects.find((project) => project.id === id);
