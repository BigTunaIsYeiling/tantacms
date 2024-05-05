export default async function GetRegulations(key) {
  const response = await fetch("https://ultramacro.onrender.com/regulations/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
