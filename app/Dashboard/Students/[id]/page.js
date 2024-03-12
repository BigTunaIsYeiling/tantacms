import { EnrollmentsView } from "@/Components/Dashboard/Enrollments/EnrollmentsView";
import GetDetails from "@/Lib/GetDetails";
import { verifyAccess } from "@/Lib/VerifyAccess";
export async function generateMetadata({ params }) {
  const user = await verifyAccess();
  const DetailsData = GetDetails({ key: user.key, id: params.id });
  const details = await DetailsData;
  return {
    title: details.name,
  };
}
export default async function Page({ params }) {
  const user = await verifyAccess();
  const DetailsData = GetDetails({ key: user.key, id: params.id });
  const details = await DetailsData;
  return <EnrollmentsView details={details} />;
}
