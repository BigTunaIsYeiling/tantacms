export default async function GetGraduates({ key, regulation }) {
  const response = await fetch(
    `https://ultramacro.onrender.com/students/graduates/${
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
