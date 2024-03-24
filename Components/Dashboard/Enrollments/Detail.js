"use client";
import React from "react";
import EnrollmentTable from "./EnrollmentTable";
const STudentDetail = ({ semester }) => {
  return (
    <EnrollmentTable
      enrollments={semester.enrollments}
      level={semester.level}
      semester={semester.semester}
      points={semester.points}
    />
  );
};

export default STudentDetail;
