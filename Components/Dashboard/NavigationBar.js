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
import { BiLogOut } from "react-icons/bi";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closenav, navwidth } from "@/Lib/NavSlice";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { AddUser } from "./AddUser";
import { UsersList } from "./UsersLists";
import { ResetFilters } from "@/Lib/FiltersSlices/CoursesSlice";
import { ResetFiltersStu } from "@/Lib/FiltersSlices/StudentsSlice";
import { PiGraduationCapFill } from "react-icons/pi";
const NavigationBar = ({ admin, data, user, accounts }) => {
  const pathname = usePathname();
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
      text: "Graduates",
      path: "/Dashboard/Graduates",
    },
    {
      text: "Courses",
      path: "/Dashboard/Courses",
    },
  ];
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
        return router.push("/");
      });
  };
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
                  <PiGraduationCapFill
                    color={
                      pathname === "/Dashboard/Graduates" ? "#F6490D" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 3 && (
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
        {admin && <AddUser admin={admin} data={data} />}
        {admin && <UsersList admin={admin} user={user} accounts={accounts} />}
      </List>
      <List
        sx={{ position: "absolute", bottom: "5%", left: "0", width: "100%" }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={Logout}>
            <ListItemIcon>
              <BiLogOut size={"22px"} />
            </ListItemIcon>
            <ListItemText primary={"Logout"} sx={{ whiteSpace: "nowrap" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default NavigationBar;
