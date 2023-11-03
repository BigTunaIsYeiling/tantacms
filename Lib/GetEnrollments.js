export default async function GetEnrollments() {
    const response = await fetch("http://localhost:7000/enrollments");
    return response.json();
  }
  