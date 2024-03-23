"use client";
import { Stack } from "@mui/material";
import STudentDetail from "./Detail";
import { DetailTable } from "./DetailTable";
const EnrollmentsDetails = ({ student }) => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={"2rem"}
    >
      <Stack alignItems={"center"} justifyContent={"center"}>
        <DetailTable {...student} />
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"4rem"}
      >
        {student.details.map((detail) => {
          return (
            <STudentDetail
              semester={detail}
              key={detail.level.toString() + detail.semester}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default EnrollmentsDetails;
