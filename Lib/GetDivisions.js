export default async function GetDivisions({ key, regulation }) {
  const response = await fetch(
    `http://127.0.0.1:8000/divisions/${
      regulation === undefined || !regulation ? "" : `?regulation=${regulation}`
    }`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    }
  );
  return response.json();
}
