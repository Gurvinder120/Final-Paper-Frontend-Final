import React from "react";
import "./style.css";

const Blog_Footer = () => {
  return (
    <footer className="blog-footer">
      <div className="footer-content absolute-center max-width">
        <div className="left">
          <div className="footer-description">
            <h1>
              Luminae <span>Store</span>
            </h1>
            <h2>
              Register your email not to miss the last minutes off+ delivery
            </h2>
          </div>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className="right">
          <ul className="links">
            <div className="first-part">
              <li className="links-item" id="first-child">
                Contact us
              </li>
              <li className="links-item" id="second-child">
                Advertise
              </li>
              <li className="links-item" id="third-child">
                Work With us
              </li>
            </div>
            <div className="second-part">
              <li className="links-item">Partners</li>
              <li className="links-item">Term of Services</li>
              <li className="links-item">Subscriptions</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-part">
        <div className="left">
          <ul className="first-list ul">
            <li className="first-list-item">Contact Us</li>
            <li className="first-list-item">Advertise</li>
            <li className="first-list-item">Work with Us</li>
            <li className="first-list-item">Career</li>
            <li className="first-list-item">Partners</li>
            <li className="first-list-item">Subscriptions</li>
          </ul>
          <ul className="second-list ul">
            <li className="second-list-item">Site Map</li>
            <li className="second-list-item">Home Delivery</li>
            <li className="second-list-item">Customer Service</li>
            <li className="second-list-item">Term of Serivces</li>
          </ul>
        </div>
        <div className="right absolute-center">
          <p className="follow-us">Follow Us on Social Networks</p>
        </div>
      </div>
    </footer>
  );
};

export default Blog_Footer;
