import DepartmentsView from "@/Components/Dashboard/DepartmentView/DepartmentsView";
import GetDepartments from "@/Lib/GetDepartments";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const DepartmentsData = GetDepartments(data.key);
  const departments = await DepartmentsData;
  return <DepartmentsView data={departments} />;
}
