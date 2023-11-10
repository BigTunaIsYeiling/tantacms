"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useSWR from "swr";
import { EnrollmentRows } from "./Enrollments";
import Cookies from "js-cookie";
export const EnrollmentBody = ({ id }) => {
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => res.json());
  const { data, isLoading, mutate } = useSWR(
    `http://127.0.0.1:8000/students/${id}/`,
    fetcher
  );
  return (
    <Box>
      <Table size="small">
        <TableHead sx={{ backgroundColor: "#F6490D" }}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Level
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Semester
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Mark
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Grade
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Points
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Edit
            </TableCell>
            <TableCell align="left" sx={{ color: "white" }}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            !isLoading &&
            data?.enrollments.length > 0 &&
            data.enrollments.map((enrollment) => {
              return (
                <EnrollmentRows
                  {...enrollment}
                  key={enrollment.id}
                  StudentId={id}
                  revalidate={mutate}
                />
              );
            })}
        </TableBody>
      </Table>
    </Box>
  );
};
