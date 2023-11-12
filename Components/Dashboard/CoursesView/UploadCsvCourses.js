"use client";
import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { RiCloseLine } from "react-icons/ri";
import { TiUploadOutline } from "react-icons/ti";
import {
  MdOutlineDriveFolderUpload,
  MdDeleteOutline,
  MdDone,
} from "react-icons/md";
import { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const UploadFileAction = () => {
    const formData = new FormData();
    formData.append("file", file);
    const toastId = toast.loading("Uploading.....", {
      position: "top-center",
    });
    fetch("http://127.0.0.1:8000/data/upload_courses/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        toast.dismiss(toastId);
        toast.success("UpLoaded Succesfully", {
          position: "top-center",
        });
        router.refresh();
        setFile(null);
        return handleClose();
      }
    });
  };
  return (
    <>
      <Tooltip title="Upload CSV">
        <IconButton onClick={handleClickOpen}>
          <TiUploadOutline color="black" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box padding={"3rem"} sx={{ position: "relative" }}>
          <Stack direction={"column"} alignItems="center">
            <Box fontSize={"22px"} fontWeight={600} whiteSpace="nowrap">
              Upload your document
            </Box>
            <Box
              fontSize={"12px"}
              fontWeight={300}
              marginTop="5px"
              color={"#777"}
            >
              in CSV, XLSX, XLS
            </Box>
            {!file && (
              <Button
                component={"label"}
                startIcon={<MdOutlineDriveFolderUpload />}
                sx={{
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#fb5c25",
                  ":hover": {
                    backgroundColor: "#fb5c25",
                  },
                  width: "100%",
                  marginTop: "1rem",
                  "&.MuiButton-root": {
                    fontWeight: 600,
                  },
                  paddingY: "0.6rem",
                  "&.Mui-disabled": {
                    color: "white",
                  },
                }}
              >
                {"Upload"}
                <input
                  hidden
                  type={"file"}
                  onChange={(e) => setFile(e.target.files[0])}
                  accept=".xlsx, .xls, .csv"
                />
              </Button>
            )}
            {file && (
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"space-between"}
                width={"100%"}
                marginY="1rem"
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
                  borderRadius: "10px",
                  backgroundColor: "whitesmoke",
                }}
                paddingY="16px"
              >
                <Box fontSize={"13px"} fontWeight={300} marginLeft="5px">
                  {file.name.substring(0, 22) + ".csv"}
                </Box>
                <Box fontSize={"13px"} fontWeight={300} marginRight="5px">
                  {file.size.toString().substring(0, 2) + ".kb"}
                </Box>
              </Stack>
            )}
            {file && (
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"space-between"}
                width="100%"
              >
                <Button
                  color="error"
                  variant="contained"
                  disableElevation
                  sx={{
                    "&.MuiButton-root": {
                      fontWeight: 600,
                      textTransform: "none",
                    },
                  }}
                  onClick={() => setFile(null)}
                  startIcon={<MdDeleteOutline />}
                >
                  Delete
                </Button>
                <Button
                  color="success"
                  variant="contained"
                  disableElevation
                  sx={{
                    "&.MuiButton-root": {
                      fontWeight: 600,
                      textTransform: "none",
                    },
                  }}
                  startIcon={<MdDone />}
                  onClick={UploadFileAction}
                >
                  Accept
                </Button>
              </Stack>
            )}
          </Stack>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "1%", right: "1%" }}
          >
            <RiCloseLine />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};
export default UploadCSV;
