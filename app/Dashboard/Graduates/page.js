import { GraduatesView } from "@/Components/Dashboard/GraduatesView/GraduatesView";
import GetGraduates from "@/Lib/GetGraduates";
import { verifyAccess } from "@/Lib/VerifyAccess";
import { cookies } from "next/headers";
export default async function page() {
  const data = await verifyAccess();
  const cookieStore = cookies();
  const regulation = cookieStore.get("regulation")?.value;
  const StudentsData = GetGraduates({ key: data.key, regulation });
  const students = await StudentsData;
  return <GraduatesView students={students} />;
}
