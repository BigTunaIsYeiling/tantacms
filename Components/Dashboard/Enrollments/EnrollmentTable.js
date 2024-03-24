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
export default function EnrollmentTable({
  enrollments,
  level,
  semester,
  points,
}) {
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
              <TableCell sx={{ color: "white" }}>Hours</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Mark
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Grade
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Points
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Edit
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enrollments.map((row) => (
              <EnrollmentsRow {...row} key={row.id} fullPoints={points} />
            ))}
            <TableRow>
              <TableCell>Total Points</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{points ? points : "0"}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
