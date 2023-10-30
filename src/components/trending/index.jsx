import React from "react";
import "./style.css";

const Trending = () => {
  return (
    <div className="trending-container">
      <p id="trending-heading" className="absolute-center">
        Trending must-haves
      </p>
      <div className="trending absolute-center">
        <div className="trending-1">
          <img
            src="./imgs/Home Page imgs/TrendingSection/4_org_zoom_1.png"
            alt=""
            className="trending-img on-desktop"
          />
          <img
            src="./imgs/Home Page imgs/TrendingSection/1.png"
            alt=""
            className="trending-img on-tablet"
          />
          <div className="trending-description">
            <div className="trending-name">
              <p className="trending-name">Cool Calvin Klein</p>
              <p className="trending-category">Dotted dress-Casual</p>
            </div>
            <div className="trending-price">
              <button className="price cur-po">$89 Shop Now</button>
            </div>
          </div>
        </div>
        <div className="trending-2">
          <img
            src="./imgs/Home Page imgs/TrendingSection/4_org_zoom_2.png"
            alt=""
            className="trending-img on-desktop"
          />
          <img
            src="./imgs/Home Page imgs/TrendingSection/2.png"
            alt=""
            className="trending-img on-tablet"
          />
          <div className="trending-description">
            <div className="trending-name">
              <p className="trending-name">Cool Calvin Klein</p>
              <p className="trending-category">Dotted dress-Casual</p>
            </div>
            <div className="trending-price">
              <button className="price cur-po">$89 Shop Now</button>
            </div>
          </div>
        </div>
        <div className="trending-3">
          <img
            src="./imgs/Home Page imgs/TrendingSection/4_org_zoom_3.png"
            alt=""
            className="trending-img on-desktop"
          />
          <img
            src="./imgs/Home Page imgs/TrendingSection/3.png"
            alt=""
            className="trending-img on-tablet"
          />
          <div className="trending-description">
            <div className="trending-name">
              <p className="trending-name">Beige Coat Zara</p>
              <p className="trending-category">Cream-Brow-Formal</p>
            </div>
            <div className="trending-price">
              <button className="price cur-po">$102 Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
