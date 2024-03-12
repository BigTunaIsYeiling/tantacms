export default async function GetDetails({ key, id }) {
  const response = await fetch(`http://127.0.0.1:8000/students/${id}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
