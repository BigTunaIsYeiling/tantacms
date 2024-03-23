import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
export const DetailTable = ({
  name,
  level,
  total_points,
  gpa,
  total_mark,
  regulation,
  division,
  group,
  passed_hours,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {level}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Regulation</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {regulation}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Group</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {group}
            </TableCell>
          </TableRow>
          {division && (
            <TableRow>
              <TableCell>Division</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>
                {division}
              </TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell>Passed Hours</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {passed_hours}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Points</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {total_points}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GPA</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {gpa.toFixed(3)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Mark</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>
              {total_mark}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
