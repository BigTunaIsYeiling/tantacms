import DivisionsView from "@/Components/Dashboard/DivisionsView/DivisionsView";
import GetDepartments from "@/Lib/GetDepartments";
import GetDivisions from "@/Lib/GetDivisions";
import GetRegulations from "@/Lib/GetRegulations";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const DivisionsData = GetDivisions(data.key);
  const DepartmentData = GetDepartments(data.key);
  const RegulationsData = GetRegulations(data.key);
  const [divisions, departments, regulations] = await Promise.all([
    DivisionsData,
    DepartmentData,
    RegulationsData,
  ]);
  return (
    <DivisionsView
      divisions={divisions}
      data={departments}
      regulations={regulations}
    />
  );
}
