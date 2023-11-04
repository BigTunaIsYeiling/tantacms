export default async function GetCourses(key) {
  const response = await fetch("http://127.0.0.1:8000/courses/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
