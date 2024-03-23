import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack } from "@mui/material";
import { EnrollmentsRow } from "./EnrollmentsRow";
export default function EnrollmentTable({ enrollments, level, semester }) {
  return (
    <Box
      component={Stack}
      direction={"column"}
      alignItems={"center"}
      spacing={"1rem"}
      sx={{ display: enrollments.length == 0 && "none" }}
    >
      <Box fontWeight={500}>
        L {level} S {semester}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#F6490D" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Mark
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Grade
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Points
              </TableCell>
              {/* <TableCell align="right" sx={{ color: "white" }}>
                Edit
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Delete
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {enrollments.map((row) => (
              <EnrollmentsRow {...row} key={row.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
