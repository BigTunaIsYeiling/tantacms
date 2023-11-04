import CoursesView from "@/Components/Dashboard/CoursesView/CoursesView";
import GetCourses from "@/Lib/GetCourses";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const CoursesData = GetCourses(data.key);
  const courses = await CoursesData;
  return <CoursesView courses={courses} />;
}
