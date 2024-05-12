"use client";
import {
  Box,
  Button,
  Dialog,
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
export const AddDepartment = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const [department, setdepartment] = useState({
    name: "",
  });
  const AddDepartmentMethod = async () => {
    await fetch("https://ultramacro.onrender.com/departments/", {
      method: "POST",
      body: JSON.stringify({
        name: department.name,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        toast.success("Department Added");
        setdepartment({
          name: "",
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
    setdepartment((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Tooltip title="Add Department" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"}>
          <Box fontWeight={600}>Add Department</Box>
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
              value={department.name}
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
              onClick={AddDepartmentMethod}
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
