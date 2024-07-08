export default async function GetStudents({ key, regulation }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}students/${
      regulation === undefined || !regulation ? "" : `?regulation=${regulation}`
    }`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    }
  );
  return response.json();
}
