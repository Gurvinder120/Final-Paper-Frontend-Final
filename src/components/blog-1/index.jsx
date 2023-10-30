import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const Blog_1 = () => {
  return (
    <div className="blog-1 absolute-center">
      <div className="about-blog">
        <p className="blog-1-title">
          Stunning barefooted
          <br />
          woman of 2023
        </p>
        <p className="blog-1-description">
          In the heart of a chic urban studio, the atmosphere buzzed with
          excitement as a trendy fur coat took center stage during a vibrant
          photoshoot.
        </p>
        <div className="date-and-numbers">
          <p className="date">
            <i className="ph-fill ph-clock"></i>20 July 2023
          </p>
          <p className="likes">
            <i className="ph-fill ph-heart"></i>830
          </p>
          <p className="commnets">
            <i className="ph-fill ph-chat-circle-text"></i>19
          </p>
        </div>
        <button id="read-more" className="cur-po">
          <pre>
            READ MORE <i className="ph-fill ph-arrow-fat-right"></i>
          </pre>
        </button>
        <img src="./imgs/Blog Page imgs/down.png" alt="" />
      </div>
    </div>
  );
};

export default Blog_1;
