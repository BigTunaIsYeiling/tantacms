export default async function GetStudents() {
  const response = await fetch("http://localhost:7000/students", {
    cache: "no-store",
  });
  return response.json();
}
