import React from "react";
import "./Section1.scss"; // Import the SCSS file

const Section1: React.FC = () => {
  return (
    <div className="section1-container">
      {/* Left Side Text */}

      <div className="section1-content max-w-[1320px]">
        <div className="left-text">
          <h2>Gateway to a thriving global marketing ecosystem</h2>
          <p>
            As a leading provider of digital marketing and search traffic
            services, we pride ourselves on delivering unparalleled results.
          </p>
          <div className="contact-us-wrapper">
            <a href="#" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="right-image">
          <img src="./src/assets/img/hero1.svg" alt="Marketing Image" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
