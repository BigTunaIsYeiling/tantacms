export default async function GetDivisions({ key, regulation }) {
  const response = await fetch(
    `https://ultramacro.onrender.com/divisions/${
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
