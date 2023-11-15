import { TableCell } from "@mui/material";
export const EnrollmentRows = ({
  mark,
  course,
  level,
  semester,
  full_mark,
  grade,
  points,
  month,
}) => {
  return (
    <>
      <TableCell component="th" scope="row">
        {course.name}
      </TableCell>
      <TableCell align="right">{level}</TableCell>
      <TableCell align="right">{semester === 3 ? "SC" : semester}</TableCell>
      <TableCell align="right">{mark + "/" + full_mark}</TableCell>
      <TableCell align="right">{grade}</TableCell>
      <TableCell align="right">{points.toFixed(4)}</TableCell>
      <TableCell align="right">{month}</TableCell>
    </>
  );
};
