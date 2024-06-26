"use client";
import { TableCell, TableRow } from "@mui/material";
export default function DivisionsRows({
  id,
  name,
  hours,
  department_1,
  department_2,
  group,
  special,
  regulation,
}) {
  const GetCondition = () => {
    if (group) return "Group";
    if (special) return "Private";
    return "Public Department";
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">
        {department_1 ? department_1.name : ""}
        {department_2 ? " / " + department_2.name : ""}
      </TableCell>
      <TableCell align="left">{hours}</TableCell>
      <TableCell align="left">{GetCondition()}</TableCell>
      <TableCell align="left">{regulation.name}</TableCell>
    </TableRow>
  );
}
