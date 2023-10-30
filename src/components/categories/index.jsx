import React from "react";
import "./style .css";
import { Link } from "react-router-dom";

const handleClick = () => {
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      categories.forEach((c) => c.classList.remove("active"));
      category.classList.add("active");
    });
  });
};

const Categories = () => {
  return (
    <div className="categories absolute-center">
      <ul className="categories">
        <li className="category cur-po" onClick={handleClick}>
          Woman
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Male
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Mother-Child
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Home & Furniture
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Super market
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Cosmetics
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Shoes & Bags
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Electronics
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Sport & Outdoor
        </li>
        <li className="category cur-po" onClick={handleClick}>
          Best Seller
        </li>
      </ul>
    </div>
  );
};

export default Categories;
