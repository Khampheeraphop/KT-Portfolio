export const routes = {
  home: "/",
  work: "/#work",
  about: "/#about",
  contact: "/#contact",
  project: (id: string) => "/projects/" + encodeURIComponent(id),
};
