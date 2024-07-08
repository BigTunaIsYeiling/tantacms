export default async function GetCourses({ key, regulation }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}courses/${
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
