import { TableCell, TableRow } from "@mui/material";
import { EditEnrollment } from "../Edit Components/EditEnrollMent";
import { DeleteEnrollment } from "../Delete Components/DeleteEnrollment";
export const EnrollmentRows = ({
  id,
  mark,
  course,
  level,
  semester,
  full_mark,
  grade,
  points,
  StudentId,
  revalidate,
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
      <TableCell align="right">{points}</TableCell>
      <TableCell align="right">
        <EditEnrollment
          id={id}
          fullMark={full_mark}
          grade={grade}
          points={points}
          mark={mark}
          StudentId={StudentId}
          revalidate={revalidate}
        />
      </TableCell>
      <TableCell align="left">
        <DeleteEnrollment id={id} revalidate={revalidate} />
      </TableCell>
    </>
  );
};
