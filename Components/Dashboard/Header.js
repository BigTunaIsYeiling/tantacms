"use client";
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { CgMenuGridR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineDatabase } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";
import { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { navwidth, opennav } from "@/Lib/NavSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ResetFilters } from "@/Lib/FiltersSlices/CoursesSlice";
import { ResetFiltersStu } from "@/Lib/FiltersSlices/StudentsSlice";
import { ResetFiltersgrad } from "@/Lib/FiltersSlices/GraduatesSlice";
const Header = () => {
  const fullwidthNav = useSelector(navwidth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [opend, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosed = () => {
    setOpen(false);
  };
  const router = useRouter();
  const Logout = async () => {
    await fetch("http://127.0.0.1:8000/accounts/logout/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    })
      .then(() => {
        Cookies.remove("key");
        Cookies.remove("accessToken");
      })
      .finally(() => {
        dispatch(ResetFilters());
        dispatch(ResetFiltersStu());
        dispatch(ResetFiltersgrad());
        return router.push("/");
      });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 0,
        marginLeft: fullwidthNav ? "181px" : "0px",
        transition: "0.25s",
        position: "relative",
        zIndex: 100,
      }}
    >
      <AppBar position="relative" sx={{ backgroundColor: "#F6490D" }}>
        <Toolbar>
          <Box
            component={HiOutlineDatabase}
            size="25px"
            color={"white"}
            sx={{ display: { xs: "block", sm: "none" } }}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: { xs: "none", sm: fullwidthNav ? "none" : "block" },
            }}
            onClick={() => dispatch(opennav())}
          >
            <CgMenuGridR />
          </IconButton>
          <Box
            component={"p"}
            fontWeight={700}
            fontSize="20px"
            marginLeft={"2px"}
            flexGrow={1}
          >
            U
            <Box component={"span"} fontWeight={500} fontSize="17px">
              Micro
            </Box>
            .
          </Box>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <FaUserCog color="white" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuItem onClick={Logout}>
              <ListItemIcon>
                <BiLogOut fontSize={"25px"} />
              </ListItemIcon>
              <ListItemText>Log Out</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
