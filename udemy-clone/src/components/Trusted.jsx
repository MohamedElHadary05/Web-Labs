import React from "react";

export default function Trusted({ companies }) {
  return (
    <section className="trusted container">
      <h3>Trusted by top companies</h3>
      <div className="trusted-grid">
        {companies.map(co => (
          <div key={co.id} className="trusted-item">
            <img src={co.logo} alt={co.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
