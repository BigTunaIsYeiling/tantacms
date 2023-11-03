import CoursesView from "@/Components/Dashboard/CoursesView/CoursesView";
import GetCourses from "@/Lib/GetCourses";
export default async function page() {
  const CoursesData = GetCourses();
  const courses = await CoursesData;
  return <CoursesView courses={courses} />;
}
