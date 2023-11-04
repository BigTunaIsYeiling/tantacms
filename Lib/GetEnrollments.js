export default async function GetEnrollments(key) {
  const response = await fetch("http://127.0.0.1:8000/enrollments/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
