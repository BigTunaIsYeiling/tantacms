export default async function GetRegulations(key) {
  const response = await fetch("http://127.0.0.1:8000/regulations/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
