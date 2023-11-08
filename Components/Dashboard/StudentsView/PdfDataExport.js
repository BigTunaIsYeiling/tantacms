import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyPDFDocument } from "./StudentsPdfDocument";
import { Box, Button } from "@mui/material";

function PDFdataExport() {
  const dataArray = [
    "Row 1",
    "Row 2",
    "Row 3",
    "Row 4",
    "Row 5",
    "Row 6",
    "Row 7",
    "Row 8",
    "Row 9",
    "Row 10",
    "Row 11",
    "Row 12",
  ];

  return (
    <Box
      sx={{
        alignSelf: "flex-end",
        fontWeight: "400",
        textTransform: "none",
        color: "white",
        backgroundColor: "#fb5c25",
        padding: "0.5rem 1rem",
      }}
      component={PDFDownloadLink}
      document={<MyPDFDocument data={dataArray} />}
      fileName="myDocument.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </Box>
  );
}

export default PDFdataExport;
