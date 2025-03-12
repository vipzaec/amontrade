import React from "react";
import "./Section2.scss"; // Import the SCSS file
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
                Our mission is simple but powerful: to deliver excellence in
                every aspect of our business. We constantly push boundaries,
                staying ahead of industry trends and taking new approaches to
                ensure our partners stay one step ahead. Join us on this unique
                journey as we redefine what it means to succeed in digital
                marketing.
              </p>
              <ul className="list">
                <li className="list-item">Striving for Perfection</li>
                <li className="list-item">Pioneering Innovation</li>
                <li className="list-item">
                  Redefining Success in Digital Marketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
