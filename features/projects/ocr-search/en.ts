export default {
  subtitle: "Document content search with OCR and fuzzy matching",
  description:
    "A document processing and content search system supporting Thai and English. Users upload documents through the web interface; Python and Tesseract OCR extract the text, which is stored in Elasticsearch for content search. The system supports keyword searches and fuzzy matching for similar terms, with highlighted text and references to the relevant documents in the results.",
  contribution:
    "Developed frontend and backend functionality for the project, using Python, TypeScript, and Elasticsearch. Connected the complete workflow from document upload and text extraction to storage, search, and results displayed on the web.\n\nDocument ingestion and processing: Built the upload interface and backend for receiving documents. Integrated OCR processing with Python and Tesseract, then stored and indexed the extracted text in Elasticsearch for search.\n\nSearch: Implemented keyword search and fuzzy matching to support terms similar to the text in the documents, in both Thai and English.\n\nResults: Built the search interface and results display, highlighting matching words or passages and identifying their source documents so users can find relevant documents and see the matching text directly in the results.",
};
