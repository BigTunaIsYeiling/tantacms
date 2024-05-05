export default async function GetStudents({ key, regulation }) {
  const response = await fetch(
    `https://ultramacro.onrender.com/students/${
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
