export default async function GetStudents({ key, regulation }) {
  const response = await fetch(
    `http://127.0.0.1:8000/students/${
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
