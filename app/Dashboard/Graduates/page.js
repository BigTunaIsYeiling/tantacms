import { GraduatesView } from "@/Components/Dashboard/GraduatesView/GraduatesView";
import GetGraduates from "@/Lib/GetGraduates";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const StudentsData = GetGraduates(data.key);
  const students = await StudentsData;
  return <GraduatesView students={students} />;
}
