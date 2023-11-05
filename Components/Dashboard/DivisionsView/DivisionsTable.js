"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DivisionsRows from "./DivisionsRows";
import { useSelector } from "react-redux";
const DivisionsTable = ({ divisions }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "100vw",
        maxHeight: "100%",
        paddingLeft: { xs: "0", sm: "65px" },
        boxSizing: "border-box",
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead
          sx={{
            backgroundColor: "#f9f9f9",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Department
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {divisions.map((row) => (
            <DivisionsRows key={row.name} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DivisionsTable;
