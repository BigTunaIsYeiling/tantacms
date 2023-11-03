"use client";
import { TableCell, TableRow } from "@mui/material";
export default function CoursesRows({
  id,
  name,
  code,
  credit_hours,
  level,
  semester,
}) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{code}</TableCell>
      <TableCell align="left">{credit_hours}</TableCell>
      <TableCell align="left">{level}</TableCell>
      <TableCell align="left">{semester}</TableCell>
    </TableRow>
  );
}
