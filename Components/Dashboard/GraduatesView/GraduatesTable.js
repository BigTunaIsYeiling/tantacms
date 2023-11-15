import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { GraduateRow } from "./GraduatesRows";
export const GraduatesTable = ({ students }) => {
  // const SortType = useSelector(sort);
  // const OrderType = useSelector(order);
  // const filtersOption = useSelector(Filters);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const [studentsLength, setStudentsLenght] = React.useState(students.length);
  // React.useEffect(() => {
  //   const length = students
  //     .filter((row) => row.name.toLowerCase().includes(filtersOption.name))
  //     .filter((row) =>
  //       filtersOption.level !== ""
  //         ? row.level === Number(filtersOption.level)
  //         : true
  //     )
  //     .filter((stu) => {
  //       if (filtersOption.division.length === 0) return true;
  //       if (
  //         filtersOption.division.includes(
  //           stu.division ? stu.division.name : stu.group.name
  //         )
  //       )
  //         return true;
  //       return false;
  //     })
  //     .sort((a, b) => {
  //       return (
  //         SortType === "id" && (OrderType === "asc" ? a.id - b.id : b.id - a.id)
  //       );
  //     })

  //     .sort((a, b) => {
  //       return (
  //         SortType === "mark" &&
  //         (OrderType === "asc"
  //           ? a.total_mark - b.total_mark
  //           : b.total_mark - a.total_mark)
  //       );
  //     })
  //     .sort((a, b) => {
  //       return (
  //         SortType === "az" &&
  //         (OrderType === "asc"
  //           ? a.name.localeCompare(b.name, ["ar"])
  //           : b.name.localeCompare(a.name, ["ar"]))
  //       );
  //     })
  //     .sort((a, b) => {
  //       return (
  //         SortType === "hours" &&
  //         (OrderType === "asc"
  //           ? a.passed_hours - b.passed_hours
  //           : b.passed_hours - a.passed_hours)
  //       );
  //     })
  //     .sort((a, b) => {
  //       return (
  //         SortType === "gpa" &&
  //         (OrderType === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa)
  //       );
  //     })
  //     .filter((row, index) => {
  //       if (filtersOption.limit === "") return true;
  //       return index < Number(filtersOption.limit);
  //     }).length;
  //   setStudentsLenght(length);
  // }, [filtersOption]);
  return (
    <Paper
      sx={{
        maxWidth: "100vw",
        paddingLeft: { xs: "0", sm: "65px" },
        boxSizing: "border-box",
        flexGrow: 1,
      }}
    >
      <TableContainer sx={{ maxHeight: 560 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead
          // sx={{
          //   backgroundColor: "#f9f9f9",
          //   position: "sticky",
          //   top: 0,
          //   zIndex: 1,
          // }}
          // className="StableHead"
          >
            <TableRow>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  // display: HideidColumn ? "none" : "table-cell",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                Enrollments
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: "nowrap",
                  // display: HidenameColumn ? "none" : "table-cell",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: "nowrap",
                  // display: HidedivisionColumn ? "none" : "table-cell",
                }}
              >
                Divison
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: "nowrap",
                  // display: HideLevelColumn ? "none" : "table-cell",
                }}
              >
                Level
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: "nowrap",
                  // display: HideHoursColumn ? "none" : "table-cell",
                }}
              >
                Passed Hours
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: "nowrap",
                  // display: HideGpaColumn ? "none" : "table-cell",
                }}
              >
                GPA
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: "nowrap",
                  // display: HideGpaColumn ? "none" : "table-cell",
                }}
              >
                Total Mark
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            {students
              .filter((row, index) => {
                return (
                  index >= page * rowsPerPage &&
                  index < page * rowsPerPage + rowsPerPage
                );
              })
              .map((row, index) => (
                <GraduateRow
                  key={row.name}
                  id={row.id}
                  level={row.level}
                  division={row.division}
                  group={row.group}
                  gpa={row.gpa}
                  passed_hours={row.passed_hours}
                  name={row.name}
                  mark={row.total_mark}
                  index={index}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
