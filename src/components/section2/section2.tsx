import React from "react";
import "./section2.scss"; // Import the SCSS file
import ill from "../../assets/img/ill1.svg";

const Section2: React.FC = () => {
  return (
    <div className="section2">
      <section className="container pb-0" id="mission">
        <div className="row align-items-lg-center">
          <div className="content-wrapper">
            <div className="image-container">
              <img src={ill} className="illustration" alt="Styled Image" />
            </div>

            <div className="content">
              <h2 className="title">Our mission</h2>
              <p className="description">
                We’re driven by a mission to provide excellence across every
                aspect of our business, staying ahead of industry trends and
                delivering tailored solutions that ensure our partners stay
                competitive. Join us in shaping the future of energy and
                technology.
              </p>
              <ul className="list">
                <li className="list-item">Striving for Perfection</li>
                <li className="list-item">Pioneering Innovation</li>
                <li className="list-item">Redefining Success</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
