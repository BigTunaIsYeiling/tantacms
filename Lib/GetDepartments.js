export default async function GetDepartments(key) {
  const response = await fetch("http://127.0.0.1:8000/departments/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
