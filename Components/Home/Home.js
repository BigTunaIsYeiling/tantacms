"use client";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { HiOutlineDatabase } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
export default function HomePage() {
  const [showpass, setpassinp] = useState(false);
  return (
    <Box>
      <Stack
        justifyContent={"center"}
        alignItems="center"
        paddingTop={{ xs: "0rem", sm: "3rem" }}
      >
        <Stack
          padding={{ xs: "0rem 3rem 0rem 3rem", sm: "1rem 3rem 2rem 3rem" }}
          direction={"column"}
          bgcolor="transparent"
          maxWidth={{ xs: "82%", sm: "50%", md: "30%" }}
          position="relative"
          borderRadius={"2%"}
        >
          <Stack alignSelf={"center"} direction={"row"} alignItems="center">
            <Box component={HiOutlineDatabase} size="25px" color={"#fb5c25"} />
            <Box
              component={"p"}
              fontWeight={700}
              fontSize="30px"
              marginLeft={"2px"}
            >
              Ultra
              <Box component={"span"} fontWeight={500} fontSize="17px">
                Micro
              </Box>
              .
            </Box>
          </Stack>
          <Box
            alignSelf={"center "}
            fontSize="23px"
            fontWeight={500}
            marginTop="2rem"
          >
            Welcome Back!
          </Box>
          <Box
            alignSelf={"center "}
            fontSize="16px"
            fontWeight={400}
            marginTop="8px"
            color="#777"
          >
            Log in to access your account.
          </Box>
          <Stack direction={"column"} spacing="20px" marginTop={"3rem"}>
            <Stack direction={"column"} spacing="10px">
              <Box fontSize="14px" fontWeight={600}>
                Email
              </Box>
              <Box
                component={"input"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  backgroundColor: "whitesmoke",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                }}
                placeholder="e.g.mah@gmail.com"
              />
            </Stack>
            <Stack direction={"column"} spacing="10px" position={"relative"}>
              <Box
                component={IconButton}
                sx={{ position: "absolute", right: 2, bottom: "5%" }}
                size="small"
                onClick={() => setpassinp((prev) => !prev)}
              >
                {!showpass ? (
                  <Box component={VscEye} color="black" />
                ) : (
                  <Box component={VscEyeClosed} color="black" />
                )}
              </Box>
              <Box fontSize="14px" fontWeight={600}>
                Password
              </Box>
              <Box
                component={"input"}
                paddingY={"10px"}
                type={showpass ? "text" : "password"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  backgroundColor: "whitesmoke",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                }}
                placeholder="e.g.******"
              />
            </Stack>
          </Stack>
          <Button
            component={Link}
            href="/Dashboard/Divisions"
            sx={{
              fontWeight: "600",
              textTransform: "none",
              color: "white",
              backgroundColor: "#fb5c25",
              ":hover": {
                backgroundColor: "#fb5c25",
              },
              marginTop: "3rem",
            }}
          >
            Log in
          </Button>
          <Box position={"relative"} marginTop={"2rem"}>
            <Box
              fontSize="14px"
              fontWeight={500}
              lineHeight="1.5rem"
              color="#777"
              textAlign={"center"}
            >
              Developed by group of computer science and data science students.
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
