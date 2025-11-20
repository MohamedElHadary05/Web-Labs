import React from "react";

export default function CourseCard({ c }) {
  return (
    <div className="course-card">
      <img className="course-img" src={c.image} alt={c.title} />
      <div className="course-body">
        <h3 className="course-title">{c.title}</h3>
        <div className="course-meta">
          <span>{c.author}</span>
          <span>•</span>
          <span>{c.rating} ★</span>
        </div>
        <div className="course-bottom">
          <span className="price">{c.price}</span>
          <span className="students">{c.students}</span>
        </div>
      </div>
    </div>
  );
}
