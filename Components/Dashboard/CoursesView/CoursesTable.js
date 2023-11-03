"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CoursesRows from "./CoursesRows";
import { useSelector } from "react-redux";
import { sort, order, Filters } from "@/Lib/FiltersSlices/CoursesSlice";
const CoursesTable = ({ courses }) => {
  const SortType = useSelector(sort);
  const OrderType = useSelector(order);
  const filtersOption = useSelector(Filters);
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "100vw",
        maxHeight: "100%",
        paddingLeft: { xs: "0", sm: "65px" },
        boxSizing: "border-box",
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead
          sx={{
            backgroundColor: "#f9f9f9",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Code
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Credit Hours
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Level
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Semester
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses
            .filter((row) =>
              row.name.toLowerCase().includes(filtersOption.name)
            )
            .filter((row) =>
              row.code.toLowerCase().includes(filtersOption.code.toLowerCase())
            )
            .filter((row) =>
              filtersOption.level !== ""
                ? row.level === Number(filtersOption.level)
                : true
            )

            .filter((row) =>
              filtersOption.semester !== ""
                ? row.semester === Number(filtersOption.semester)
                : true
            )
            .filter((course) => {
              if (filtersOption.division.length === 0) return true;
              for (const division of course.divisions) {
                if (filtersOption.division.includes(division.name)) {
                  return true;
                }
              }
              return false;
            })
            .sort((a, b) => {
              return (
                SortType === "id" &&
                (OrderType === "asc" ? a.id - b.id : b.id - a.id)
              );
            })
            .sort((a, b) => {
              return (
                SortType === "hours" &&
                (OrderType === "asc"
                  ? a.credit_hours - b.credit_hours
                  : b.credit_hours - a.credit_hours)
              );
            })
            .sort((a, b) => {
              return (
                SortType === "level" &&
                (OrderType === "asc" ? a.level - b.level : b.level - a.level)
              );
            })
            .map((row, i) => (
              <CoursesRows {...row} key={row.name + row.id + i + row.code} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CoursesTable;
