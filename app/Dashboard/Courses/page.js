import CoursesView from "@/Components/Dashboard/CoursesView/CoursesView";
import GetCourses from "@/Lib/GetCourses";
import { verifyAccess } from "@/Lib/VerifyAccess";
import { cookies } from "next/headers";
export default async function page() {
  const data = await verifyAccess();
  const cookieStore = cookies();
  const regulation = cookieStore.get("regulation")?.value;
  const CoursesData = GetCourses({ key: data.key, regulation });
  const courses = await CoursesData;
  return <CoursesView courses={courses} admin={data.user.is_admin} />;
}
