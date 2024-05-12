"use client";
import { TableCell, TableRow } from "@mui/material";
export default function DepartmentsRows({ id, name }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      {/* <TableCell align="left">{max_gpa}</TableCell>
      <TableCell align="left">
        <EditRegulation id={id} name={name} max_gpa={max_gpa} />
      </TableCell> */}
    </TableRow>
  );
}
