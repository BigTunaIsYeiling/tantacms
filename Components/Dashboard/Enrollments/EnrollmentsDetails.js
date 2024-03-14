"use client";
import { Box, Stack } from "@mui/material";
import { FaUser } from "react-icons/fa";
const EnrollmentsDetails = ({ student }) => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          width: "35%",
          backgroundColor: "whitesmoke",
          height: "150px",
          borderRadius: "5px",
        }}
        spacing={"1rem"}
      >
        <Box component={FaUser} color={"white"} size={"130px"} />
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          height={"100%"}
          paddingY={"1rem"}
          alignItems={"flex-end"}
          paddingRight={"1rem"}
        >
          <Stack spacing={"5px"}>
            <Box fontWeight={600} fontSize={"27px"} textAlign={"right"}>
              {student.name}
            </Box>
            {!student.graduate ? (
              <Box fontWeight={500} textAlign={"right"} fontSize={"18px"}>
                {student.level == 1 && "مستوى اول"}
                {student.level == 2 && "مستوى ثاني"}
                {student.level == 3 && "مستوى ثالث"}
                {student.level == 4 && "مستوى رابع"}
              </Box>
            ) : (
              "خريج"
            )}
          </Stack>
          <Box fontWeight={500} fontSize={"14px"}>
            {student.department_1 ? student.division : student.group}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EnrollmentsDetails;
