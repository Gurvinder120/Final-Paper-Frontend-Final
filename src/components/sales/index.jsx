import React from "react";
import "./style.css";

const Sales = () => {
  return (
    <div className="sale">
      <div className="sales-left">
        <img id="left-img" src="./imgs/Home Page imgs/left.png" alt="" />
      </div>
      <div className="sales-right">
        <div className="paragraph absolute-center">
          <p className="name-of-products">kimonos, caftans & pareos</p>
          <p id="smaller-text">Poolside glam included From $4.99</p>
          <button id="buy-now" className="cur-po">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
