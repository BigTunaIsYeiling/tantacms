import BottomNavBar from "@/Components/Dashboard/BottomNavigation";
import Header from "@/Components/Dashboard/Header";
import NavigationBar from "@/Components/Dashboard/NavigationBar";
export const metadata = {
  title: "Admin Dashboard",
};
import { Box, Stack } from "@/Components/MuiComponents";
import GetAccounts from "@/Lib/GetAccounts";
import GetDivisions from "@/Lib/GetDivisions";
import GetRegulations from "@/Lib/GetRegulations";
import { verifyAccess } from "@/Lib/VerifyAccess";
import { SignCookie } from "@/Lib/signCookie";
import { cookies } from "next/headers";
export default async function DashboardLayout({ children }) {
  const user = await verifyAccess();
  const cookieStore = cookies();
  const regulation = cookieStore.get("regulation")?.value;
  const AccountsData = GetAccounts(user.key);
  const DivisionsData = GetDivisions({ key: user.key, regulation });
  const RegulationsData = GetRegulations(user.key);
  const [accounts, divisions, regulations] = await Promise.all([
    AccountsData,
    DivisionsData,
    RegulationsData,
  ]);
  return (
    <Box>
      {!user.error && <SignCookie token={user.key} />}
      <Header data={regulations} />
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
