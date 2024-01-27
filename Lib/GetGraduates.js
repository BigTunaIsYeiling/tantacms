export default async function GetGraduates({ key, regulation }) {
  const response = await fetch(
    `http://127.0.0.1:8000/students/graduates/${
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
