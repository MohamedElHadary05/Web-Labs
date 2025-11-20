import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Udemy Clone</div>
        <div className="footer-links">
          <a>About</a>
          <a>Careers</a>
          <a>Help</a>
        </div>
      </div>
    </footer>
  );
}
