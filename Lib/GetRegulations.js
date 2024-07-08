export default async function GetRegulations(key) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}regulations/`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });
  return response.json();
}
