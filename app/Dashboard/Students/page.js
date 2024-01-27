import StudentsView from "@/Components/Dashboard/StudentsView/StudentsView";
import GetDivisions from "@/Lib/GetDivisions";
import GetGroups from "@/Lib/GetGroups";
import GetStudents from "@/Lib/GetStudents";
import { verifyAccess } from "@/Lib/VerifyAccess";
import { cookies } from "next/headers";
export default async function page() {
  const data = await verifyAccess();
  const cookieStore = cookies();
  const regulation = cookieStore.get("regulation")?.value;
  const StudentsData = GetStudents({ key: data.key, regulation });
  const DivisionsData = GetDivisions(data.key);
  const GroupsData = GetGroups(data.key);
  const [students, divisions, groups] = await Promise.all([
    StudentsData,
    DivisionsData,
    GroupsData,
  ]);
  return (
    <StudentsView
      students={students}
      admin={data.user.is_admin}
      groups={groups}
      divisions={divisions}
    />
  );
}
