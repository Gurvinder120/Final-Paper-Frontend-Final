import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const FlashSales = () => {
  return (
    <div className="flash-sales absolute-center">
      <p id="flash-sales-heading">Flash Sales</p>
      <div className="products absolute-center">
        <div className="first-product absolute-center">
          <p className="deal-of-day">DEAL OF THE DAY</p>
          <p className="time-remaining">12 : 43 : 12</p>
          <img src="./imgs/Home Page imgs/FlashSales/photo bag.png" alt="" />
          <div className="product-des">
            <p className="product-name">Tonyy Black</p>
            <p className="product-category">Shoulder Bag-White-Plain</p>
            <p className="product-reviews">
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              (54)
            </p>
            <div className="prices">
              <p className="product-price">$69.99</p>
              <s>$129.99</s>
              <p className="product-discount">-40%</p>
            </div>
          </div>
        </div>
        <div className="second-product absolute-center">
          <p className="deal-of-day">DEAL OF THE DAY</p>
          <p className="time-remaining">02 : 05 : 32</p>
          <img src="./imgs/Home Page imgs/FlashSales/photo bag-2.png" alt="" />
          <div className="product-des">
            <p className="product-name">Reebok</p>
            <p className="product-category">Women's Powder Sneaker</p>
            <p className="product-reviews">
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              (54)
            </p>
            <div className="prices">
              <p className="product-price">$112.02</p>
              <s>$129.99</s>
              <p className="product-discount">-40%</p>
            </div>
          </div>
        </div>
        <div className="third-product absolute-center">
          <p className="deal-of-day">DEAL OF THE DAY</p>
          <p className="time-remaining">02 : 14 : 21</p>
          <img src="./imgs/Home Page imgs/FlashSales/photo bag 3.png" alt="" />
          <div className="product-des">
            <p className="product-name">Pasto</p>
            <p className="product-category">Shoulder Bag-Pink-Plain</p>
            <p className="product-reviews">
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              (54)
            </p>
            <div className="prices">
              <p className="product-price">$69.99</p>
              <s>$129.99</s>
              <p className="product-discount">-40%</p>
            </div>
          </div>
        </div>
        <div className="fourth-product absolute-center">
          <p className="deal-of-day">DEAL OF THE DAY</p>
          <p className="time-remaining">25 : 11 : 02</p>
          <img src="./imgs/Home Page imgs/FlashSales/photo bag 4.png" alt="" />
          <div className="product-des">
            <p className="product-name">Sketcher</p>
            <p className="product-category">Sport-shoe 2102</p>
            <p className="product-reviews">
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              <img src="./imgs/Home Page imgs/extras/Star 2.png" alt="" />
              (54)
            </p>
            <div className="prices">
              <p className="product-price">$80</p>
              <s>$129.99</s>
              <p className="product-discount">-40%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
