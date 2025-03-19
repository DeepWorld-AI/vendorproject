import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Mammoth from "mammoth";
import { ChevronLeft, ChevronRight } from "lucide-react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PAGE_HEIGHT = 600;
const DocumentViewer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [textPages, setTextPages] = useState<string[]>([]);

  const extractTextFromPDF = async (arrayBuffer: ArrayBuffer) => {
    try {
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let extractedText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        extractedText +=
          textContent.items
            .map((item) => ("str" in item ? item.str : ""))
            .join(" ") + "\n";
      }

      return extractedText;
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      return "Error extracting text";
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setCurrentPage(1);

    if (uploadedFile.type === "application/pdf") {
      const arrayBuffer = await uploadedFile.arrayBuffer();
      const text = await extractTextFromPDF(arrayBuffer);
      setTextPages(chunkText(text, 3000));
    } else if (
      uploadedFile.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (event.target?.result instanceof ArrayBuffer) {
          const { value } = await Mammoth.convertToHtml({
            arrayBuffer: event.target.result,
          });

          const pages = chunkText(value.replace(/<\/p>/g, "\n\n"), 1000);
          setTextPages(pages);
        }
      };
      reader.readAsArrayBuffer(uploadedFile);
    } else if (uploadedFile.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setTextPages(chunkText(text, 1000));
      };
      reader.readAsText(uploadedFile);
    }
  };

  // Function to split text into larger chunks per page
  const chunkText = (text: string, maxWords: number): string[] => {
    const words = text.split(/\s+/);
    const chunks = [];
    for (let i = 0; i < words.length; i += maxWords) {
      chunks.push(words.slice(i, i + maxWords).join(" "));
    }
    return chunks;
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const goToNextPage = () => {
    if (currentPage < (numPages || textPages.length || 1)) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {file?.type === "application/pdf" ? (
        <div className="border p-4 shadow-md">
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={currentPage} height={PAGE_HEIGHT} />
          </Document>

          <div className="flex justify-between mt-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {numPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === numPages}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      ) : textPages.length > 0 ? (
        <div
          className="border p-4 shadow-md overflow-y-auto rounded-md scrollbar-thin scrollbar-thumb-gray-400
         scrollbar-track-gray-200"
        >
          <div
            dangerouslySetInnerHTML={{ __html: textPages[currentPage - 1] }}
          />

          <div className="absolute -bottom-9 right-0">
            <div className="flex justify-between gap-2 items-center px-2">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-md"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs">
                {currentPage} of {textPages.length}
              </span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === textPages.length}
                className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-md"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DocumentViewer;
