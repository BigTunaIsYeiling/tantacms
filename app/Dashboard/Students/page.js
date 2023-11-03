import StudentsView from "@/Components/Dashboard/StudentsView/StudentsView";
import GetEnrollments from "@/Lib/GetEnrollments";
import GetStudents from "@/Lib/GetStudents";
export default async function page() {
  const StudentsData = GetStudents();
  const EnrollmentsData = GetEnrollments();
  const [students, enrollments] = await Promise.all([
    StudentsData,
    EnrollmentsData,
  ]);
  return <StudentsView students={students} enrollments={enrollments} />;
}
