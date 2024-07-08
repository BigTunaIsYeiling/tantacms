export default async function GetAccounts(key) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}accounts/`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
