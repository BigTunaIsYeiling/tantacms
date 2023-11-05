"use client";
import {
  Box,
  Dialog,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { ImUsers } from "react-icons/im";
import { AccountItem } from "./AccountItem";
export const UsersList = ({ admin, user, accounts }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const usersAccounts = accounts.filter((User) => User.id !== user.id);
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          " .MuiListItemText-root": {
            flex: "0 auto",
          },
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ListItemButton
          disabled={!admin}
          onClick={handleClickOpen}
          sx={{ display: !admin && "none" }}
        >
          <ListItemIcon>
            <ImUsers size={"22px"} />
          </ListItemIcon>
          <ListItemText primary={"Users"} sx={{ whiteSpace: "nowrap" }} />
        </ListItemButton>
      </ListItem>
      <MenuItem
        disabled={!admin}
        sx={{ display: { xs: !admin ? "none" : "flex", sm: "none" } }}
        onClick={handleClickOpen}
      >
        <ListItemIcon>
          <ImUsers fontSize={"25px"} />
        </ListItemIcon>
        <ListItemText>
          Users
          <Box fontSize={"0.75rem"}>Admins only</Box>
        </ListItemText>
      </MenuItem>

      <Dialog open={open} onClose={handleClose}>
        <Stack
          position={"relative"}
          sx={{ direction: "rtl", boxSizing: "border-box" }}
          width={"100%"}
          padding={"20px"}
          spacing={3}
        >
          <Box alignSelf={"center "} fontSize="21px" fontWeight={400}>
            Users list
          </Box>
          <Stack direction={"column"} spacing={2}>
            {usersAccounts && usersAccounts.length > 0
              ? usersAccounts.map((item) => (
                  <AccountItem key={item.id} {...item} />
                ))
              : "No Other Users"}
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};
