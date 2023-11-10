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
      component={PDFDownloadLink}
      document={<MyPDFDocument data={dataArray} />}
      fileName="myDocument.pdf"
      alignSelf={"flex-end"}
    >
      {({ blob, url, loading, error }) => (
        <Button
          sx={{
            alignSelf: "flex-end",
            fontWeight: "500",
            textTransform: "none",
            color: "white",
            backgroundColor: "#fb5c25",
            ":hover": {
              backgroundColor: "#fb5c25",
            },
          }}
        >
          {loading ? "Loading document..." : "Download now!"}
        </Button>
      )}
    </Box>
  );
}

export default PDFdataExport;
