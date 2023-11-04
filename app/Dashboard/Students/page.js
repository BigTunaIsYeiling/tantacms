import StudentsView from "@/Components/Dashboard/StudentsView/StudentsView";
import GetEnrollments from "@/Lib/GetEnrollments";
import GetStudents from "@/Lib/GetStudents";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const StudentsData = GetStudents(data.key);
  const EnrollmentsData = GetEnrollments(data.key);
  const [students, enrollments] = await Promise.all([
    StudentsData,
    EnrollmentsData,
  ]);
  return <StudentsView students={students} enrollments={enrollments} />;
}
