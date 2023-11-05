import BottomNavBar from "@/Components/Dashboard/BottomNavigation";
import Header from "@/Components/Dashboard/Header";
import NavigationBar from "@/Components/Dashboard/NavigationBar";
export const metadata = {
  title: "Admin Dashboard",
};
import { Box, Stack } from "@/Components/MuiComponents";
import GetAccounts from "@/Lib/GetAccounts";
import GetDivisions from "@/Lib/GetDivisions";
import { verifyAccess } from "@/Lib/VerifyAccess";
import { SignCookie } from "@/Lib/signCookie";
export default async function DashboardLayout({ children }) {
  const user = await verifyAccess();
  const AccountsData = GetAccounts(user.key);
  const DivisionsData = GetDivisions(user.key);
  const [accounts, divisions] = await Promise.all([
    AccountsData,
    DivisionsData,
  ]);
  return (
    <Box>
      {!user.error && <SignCookie token={user.key} />}
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
        <NavigationBar
          admin={user.user.is_admin}
          data={divisions}
          user={user.user}
          accounts={accounts}
        />
        <Box marginTop={"64px"} width={"100%"}>
          {children}
        </Box>
      </Stack>
    </Box>
  );
}
