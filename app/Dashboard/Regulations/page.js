import RegulationsView from "@/Components/Dashboard/RegulationsView/RegulationsView";
import GetRegulations from "@/Lib/GetRegulations";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const RegulationsData = GetRegulations(data.key);
  const Regulations = await RegulationsData;
  return <RegulationsView data={Regulations} />;
}
