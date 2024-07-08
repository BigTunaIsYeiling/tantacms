import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
} from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiUserAdd } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Scelection from "./UserDivisionsSelection";
export const AddUser = ({ admin, data }) => {
  const [showpass, setpassinp] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      is_admin: false,
      divisions: [],
    });
  };
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    is_admin: false,
    divisions: [],
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const router = useRouter();
  const AddUserMethod = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}accounts/`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        toast.success("Added Succesfully");
        return handleClose();
      } else {
        const data = res.json();
        toast.error(data);
      }
    });
  };
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
          sx={{ display: !admin && "none" }}
          onClick={handleClickOpen}
        >
          <ListItemIcon>
            <HiUserAdd size={"22px"} />
          </ListItemIcon>
          <ListItemText primary={"Add User"} sx={{ whiteSpace: "nowrap" }} />
        </ListItemButton>
      </ListItem>
      <MenuItem
        disabled={!admin}
        sx={{ display: { xs: !admin ? "none" : "flex", sm: "none" } }}
        onClick={handleClickOpen}
      >
        <ListItemIcon>
          <HiUserAdd fontSize={"25px"} />
        </ListItemIcon>
        <ListItemText>
          Add User
          <Box fontSize={"0.75rem"}>admin only</Box>
        </ListItemText>
      </MenuItem>
      <Dialog open={open} onClose={handleClose}>
        <Stack padding={"1rem 3rem 2rem 3rem"} position={"relative"}>
          <Box
            alignSelf={"center "}
            fontSize="16px"
            fontWeight={600}
            marginTop="4px"
            color="#777"
          >
            Add User
          </Box>
          <Stack direction={"column"} spacing="20px" marginTop={"2rem"}>
            <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
              <Stack
                direction={"column"}
                spacing="10px"
                alignItems={"flex-start"}
              >
                <Box fontSize="14px" fontWeight={700}>
                  First Name
                </Box>
                <Box
                  component={"input"}
                  paddingY={"10px"}
                  paddingX="8px"
                  sx={{
                    outline: "0",
                    border: "0",
                    backgroundColor: "whitesmoke",
                    ":focus": {
                      boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                    },
                    borderRadius: "3px",
                    fontWeight: 400,
                    width: "100%",
                  }}
                  name="first_name"
                  onChange={handleChange}
                  value={user.first_name}
                />
              </Stack>
              <Stack
                direction={"column"}
                spacing="10px"
                alignItems={"flex-start"}
              >
                <Box fontSize="14px" fontWeight={700}>
                  Last Name
                </Box>
                <Box
                  component={"input"}
                  paddingY={"10px"}
                  paddingX="8px"
                  sx={{
                    outline: "0",
                    border: "0",
                    backgroundColor: "whitesmoke",
                    ":focus": {
                      boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                    },
                    borderRadius: "3px",
                    fontWeight: 400,
                    width: "100%",
                  }}
                  name="last_name"
                  onChange={handleChange}
                  value={user.last_name}
                />
              </Stack>
            </Stack>
            <Stack
              direction={"column"}
              spacing="10px"
              alignItems={"flex-start"}
            >
              <Box fontSize="14px" fontWeight={700}>
                Email
              </Box>
              <Box
                component={"input"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  backgroundColor: "whitesmoke",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  width: "100%",
                }}
                name="email"
                onChange={handleChange}
                value={user.email}
              />
            </Stack>
            <Stack
              direction={"column"}
              spacing="10px"
              position={"relative"}
              alignItems={"flex-start"}
            >
              <Box
                component={IconButton}
                sx={{ position: "absolute", right: 5, bottom: "5%" }}
                size="small"
                onClick={() => setpassinp((prev) => !prev)}
              >
                {!showpass ? (
                  <Box component={VscEye} color="black" />
                ) : (
                  <Box component={VscEyeClosed} color="black" />
                )}
              </Box>
              <Box fontSize="14px" fontWeight={600}>
                Password
              </Box>
              <Box
                component={"input"}
                paddingY={"10px"}
                type={showpass ? "text" : "password"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  backgroundColor: "whitesmoke",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  width: "100%",
                }}
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </Stack>
            <Stack
              direction={"column"}
              spacing="10px"
              position={"relative"}
              alignItems={"flex-start"}
            >
              <Box fontSize="14px" fontWeight={600}>
                Divisions
              </Box>
              <Scelection data={data} user={user} setUser={setUser} />
            </Stack>
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
                label="admin?"
                name="is_admin"
                onChange={handleChange}
                value={user.is_admin}
              />
            </FormGroup>
          </Stack>
          <Box
            component={Button}
            fontWeight="600"
            sx={{
              textTransform: "none",
              color: "white",
              backgroundColor: "#F6490D",
              ":hover": {
                backgroundColor: "#F6490D",
              },
            }}
            marginTop="2rem"
            onClick={AddUserMethod}
          >
            Submit
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "1%", left: "1%" }}
          >
            <RiCloseLine />
          </IconButton>
        </Stack>
      </Dialog>
    </>
  );
};
