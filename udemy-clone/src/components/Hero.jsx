import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>Learn the skills to get the job you want</h1>
          <p>Online courses created by experts.</p>
          <div className="hero-actions">
            <input placeholder="Search for anything" className="search" />
            <button className="btn-primary">Search</button>
          </div>
        </div>
        <div className="hero-right">
          <img alt="hero" src="https://picsum.photos/seed/hero/520/320" />
        </div>
      </div>
    </section>
  );
}
