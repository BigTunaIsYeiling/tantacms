export default async function GetCourses({ key, regulation }) {
  const response = await fetch(
    `https://ultramacro.onrender.com/courses/${
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
