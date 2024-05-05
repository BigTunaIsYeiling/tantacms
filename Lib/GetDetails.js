export default async function GetDetails({ key, id }) {
  const response = await fetch(`https://ultramacro.onrender.com/students/${id}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
