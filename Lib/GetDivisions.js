export default async function GetDivisions(key) {
  const response = await fetch("http://127.0.0.1:8000/divisions/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
