"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DepartmentsRows from "./DepartmentsRows";
const DepartmentsTable = ({ data }) => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <DepartmentsRows key={row.name} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DepartmentsTable;
