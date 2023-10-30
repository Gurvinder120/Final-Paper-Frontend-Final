import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="all-cards absolute-center">
      <div className="card-1-2">
      <div className="card-1">
        <div className="card-content">
          <div className="card-1-left">
            <p className="card-heading">Never-Ending Summer</p>
            <p className="card-description">
              Throwbacks Shirt & all-day dressed
            </p>
            <p className="card-link">
              <Link to="">Explore all category</Link>
            </p>
          </div>
          <div className="card-1-right">
            <img
              src="./imgs/Home Page imgs/cards/card-1.png"
              className="on-desktop"
              alt=""
            />
            <img
              src="./imgs/Home Page imgs/cards/card-1_tablet.png"
              className="on-tablet"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="card-content">
          <div className="card-2-left">
            <p className="card-heading">The most famous sport brand</p>
            <p className="card-description">Get in gym essentials</p>
            <p className="card-link">
              <Link to="">Explore all category</Link>
            </p>
          </div>
          <div className="card-2-right">
            <img
              src="./imgs/Home Page imgs/cards/card-2.png"
              className="on-desktop"
              alt=""
            />
            <img
              src="./imgs/Home Page imgs/cards/card-2_tablet.png"
              className="on-tablet"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
      <div className="card-3">
        <div className="card-content">
          <div className="card-3-left">
            <p className="card-heading">MAGSAFE</p>
            <p className="card-description">
              Snap on magnetic case, wallet, or both .And get faster wireless
              charging.
            </p>
          </div>
          <div className="card-3-right">
            <img
              src="./imgs/Home Page imgs/cards/card-3.png"
              className="on-desktop"
              alt=""
            />
            <img
              src="./imgs/Home Page imgs/cards/card-3_tablet.png"
              className="on-tablet"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="card-4-5">
      <div className="card-4">
        <div className="card-content">
          <div className="card-4-left">
            <p className="card-heading">The most famous sport brand</p>
            <p className="card-description">Get in gym essentials</p>
            <p className="card-link">
              <Link to="">Explore all category</Link>
            </p>
          </div>
          <div className="card-2-right">
            <img src="./imgs/Home Page imgs/cards/card-4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="card-5">
        <div className="card-content">
          <div className="card-5-left">
            <p className="card-heading">The most famous sport brand</p>
            <p className="card-description">Get in gym essentials</p>
            <p className="card-link">
              <Link to="">Explore all category</Link>
            </p>
          </div>
          <div className="card-2-right">
            <img src="./imgs/Home Page imgs/cards/card-5.png" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
