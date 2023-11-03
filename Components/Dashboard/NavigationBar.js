"use client";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { CgListTree } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { HiUserAdd } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { RiFileUploadFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadCSV from "./UploadCsv";
import { closenav, navwidth } from "@/Lib/NavSlice";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NavigationBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navi = useRef();
  const fullwidthNav = useSelector(navwidth);
  const dispatch = useDispatch();
  const NavOptions = [
    {
      text: "Departments",
      path: "/Dashboard/Divisions",
    },
    {
      text: "Students",
      path: "/Dashboard/Students",
    },
    {
      text: "Courses",
      path: "/Dashboard/Courses",
    },
  ];
  return (
    <Box
      width={!fullwidthNav ? "65px" : "181px"}
      overflow="hidden"
      className="navooa"
      height={"100%"}
      ref={navi}
      display={{ xs: "none", sm: "block" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => dispatch(closenav())}>
          <RxDoubleArrowLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {NavOptions.map((opt, i) => (
          <ListItem key={opt.text} disablePadding>
            <ListItemButton LinkComponent={Link} href={opt.path}>
              <ListItemIcon>
                {i === 0 && (
                  <CgListTree
                    color={
                      pathname === "/Dashboard/Divisions" ? "#F6490D" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 1 && (
                  <IoIosPeople
                    color={
                      pathname === "/Dashboard/Students" ? "#F6490D" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 2 && (
                  <SiCoursera
                    color={
                      pathname === "/Dashboard/Courses" ? "#F6490D" : "#777"
                    }
                    size={"22px"}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={opt.text} sx={{ whiteSpace: "nowrap" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <HiUserAdd size={"22px"} />
            </ListItemIcon>
            <ListItemText primary={"Add User"} sx={{ whiteSpace: "nowrap" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
              <RiFileUploadFill size={"22px"} />
            </ListItemIcon>
            <ListItemText
              primary={"Upload Excel"}
              sx={{ whiteSpace: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{ position: "absolute", bottom: "5%", left: "0", width: "100%" }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BiLogOut size={"22px"} />
            </ListItemIcon>
            <ListItemText primary={"Logout"} sx={{ whiteSpace: "nowrap" }} />
          </ListItemButton>
        </ListItem>
      </List>
      <UploadCSV open={open} handleClose={handleClose} />
    </Box>
  );
};
export default NavigationBar;
