export default async function GetGroups(key) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}divisions/?group=true`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
