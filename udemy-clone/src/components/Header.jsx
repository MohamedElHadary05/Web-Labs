import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">Udemy Clone</div>
        <nav className="nav">
          <a>Categories</a>
          <a>My Learning</a>
          <a>Wishlist</a>
        </nav>
        <div className="auth">
          <button className="btn-outline">Log in</button>
          <button className="btn-primary">Sign up</button>
        </div>
      </div>
    </header>
  );
}
