export default async function GetDepartments(key) {
  const response = await fetch("https://ultramacro.onrender.com/departments/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
