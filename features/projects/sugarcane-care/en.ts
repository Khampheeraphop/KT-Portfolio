export default {
  subtitle:
    "Image-based sugarcane leaf screening with care guidance and a basic field survey tool",
  description:
    "A personal project covering the model, web interface, and API for preliminary sugarcane leaf screening. Users submit close-up photos to receive results, general causes, and follow-up guidance. The system abstains when evidence is insufficient. A separate field tool compares image colors with user-selected reference areas. The model has not been validated on Thai farms, and the field tool does not diagnose disease from drone imagery.",
  contribution:
    "Built a mobile-friendly React and TypeScript application with separate pages, reusable components, and API services, including supported disease groups and source-linked guidance.\n\nDeveloped a FastAPI backend and a MobileNetV3 Small image pipeline, exporting to ONNX for CPU inference. Added image quality checks, abstention rules, and prediction parity checks between the training and deployment runtimes.\n\nConnected Cloudflare Workers to the Render API and Open-Meteo weather data. Set up automated testing and deployment from GitHub, with separate web and API repositories.",
};
