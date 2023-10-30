import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="option">
      <ul className="ul">
        <div className="first-option absolute-center">
          <div className="sub-first absolute-center">
            <li className="options cur-po" id="categories">
              <img src="./imgs/Home Page imgs/extras/Vector.png" alt="" />
              Categories
            </li>
            <li className="options cur-po" id="currency">
              USD<i className="ph ph-caret-down"></i>
            </li>
            <li className="options cur-po">
              English<i className="ph ph-caret-down"></i>
            </li>
          </div>
        </div>
        <div className="second-option absolute-center">
          <img src="./imgs/Home Page imgs/extras/Men cosmetic.png" alt="" />
          <div className="description">
            <p>Weekly Men's Toiletries Coupon</p>
            <p>We extend exclusive discount to our male clientele</p>
          </div>
        </div>
        <div className="third-option absolute-center">
          <li className="options cur-po">
            <Link to="/signIn">Sign in</Link>
          </li>
          <li className="options cur-po">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="options cur-po">
            <Link to="/card">Card</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Options;
