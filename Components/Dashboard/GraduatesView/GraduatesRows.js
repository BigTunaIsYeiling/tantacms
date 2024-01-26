"use client";
import { Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { EnrollmentBody } from "./EnrollmentBody";
export const GraduateRow = ({
  id,
  name,
  division,
  passed_hours,
  gpa,
  level,
  group,
  mark,
  index,
  year,
  semester,
}) => {
  const [open, setOpen] = useState(false);
  const Month = () => {
    if (semester == 1) return "January";
    if (semester == 2) return "June";
    if (semester == 3) return "Summer";
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell
          component="th"
          //   sx={{ display: HideidColumn ? "none" : "table-cell" }}
        >
          {index + 1}
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
        {/* <TableCell
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
        </TableCell> */}
        <TableCell
          align="left"
          //   sx={{ display: HideGpaColumn ? "none" : "table-cell" }}
        >
          {gpa.toFixed(3)}
        </TableCell>
        <TableCell align="left">{mark}</TableCell>
        <TableCell align="left">{Month()}</TableCell>
        <TableCell align="left">{year}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={10}
          padding={"none"}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <EnrollmentBody id={id} open={open} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
