"use client";
import { Box, Button, Dialog, IconButton, Stack } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiCloseLine, RiFileEditFill } from "react-icons/ri";
import BasicSelect from "./DivisionsSelection";
import BasicSelectGroup from "./GroupsSelection";
export const EditStudent = ({
  id,
  name,
  group,
  division,
  GroupsData,
  DivisionsData,
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState({
    name,
    group,
    division,
  });
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const handleUpdate = async () => {
    await fetch(`https://ultramacro.onrender.com/students/${id}/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
      body: JSON.stringify({
        name: data.name,
        group: data.group ? data.group : null,
        division: data.division ? data.division : null,
      }),
    }).then((res) => {
      if (res.ok) {
        handleClose();
        toast.success("Student Updated successfully");
        return router.refresh();
      } else {
        return res.json();
      }
    });
  };
  return (
    <>
      <IconButton onClick={handleClickOpen} size="small">
        <RiFileEditFill color="green" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"}>
          <Box fontWeight={600}>Edit Student</Box>
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
                direction: "rtl",
              }}
              placeholder={"name"}
              name="name"
              value={data.name}
              onChange={handleInput}
            />
            {division && (
              <BasicSelect
                data={DivisionsData}
                setdata={setData}
                division={data.division}
              />
            )}
            {group && (
              <BasicSelectGroup
                data={GroupsData}
                setdata={setData}
                group={data.group}
              />
            )}
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
              onClick={handleUpdate}
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
