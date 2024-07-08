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
import BasicSelectDepartMent1 from "./Department1Selection";
import BasicSelectDepartMent2 from "./Department2Selection";
import BasicSelectDepartMentRegulation from "./AddDivision'sRegulation";
export const AddDivision = ({ data, regulations }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const [division, setDivision] = useState({
    name: "",
    hours: "",
    department: null,
    department2: null,
    private: false,
    group: false,
    regulation: null,
  });
  const AddDivisionMethod = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}divisions/`, {
      method: "POST",
      body: JSON.stringify(division),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        toast.success("Division Added");
        setDivision({
          name: "",
          hours: "",
          department: null,
          department2: null,
          private: false,
          group: false,
          regulation: null,
        });
        return handleClose();
      } else {
        const data = res.json();
        toast.error(data);
      }
    });
  };
  const handlechange = (e) => {
    const { name, value, checked, type } = e.target;
    setDivision({
      ...division,
      [name]: type === "checkbox" ? checked : value,
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
          <Box fontWeight={600}>Add Division</Box>
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
              value={division.name}
              onChange={handlechange}
            />
            <BasicSelectDepartMent1
              data={data}
              department={division.department}
              setdata={setDivision}
            />
            <BasicSelectDepartMent2
              data={data}
              department={division.department2}
              setdata={setDivision}
            />
            <BasicSelectDepartMentRegulation
              data={regulations}
              setdata={setDivision}
              regulation={division.regulation}
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
              placeholder={"Hours"}
              name="hours"
              value={division.hours}
              onChange={handlechange}
            />
            <FormGroup>
              <FormControlLabel
                sx={{
                  margin: "10px 0 0 0",
                  ".MuiFormControlLabel-label": {
                    fontWeight: 700,
                    fontSize: "14px",
                  },
                }}
                control={<Checkbox />}
                label="Private ?"
                name="private"
                onChange={handlechange}
                value={division.private}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                sx={{
                  margin: "10px 0 0 0",
                  ".MuiFormControlLabel-label": {
                    fontWeight: 700,
                    fontSize: "14px",
                  },
                }}
                control={<Checkbox />}
                label="Group ?"
                name="group"
                onChange={handlechange}
                value={division.group}
              />
            </FormGroup>
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
              onClick={AddDivisionMethod}
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
