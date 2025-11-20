import React from "react";
import CourseCard from "./Coursecard";

export default function Courses({ courses }) {
  return (
    <section className="courses container">
      <h2>Popular on Udemy Clone</h2>
      <div className="course-grid">
        {courses.map(c => (
          <CourseCard key={c.id} c={c} />
        ))}
      </div>
    </section>
  );
}
