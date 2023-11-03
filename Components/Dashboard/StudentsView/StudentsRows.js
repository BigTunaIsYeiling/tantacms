"use client";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
const StRows = ({
  id,
  name,
  division,
  passed_hours,
  gpa,
  level,
  enrollments,
  group,
  mark,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell
          component="th"
          //   sx={{ display: HideidColumn ? "none" : "table-cell" }}
        >
          {id}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiUpArrowAlt color="#F6490D" /> : <BiDownArrowAlt />}
          </IconButton>
        </TableCell>
        <TableCell
          align="left"
          sx={{
            whiteSpace: "nowrap",
            // display: HidenameColumn ? "none" : "table-cell",
          }}
        >
          {name}
        </TableCell>
        <TableCell
          align="left"
          sx={{
            whiteSpace: "nowrap",
            // display: HidedivisionColumn ? "none" : "table-cell",
          }}
        >
          {division ? division.name : group.name}
        </TableCell>
        <TableCell
          align="left"
          //   sx={{ display: HideLevelColumn ? "none" : "table-cell" }}
        >
          {level}
        </TableCell>
        <TableCell
          align="left"
          //   sx={{ display: HideHoursColumn ? "none" : "table-cell" }}
        >
          {passed_hours}
        </TableCell>
        <TableCell
          align="left"
          //   sx={{ display: HideGpaColumn ? "none" : "table-cell" }}
        >
          {gpa.toFixed(3)}
        </TableCell>
        <TableCell
          align="left"
          //   sx={{ display: HideGpaColumn ? "none" : "table-cell" }}
        >
          {mark}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={9}
          padding={"none"}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Level</TableCell>
                    <TableCell align="right">Semester</TableCell>
                    <TableCell align="right">Mark</TableCell>
                    <TableCell align="right">Grade</TableCell>
                    <TableCell align="right">GPA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enrollments
                    .filter((enr) => enr.student.name === name)
                    .sort((a, b) => {
                      return a.level - b.level;
                    })
                    .map((enroll) => {
                      return (
                        <TableRow
                          key={enroll.id + enroll.student.name + enroll.mark}
                        >
                          <TableCell component="th" scope="row">
                            {enroll.course.name}
                          </TableCell>
                          <TableCell align="right">{enroll.level}</TableCell>
                          <TableCell align="right">
                            {enroll.semester === 3 ? "SC" : enroll.semester}
                          </TableCell>
                          <TableCell align="right">
                            {enroll.mark + "/" + enroll.full_mark}
                          </TableCell>
                          <TableCell align="right">{enroll.grade}</TableCell>
                          <TableCell align="right">
                            {enroll.gpa.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default StRows;
