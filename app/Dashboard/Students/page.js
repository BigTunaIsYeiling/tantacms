import StudentsView from "@/Components/Dashboard/StudentsView/StudentsView";
import GetStudents from "@/Lib/GetStudents";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const StudentsData = GetStudents(data.key);
  const students = await StudentsData;
  return <StudentsView students={students} admin={data.user.is_admin} />;
}
