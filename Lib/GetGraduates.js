export default async function GetGraduates({ key, regulation }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}students/graduates/${
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
