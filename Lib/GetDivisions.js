export default async function GetDivisions({ key, regulation }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}divisions/${
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
