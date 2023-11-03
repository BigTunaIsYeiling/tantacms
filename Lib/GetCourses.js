export default async function GetCourses() {
  const response = await fetch("http://localhost:7000/courses", {
    cache: "no-store",
  });
  return response.json();
}
