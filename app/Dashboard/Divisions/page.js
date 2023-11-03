import DivisionsView from "@/Components/Dashboard/DivisionsView/DivisionsView";
import GetDivisions from "@/Lib/GetDivisions";
export default async function page() {
  const DivisionsData = GetDivisions();
  const divisions = await DivisionsData;
  return <DivisionsView divisions={divisions} />;
}
