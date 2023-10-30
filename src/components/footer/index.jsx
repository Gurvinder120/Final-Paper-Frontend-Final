import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="absolute-center max-width">
      <div className="subscription">
        <div className="subscription-content absolute-center">
          <h1>Luminae Store</h1>
          <p>
            Register your email not to miss the last minute off+free delivery
          </p>
          <div className="input absolute-center max-width">
            <input
              id="user-email"
              type="email"
              placeholder="Enter your Email"
              // onClick={hancleClick_1}
            />
            <input
              id="submit-btn"
              type="submit"
              className="cur-po"
              // onClick={hancleClick_2}
            />
          </div>
        </div>
      </div>
      <div className="footer absolute-center">
        <ul className="ul first-list">
          <p className="list-heading">Company</p>
          <li>About Us</li>
          <li>Our Store</li>
          <li>Contact us</li>
        </ul>
        <ul className="ul second-list">
          <p className="list-heading">Career Opportunities</p>
          <li>Selling Programs</li>
          <li>Advertise</li>
          <li>Cooperation</li>
        </ul>
        <ul className="ul third-list">
          <p className="list-heading">How to Buy</p>
          <li>Making Payments</li>
          <li>Deliver Options</li>
          <li>Buyer Protection</li>
          <li>New user guide</li>
        </ul>
        <ul className="ul fourth-list">
          <p className="list-heading">Help</p>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <h6>Created By Gurvinder Singh</h6>
    </footer>
  );
};

export default Footer;
