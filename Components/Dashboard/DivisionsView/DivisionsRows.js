"use client"
import { TableCell, TableRow } from "@mui/material";
export default function DivisionsRows({ id, name, hours }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{hours}</TableCell>
    </TableRow>
  );
}
