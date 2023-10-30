import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contact absolute-center">
      <div className="contact-left">
        <p className="left-heading">
          Tell Us About Your
          <span className="inside-heading">Concerns</span>
        </p>
        <form>
          <label>Your Name</label>
          <input
            className="contact-inputs"
            type="text"
            placeholder="Enter Your Name here"
          />
          <label>Your Email</label>
          <input
            className="contact-inputs"
            type="email"
            placeholder="Enter Your Email here"
          />
          <label>Description</label>
          <input
            type="text"
            id="description"
            placeholder="Tell us about your concern"
            className="contact-inputs"
          />
          <input
            id="formBtn"
            className="cur-po contact-inputs"
            type="button"
            value="SEND"
          />
        </form>
      </div>
      <div className="contact-right">
        <img
          src="./imgs/About Page imgs/right.png"
          className="contact-right-img"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactUs;
