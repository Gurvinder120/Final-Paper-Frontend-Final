import React from "react";
import "./style.css";

const Services = () => {
  return (
    <div className="services-team absolute-center max-width">
      <div className="services-team-left absolute-center">
        <p className="services-team-left-heading">Know our services</p>
        <p className="services-team-left-heading-description">
          We offer the best services that will<span> make it easier</span>
        </p>
        <p className="praises">
          Discover unparalleled convenience with our top-tier service, designed
          to make your shopping experience smoother than ever.Experience
          shopping made effortless through our exceptional service that puts
          your needs at the forefront.Elevate your shopping journey with our
          unmatched service, redefining convenience and satisfaction.
        </p>
        <div className="offers absolute-center">
          <div className="offer-1 absolute-center">
            <img src="./imgs/About Page imgs/Vector-1.png" alt="" />
            <p className="offer-title">Full category shop</p>
            <p className="offer-description">
              Explore our comprehensive online store where you'll find a diverse
              range of products across multiple categories, all curated to cater
              to your various needs and ...
            </p>
            <button className="read-more cur-po">READ MORE</button>
          </div>
          <div className="offer-2 absolute-center">
            <img src="./imgs/About Page imgs/Vector-2.png" alt="" />
            <p className="offer-title">Extraordinary discount</p>
            <p className="offer-description">
              Experience unparalleled savings on a wide selection of premium
              products that enhance your lifestyle without compromising on
              quality...
            </p>
            <button className="read-more cur-po">READ MORE</button>
          </div>
          <div className="offer-3 absolute-center">
            <img src="./imgs/About Page imgs/Vector-3.png" alt="" />
            <p className="offer-title">Free Cargo</p>
            <p className="offer-description">
              Enjoy the convenience of free cargo services, ensuring your
              purchases are delivered right to your doorstep without any
              additional cost. Experience seamless...
            </p>
            <button className="read-more cur-po">READ MORE</button>
          </div>
          <div className="offer-4 absolute-center">
            <img src="./imgs/About Page imgs/Vector-4.png" alt="" />
            <p className="offer-title">24-hour customer service</p>
            <p className="offer-description">
              Our commitment to exceptional customer care means our 24-hour
              customer service team is always available to assist you, ensuring
              your inquiries and concerns...
            </p>
            <button className="read-more cur-po">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="services-team-right absolute-center">
        <img src="./imgs/About Page imgs/team.png" alt="" />
      </div>
    </div>
  );
};

export default Services;
