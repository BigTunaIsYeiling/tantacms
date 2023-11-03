import BottomNavBar from "@/Components/Dashboard/BottomNavigation";
import Header from "@/Components/Dashboard/Header";
import NavigationBar from "@/Components/Dashboard/NavigationBar";
export const metadata = {
  title: "Admin Dashboard",
};
import { Box, Stack } from "@/Components/MuiComponents";
export default function DashboardLayout({ children }) {
  return (
    <Box>
      <Header />
      <BottomNavBar />
      <Stack
        position={"absolute"}
        direction="row"
        sx={{
          left: 0,
          width: "100vw",
          overflow: "hidden",
          top: 0,
          height: "100vh",
        }}
      >
        <NavigationBar />
        <Box marginTop={"64px"} width={"100%"}>
          {children}
        </Box>
      </Stack>
    </Box>
  );
}
