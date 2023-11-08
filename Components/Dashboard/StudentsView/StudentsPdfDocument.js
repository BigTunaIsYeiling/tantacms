import { Document, Page, Text, View } from "@react-pdf/renderer";
import { PDFPage } from "./PDFPage";

export const MyPDFDocument = ({ data }) => {
  const rowsPerPage = 10;

  const pages = [];
  for (let i = 0; i < data.length; i += rowsPerPage) {
    const pageData = data.slice(i, i + rowsPerPage);

    pages.push(<PDFPage pageData={pageData} key={i} />);
  }

  return <Document>{pages}</Document>;
};
