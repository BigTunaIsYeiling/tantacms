import { TableCell, TableRow } from "@mui/material";
import { EditEnrollment } from "../Edit Components/EditEnrollMent";
import { DeleteEnrollment } from "../Delete Components/DeleteEnrollment";
export const EnrollmentsRow = ({
  id,
  course,
  mark,
  full_mark,
  grade,
  points,
}) => {
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {course.name}
        </TableCell>
        <TableCell align="left">{course.credit_hours}</TableCell>
        <TableCell align="right">{mark + "/" + full_mark}</TableCell>
        <TableCell align="center">{grade}</TableCell>
        <TableCell align="left">{points}</TableCell>
        <TableCell align="right">
          <EditEnrollment
            id={id}
            mark={mark}
            fullMark={full_mark}
            grade={grade}
            points={points}
          />
        </TableCell>
        <TableCell align="right">
          <DeleteEnrollment id={id} />
        </TableCell>
      </TableRow>
    </>
  );
};
