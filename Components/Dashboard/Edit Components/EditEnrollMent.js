"use client";
import { Box, Button, Dialog, IconButton, Stack } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiCloseLine, RiFileEditFill } from "react-icons/ri";
export const EditEnrollment = ({ id, points, grade, mark, fullMark }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [Data, setData] = useState({
    points,
    grade,
    mark,
  });
  const handleInput = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const handleUpdate = async () => {
    if (Number(Data.mark) > fullMark) {
      return toast.error("Mark cannot be greater than full mark");
    }
    await fetch(`http://127.0.0.1:8000/enrollments/${id}/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
      body: JSON.stringify(Data),
    }).then((res) => {
      if (res.ok) {
        handleClose();
        toast.success("Enrollment Updated successfully");
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
          <Box fontWeight={600}>Edit Enrollment</Box>
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
              placeholder={"Mark"}
              name="mark"
              onChange={handleInput}
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
              placeholder={"Grade"}
              name="grade"
              onChange={handleInput}
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
              placeholder={"Points"}
              name="points"
              onChange={handleInput}
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
