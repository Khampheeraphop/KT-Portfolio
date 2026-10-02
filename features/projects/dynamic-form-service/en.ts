export default {
  subtitle: "An A4 form builder with drag and drop",
  description:
    "A configurable form-building microservice shared across applications, developed from a proof of concept into a production service. Users can arrange components on A4 pages with drag and drop, customize layouts and properties, save drafts, create forms for actual use, and export A4-sized PDFs.",
  contribution:
    "Developed frontend and backend functionality for the form builder, covering the A4 page editor, form data management, and document export.\n\nForm editor: Built the A4 page layout and components such as Text, TextField, Image, TextArea, and Signature. Implemented drag and drop for adding and repositioning components on the page.\n\nProperty controls: Built configuration panels for column layouts, sizes, colors, borders, and backgrounds, along with labels, placeholders, and values for relevant components.\n\nForm structure: Managed the Page → Container → Component hierarchy to support component placement within each page section. Connected form structure and property data between the frontend and backend.\n\nForms and documents: Implemented draft saving and the creation of forms for actual use, with PDF exports matching A4 page dimensions.",
};
