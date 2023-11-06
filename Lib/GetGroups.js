export default async function GetGroups(key) {
  const response = await fetch("http://127.0.0.1:8000/divisions/?group=true", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
