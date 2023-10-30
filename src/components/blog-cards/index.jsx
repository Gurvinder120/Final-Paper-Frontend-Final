import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

const Blog_Cards = () => {
  return (
    <div className="blog-card-container absolute-center max-width">
      <div className="blog-cards">
        <div className="blog-card-first-line absolute-center">
          <div className="blog-card-1 absolute-center">
            <div className="blog-card-left absolute-center">
              <p className="blog-card-heading">
                Stylish woman in summer outfit isolated posing in fashion trend
                isolated
              </p>
              <p className="blog-card-description">
                In this captivating scene, a stylish woman stands confidently
                against a pristine backdrop, capturing the essence of summer's
                allure. Bathed in the gentle sunlight, she emanates an air of
                effortless chic. Her outfit is a harmonious blend of
                contemporary trends and timeless elegance, perfectly attuned to
                the vibrant season.
              </p>
              <button id="more-about-blog" className="cur-po">
                READ MORE
              </button>
            </div>
            <div className="blog-card-right">
              <img
                src="./imgs/Blog Page imgs/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated.png"
                alt=""
              />
            </div>
          </div>
          <div className="blog-card-2 absolute-center">
            <img src="./imgs/Blog Page imgs/Card.png" alt="" />
          </div>
        </div>
        <div className="blog-card-second-line">
          <div className="blog-card-3">
            <img src="./imgs/Blog Page imgs/photo.png" alt="" />
            <div className="blog-card-description-container">
              <p className="blog-category">Fashion</p>
              <p className="blog-title">Stylish young man out in town</p>
              <p className="blog-card-description">
                In the heart of the bustling city, a stylish young man navigates
                the urban landscape with an air of contemporary confidence. His
                ensemble effortlessly captures the essence of city chic...
              </p>
              <div className="information">
                <p className="upload">3 hours ago</p>
                <p className="comments">
                  <i
                    className="ph-fill ph-chat-circle-text"
                    id="comment-id"
                  ></i>
                  21
                </p>
              </div>
            </div>
          </div>
          <div className="blog-card-4">
            <img src="./imgs/Blog Page imgs/photo-1.png" alt="" />
            <div className="blog-card-description-container">
              <p className="blog-category">Tech</p>
              <p className="blog-title">Aptkdoe Smartwatch Women Men</p>
              <p className="blog-card-description">
                It seems like you've mentioned "Aptkdoe Smartwatch" in
                combination with "Women" and "Men." However, as of my last
                knowledge update in September 2021, I don't have specific...
              </p>
              <div className="information">
                <p className="upload">4 hours ago</p>
                <p className="comments">
                  <i
                    className="ph-fill ph-chat-circle-text"
                    id="comment-id"
                  ></i>
                  56
                </p>
              </div>
            </div>
          </div>
          <div className="blog-card-5">
            <img src="./imgs/Blog Page imgs/photo-1-1.png" alt="" />
            <div className="blog-card-description-container">
              <p className="blog-category">Tech</p>
              <p className="blog-title">Anker 325 power bank</p>
              <p className="blog-card-description">
                Anker 325 power bank, 20000mAh external battery PowerIQ
                technology USB-C port, enormous energy density, compatible with
                iPhone, Samsung Galaxy, iPad and more...
              </p>
              <div className="information">
                <p className="upload">4 hours ago</p>
                <p className="comments">
                  <i
                    className="ph-fill ph-chat-circle-text"
                    id="comment-id"
                  ></i>
                  10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-review-container">
        <div className="first-review blog-review">
          <p className="review-heading">Wireless Earbuds</p>
          <p className="review-description">
            "I've been using the XYZ Wireless Earbuds for a few weeks now, and
            they've completely...
          </p>
          <div className="about-user">
            <img
              className="user-profile-img"
              src="./imgs/Blog Page imgs/profile.png"
              alt=""
            />
            <div className="name">
              <p className="user">Nina Markez</p>
              <p className="user-profession">Programmer</p>
            </div>
          </div>
        </div>
        <div className="second-review blog-review">
          <p className="review-heading">Wireless Earbuds</p>
          <p className="review-description">
            "I've been using the XYZ Wireless Earbuds for a few weeks now, and
            they've completely...
          </p>
          <div className="about-user">
            <img
              className="user-profile-img"
              src="./imgs/Blog Page imgs/profile.png"
              alt=""
            />
            <div className="name">
              <p className="user">Nina Markez</p>
              <p className="user-profession">Programmer</p>
            </div>
          </div>
        </div>
        <div className="third-review blog-review">
          <p className="review-heading">Wireless Earbuds</p>
          <p className="review-description">
            "I've been using the XYZ Wireless Earbuds for a few weeks now, and
            they've completely...
          </p>
          <div className="about-user">
            <img
              className="user-profile-img"
              src="./imgs/Blog Page imgs/profile.png"
              alt=""
            />
            <div className="name">
              <p className="user">Nina Markez</p>
              <p className="user-profession">Programmer</p>
            </div>
          </div>
        </div>
        <div className="fourth-review blog-review">
          <p className="review-heading">Wireless Earbuds</p>
          <p className="review-description">
            "I've been using the XYZ Wireless Earbuds for a few weeks now, and
            they've completely...
          </p>
          <div className="about-user">
            <img
              className="user-profile-img"
              src="./imgs/Blog Page imgs/profile.png"
              alt=""
            />
            <div className="name">
              <p className="user">Nina Markez</p>
              <p className="user-profession">Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Cards;
