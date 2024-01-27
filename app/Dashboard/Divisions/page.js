import DivisionsView from "@/Components/Dashboard/DivisionsView/DivisionsView";
import GetDepartments from "@/Lib/GetDepartments";
import GetDivisions from "@/Lib/GetDivisions";
import GetRegulations from "@/Lib/GetRegulations";
import { verifyAccess } from "@/Lib/VerifyAccess";
import { cookies } from "next/headers";
export default async function page() {
  const data = await verifyAccess();
  const cookieStore = cookies();
  const regulation = cookieStore.get("regulation")?.value;
  const DivisionsData = GetDivisions({ key: data.key, regulation });
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
