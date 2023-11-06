"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StRows from "./StudentsRows";
import { Filters, order, sort } from "@/Lib/FiltersSlices/StudentsSlice";
import { useSelector } from "react-redux";
const STableComponent = ({ students, divisions, groups }) => {
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
          className="StableHead"
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
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
                // display: HideGpaColumn ? "none" : "table-cell",
              }}
            >
              Edit
            </TableCell>
            <TableCell
              align="left"
              sx={{
                whiteSpace: "nowrap",
                // display: HideGpaColumn ? "none" : "table-cell",
              }}
            >
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: "relative" }}>
          {students
            .filter((row) =>
              row.name.toLowerCase().includes(filtersOption.name)
            )
            .filter((row) =>
              filtersOption.level !== ""
                ? row.level === Number(filtersOption.level)
                : true
            )
            .filter((stu) => {
              if (filtersOption.division.length === 0) return true;
              if (
                filtersOption.division.includes(
                  stu.division ? stu.division.name : stu.group.name
                )
              )
                return true;
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
                SortType === "mark" &&
                (OrderType === "asc"
                  ? a.total_mark - b.total_mark
                  : b.total_mark - a.total_mark)
              );
            })
            .sort((a, b) => {
              return (
                SortType === "az" &&
                (OrderType === "asc"
                  ? a.name.localeCompare(b.name, ["ar"])
                  : b.name.localeCompare(a.name, ["ar"]))
              );
            })
            .sort((a, b) => {
              return (
                SortType === "hours" &&
                (OrderType === "asc"
                  ? a.passed_hours - b.passed_hours
                  : b.passed_hours - a.passed_hours)
              );
            })
            .sort((a, b) => {
              return (
                SortType === "gpa" &&
                (OrderType === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa)
              );
            })
            .filter((row, index) => {
              if (filtersOption.limit === "") return true;
              return index < Number(filtersOption.limit);
            })
            .map((row) => (
              <StRows
                key={row.name}
                id={row.id}
                level={row.level}
                division={row.division}
                group={row.group}
                gpa={row.gpa}
                passed_hours={row.passed_hours}
                name={row.name}
                enrollments={row.enrollments}
                mark={row.total_mark}
                groups={groups}
                divisions={divisions}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default STableComponent;
