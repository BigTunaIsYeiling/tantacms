export default async function GetDepartments(key) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}departments/`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
