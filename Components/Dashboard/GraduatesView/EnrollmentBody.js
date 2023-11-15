"use client";
import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useSWR from "swr";
import { EnrollmentRows } from "./Enrollments";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
export const EnrollmentBody = ({ id }) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetcher = async (url) => {
    await delay(500);
    return fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => res.json());
  };
  const { data, isLoading, mutate } = useSWR(
    `http://127.0.0.1:8000/students/${id}/`,
    fetcher
  );
  if (isLoading || !data) {
    return (
      <>
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </>
    );
  }
  console.log(data);
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
              Month
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.enrollments.map((enrollment, i) => {
            return (
              // <motion.div
              // >
              <TableRow
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={i}
              >
                <EnrollmentRows
                  {...enrollment}
                  key={enrollment.id}
                  StudentId={id}
                  revalidate={mutate}
                />
              </TableRow>
              // {/* </motion.div> */}
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};
