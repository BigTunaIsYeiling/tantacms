"use client";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
export const AddRegulation = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const [Regulation, setRegulation] = useState({
    name: "",
    max_gpa: "",
  });
  const AddRegulationMethod = async () => {
    await fetch("http://127.0.0.1:8000/regulations/", {
      method: "POST",
      body: JSON.stringify({
        name: Regulation.name,
        max_gpa: Number(Regulation.max_gpa),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        toast.success("Regulation Added");
        setRegulation({
          name: "",
          max_gpa: "",
        });
        return handleClose();
      } else {
        const data = res.json();
        toast.error(data);
      }
    });
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setRegulation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Tooltip title="Add Division" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"}>
          <Box fontWeight={600}>Add Regulation</Box>
          <Stack direction={"column"} spacing={"2rem"} marginTop={"1rem"}>
            <Box
              component={"input"}
              autoCorrect={"false"}
              paddingY={"10px"}
              paddingX="8px"
              sx={{
                outline: "0",
                border: "0",
                ":focus": {
                  boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                borderRadius: "3px",
                fontWeight: 400,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              placeholder={"Name"}
              name="name"
              value={Regulation.name}
              onChange={handlechange}
            />
            <Box
              component={"input"}
              autoCorrect={"false"}
              paddingY={"10px"}
              paddingX="8px"
              sx={{
                outline: "0",
                border: "0",
                ":focus": {
                  boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                borderRadius: "3px",
                fontWeight: 400,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              placeholder={"GPA"}
              name="max_gpa"
              value={Regulation.max_gpa}
              onChange={handlechange}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                "&.MuiButton-root": {
                  fontWeight: 600,
                  textTransform: "none",
                  backgroundColor: "#F6490D",
                },
                alignSelf: "flex-end",
              }}
              onClick={AddRegulationMethod}
            >
              Confirm
            </Button>
          </Stack>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "1%", left: "1%" }}
          >
            <RiCloseLine />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};
