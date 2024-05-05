export default async function GetAccounts(key) {
  const response = await fetch("https://ultramacro.onrender.com/accounts/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
