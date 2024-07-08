export default async function GetDetails({ key, id }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}students/${id}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
