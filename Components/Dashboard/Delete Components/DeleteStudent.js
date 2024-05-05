"use client";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Cookies from "js-cookie";
import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const DeleteStudent = ({ id }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const handleDelete = async () => {
    await fetch(`https://ultramacro.onrender.com/students/${id}/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        handleClose();
        toast.success("User Deleted Successfully");
        return router.refresh();
      } else {
        return res.json();
      }
    });
  };
  return (
    <>
      <IconButton size="small" onClick={handleClickOpen}>
        <RiDeleteBin2Line color="red" />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle textAlign={"left"}>{"Confirm deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ alignSelf: "flex-end" }}>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleDelete}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
