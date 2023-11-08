import StudentsView from "@/Components/Dashboard/StudentsView/StudentsView";
import GetDivisions from "@/Lib/GetDivisions";
import GetGroups from "@/Lib/GetGroups";
import GetStudents from "@/Lib/GetStudents";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const StudentsData = GetStudents(data.key);
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
