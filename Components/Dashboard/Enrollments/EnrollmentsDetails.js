import { Box, Stack } from "@mui/material";
const EnrollmentsDetails = ({ student }) => {
  return (
    <Stack direction={"column"}>
      <Stack direction={"column"} spacing={2}>
        <Box fontWeight={500} fontSize={"15px"}>
          Name : {student.name}
        </Box>
        <Box fontWeight={500} fontSize={"15px"}>
          Regulation : {student.regulation}
        </Box>
        <Box fontWeight={500} fontSize={"15px"}>
          Group : {student.group}
        </Box>
        {student.division && (
          <Box fontWeight={500} fontSize={"15px"}>
            Division : {student.division}
          </Box>
        )}
        {student.department_1 && (
          <Box fontWeight={500} fontSize={"15px"}>
            Department {student.department_1 && student.department_2 && "1"} :
            {student.department_1}
          </Box>
        )}
        {student.department_2 && (
          <Box fontWeight={500} fontSize={"15px"}>
            Department {student.department_1 && student.department_2 && "2"} :
            {student.department_2}
          </Box>
        )}
        <Box fontWeight={500} fontSize={"15px"}>
          Level : {student.level}
        </Box>
        <Box fontWeight={500} fontSize={"15px"}>
          Registered Hours: : {student.registered_hours}
        </Box>
        <Box fontWeight={500} fontSize={"15px"}>
          Passed Hours: : {student.passed_hours}
        </Box>
        <Box fontWeight={500} fontSize={"15px"}>
          GPA : {Number(student.gpa).toFixed(4)}
        </Box>
        <Box fontWeight={500} fontSize={"15px"}>
          Total Mark : {student.total_mark}
        </Box>
      </Stack>
    </Stack>
  );
};

export default EnrollmentsDetails;
