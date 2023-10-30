import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Sign_in = () => {
  return (
    <div className="signIn max-width absolute-center">
      <div className="signIn-left">
        <h1>Sign in</h1>
        <form>
          <label className="signIn-label">Email</label>
          <input
            className="signIn-input"
            type="email"
            required
            placeholder="Email Address"
          />
          <label className="signIn-label">Password</label>
          <input
            className="signIn-input"
            type="password"

            required
            placeholder="Password"
          />
          <Link to="" className="forgot-password">
            Forgot Password
          </Link>
          <input type="button" value="Sign In" className="signIn-btn cur-po" />
          <div className="or absolute-center">
            <hr className="hr-or" />
            OR
            <hr className="hr-or" />
          </div>
          <div className="google-login">
            <input
              type="button"
              value="Sign In with Google"
              className="google-signIn-btn cur-po"
            />
          </div>
        </form>
      </div>
      <div className="signIn-right">
          <h1>Sign up</h1>
          <form>
            <label className="signIn-label">Name</label>
            <input
              className="signIn-input"
              type="text"
              required
              placeholder="Full Name"
            />
            <label className="signIn-label">Email</label>
            <input
              className="signIn-input"
              type="email"
              required
              placeholder="Email Address"
            />
            <label className="signIn-label">Password</label>
            <input
              className="signIn-input"
              type="password"
              required
              placeholder="Password"
            />
            <input
              type="button"
              value="Sign In"
              className="signIn-btn cur-po"
            />
            <div className="or absolute-center">
              <hr className="hr-or" />
              OR
              <hr className="hr-or" />
            </div>
            <div className="google-login">
              <input
                type="button"
                value="Sign In with Google"
                className="google-signIn-btn cur-po"
              />
            </div>
          </form>
        </div>
      </div>
  );
};

export default Sign_in;
