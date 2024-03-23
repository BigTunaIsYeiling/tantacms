import { Box, Stack } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import EnrollmentsDetails from "./EnrollmentsDetails";

export const EnrollmentsView = ({ details }) => {
  return (
    <Box height={"100%"} sx={{ overflowY: "auto", overflowX: "hidden" }}>
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
              Details
            </Box>
          </Stack>
        </Stack>
        <Box marginTop={3}>
          <EnrollmentsDetails student={details} />
        </Box>
      </Stack>
    </Box>
  );
};
