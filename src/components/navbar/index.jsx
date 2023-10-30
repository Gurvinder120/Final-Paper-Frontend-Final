import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="max-width absolute-center">
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
        <div className="search">
          <input
            id="search-products"
            type="text"
            placeholder="Search Products"
          />
        </div>
      </div>
      <div className="menu-social-wrapper">
        <ul className="menu menu-open ul">
          <li className="menu-items">
            <Link to="/about">About us</Link>
          </li>
          <li className="menu-items">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu-items">
            <Link to="">Contact us</Link>
          </li>
          <li className="menu-items">
            <Link to="">Help & support</Link>
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
      </div>
    </nav>
  );
};

export default Nav;
