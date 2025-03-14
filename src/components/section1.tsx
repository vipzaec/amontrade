import React from "react";
import "./section1.scss"; // Import the SCSS file
import MyIcon from "../assets/img/—Pngtree—digital marketing business symbols illustrated_17624815.png";

const Section1: React.FC = () => {
  return (
    <div className="section1-container">
      {/* Left Side Text */}

      <div className="section1-content max-w-[1320px]">
        <div className="left-text">
          <h2>Gateway to Global Innovation</h2>
          <p>
            We are your trusted partner in bringing the latest energy-saving
            solutions and cutting-edge technologies to Europe and Ukraine. We
            specialize in consumer electronics, solar energy solutions, and
            power-saving innovations, working with top-tier brands like Ecoflow,
            Bluetti, Jackery, and more.
          </p>

          <div className="contact-us-wrapper">
            <a href="mailto:OSHF23@gmail.com" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="right-image">
          <img src={MyIcon} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
