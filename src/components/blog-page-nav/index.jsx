import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Blog_1_Nav = () => {
  return (
    <nav className="blog-nav">
      <div className="logo-search-wrapper">
        <h2 id="logo">
          <Link to="/">
            <img
              id="logo-img"
              src="./imgs/Home Page imgs/extras/Logo.png"
              alt="logo"
            />
            Luminae
          </Link>
        </h2>
      </div>
      <ul className="menu menu-open ul">
        <li className="menu-items">
          <Link to="">NEWS</Link>
        </li>
        <li className="menu-items">
          <Link to="">FASHION</Link>
        </li>
        <li className="menu-items">
          <Link to="">HEALTH</Link>
        </li>
        <li className="menu-items">
          <Link to="">TECH</Link>
        </li>
        <li className="menu-items">
          <Link to="">SCIENCE</Link>
        </li>
      </ul>
      <div className="social-icons">
        <li className="social-icons-item">
          <i className="ph ph-instagram-logo"></i>
        </li>
        <li className="social-icons-item">
          <i className="ph ph-facebook-logo"></i>
        </li>
        <li className="social-icons-item">
          <i className="ph ph-paper-plane-tilt"></i>
        </li>
      </div>
    </nav>
  );
};

export default Blog_1_Nav;
