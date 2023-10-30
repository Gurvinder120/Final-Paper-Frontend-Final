import React from "react";
import "./style.css";

const KnowAboutUs = () => {
  return (
    <div class="know-about-us absolute-center max-width">
      <div class="know-about-us-left">
        <p class="know-about-us-title">Let's get to know Luminae</p>
        <p class="know-about-us-description">
          Providing the best experience to make your
          <span> Online Shopping</span>
        </p>
        <p class="know-about-us-description-description">
          At Luminae, we are more than just an online store - we are your
          ultimate destination for an unparalleled shopping experience. Our
          journey began with a simple yet powerful idea: to create a platform
          that not only offers a wide array of products but also fosters a sense
          of community and connection among our customers.
        </p>

        <div class="numbers">
          <div class="first">
            <span>20+</span>
            <p>Shopping category</p>
          </div>
          <div class="second">
            <span>10+</span>
            <p>Different Territory</p>
          </div>
          <div class="third">
            <span>4M+</span>
            <p>Happy Client</p>
          </div>
        </div>
      </div>
      <div class="know-about-us-right">
        <img
          id="on-the-top"
          src="./imgs/About Page imgs/bxs_quote-alt-left.png"
          alt=""
        />
        <p class="quote">
          We have made many people satisfied with our Platform
        </p>
      </div>
    </div>
  );
};

export default KnowAboutUs;
