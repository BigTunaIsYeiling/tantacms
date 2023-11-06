import DivisionsView from "@/Components/Dashboard/DivisionsView/DivisionsView";
import GetDepartments from "@/Lib/GetDepartments";
import GetDivisions from "@/Lib/GetDivisions";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const DivisionsData = GetDivisions(data.key);
  const DepartmentData = GetDepartments(data.key);
  const [divisions, departments] = await Promise.all([
    DivisionsData,
    DepartmentData,
  ]);
  return <DivisionsView divisions={divisions} data={departments} />;
}
