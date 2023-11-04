import DivisionsView from "@/Components/Dashboard/DivisionsView/DivisionsView";
import GetDivisions from "@/Lib/GetDivisions";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const DivisionsData = GetDivisions(data.key);
  const divisions = await DivisionsData;
  return <DivisionsView divisions={divisions} />;
}
