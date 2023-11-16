"use client";
import { Box, Stack } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import { StudentsFilters } from "./StudentsFilter";
import { NewStudentsTable } from "@/Components/Dashboard/StudentsView/StudentsTable";
import UploadCSV from "./UploadCsvStudents";
const StudentsView = ({ students, admin, divisions, groups }) => {
  return (
    <Box height={{ xs: "calc(100vh - 120px)", sm: "calc(100vh - 64px)" }}>
      <Stack direction={"column"} width="100%" height={"100%"}>
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
              Students
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={{ xs: "4px", sm: "10px" }}
          >
            {admin && <UploadCSV />}
            <StudentsFilters data={students} />
          </Stack>
        </Stack>
        {/* <STableComponent
          students={students}
          divisions={divisions}
          groups={groups}
        /> */}
        <NewStudentsTable
          students={students}
          divisions={divisions}
          groups={groups}
        />
      </Stack>
    </Box>
  );
};
export default StudentsView;
