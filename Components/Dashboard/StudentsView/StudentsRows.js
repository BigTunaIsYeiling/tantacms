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
import { EnrollmentsRows } from "./Enrollments";
import { EditStudent } from "../Edit Components/EditStudent";
import { DeleteStudent } from "../Delete Components/DeleteStudent";
import { EnrollmentBody } from "./EnrollmentBody";
const StRows = ({
  id,
  name,
  division,
  passed_hours,
  gpa,
  level,
  group,
  mark,
  groups,
  divisions,
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
        <TableCell>
          <EditStudent
            id={id}
            division={division?.id}
            name={name}
            DivisionsData={divisions}
            GroupsData={groups}
            group={group?.id}
          />
        </TableCell>
        <TableCell>
          <DeleteStudent id={id} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={10}
          padding={"none"}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <EnrollmentBody id={id} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default StRows;
