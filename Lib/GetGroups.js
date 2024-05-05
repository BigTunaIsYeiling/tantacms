export default async function GetGroups(key) {
  const response = await fetch("https://ultramacro.onrender.com/divisions/?group=true", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
