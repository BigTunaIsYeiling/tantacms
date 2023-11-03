export default async function GetDivisions() {
  const response = await fetch("http://localhost:7000/divisions");
  return response.json();
}
