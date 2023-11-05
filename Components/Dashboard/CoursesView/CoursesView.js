"use client";
import { Box, Stack } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import CoursesTable from "./CoursesTable";
import CoursesFilters from "./CoursesFilter";
import UploadCSV from "../UploadCsv";
const CoursesView = ({ courses, admin }) => {
  return (
    <Box height={{ xs: "calc(100vh - 120px)", sm: "calc(100vh - 64px)" }}>
      <Stack direction={"column"} width="100%" maxHeight={"100%"}>
        <Stack
          paddingX={"0.5rem"}
          paddingY={"1rem"}
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          marginLeft={{ xs: "0", sm: "65px" }}
        >
          <Stack direction={"row"} alignItems="center">
            <CgMenu color="#F6490D" />
            <Box
              fontWeight={600}
              fontSize={{ xs: "14px", sm: "16px" }}
              marginLeft={"8px"}
            >
              Courses
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={{ xs: "4px", sm: "10px" }}
          >
            {admin && <UploadCSV />}
            <CoursesFilters data={courses} />
          </Stack>
        </Stack>
        <CoursesTable courses={courses} />
      </Stack>
    </Box>
  );
};
export default CoursesView;
