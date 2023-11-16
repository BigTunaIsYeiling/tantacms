"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { CgListTree } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PiGraduationCapFill } from "react-icons/pi";
const BottomNavBar = () => {
  const [value, setValue] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setValue((prev) => pathname);
    // eslint-disable-next-line
  });
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
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", sm: "none" },
        zIndex: 100,
      }}
      elevation={4}
    >
      <BottomNavigation value={value}>
        {NavOptions.map((opt, i) => {
          return (
            <BottomNavigationAction
              LinkComponent={Link}
              href={opt.path}
              value={opt.path}
              sx={{
                "&.Mui-selected": {
                  color: "#F6490D",
                },
              }}
              label={opt.text}
              icon={
                (i === 0 && <CgListTree size={"22px"} />) ||
                (i === 1 && <IoIosPeople size={"22px"} />) ||
                (i === 2 && <PiGraduationCapFill size={"22px"} />) ||
                (i === 3 && <SiCoursera size={"22px"} />)
              }
              key={i}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};
export default BottomNavBar;
