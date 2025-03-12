import React from "react";
import "./section6.scss";

import partner1 from "../../assets/img/partn1.png";
import partner2 from "../../assets/img/partn2.png";
import partner3 from "../../assets/img/partn3.jpg";
import partner4 from "../../assets/img/parnt4.png";
import partner5 from "../../assets/img/partn5.png";
import partner6 from "../../assets/img/partn6.jpg";
import partner7 from "../../assets/img/partn7.png";

import partner8 from "../../assets/img/partn8.png";

const Section6: React.FC = () => {
  const partners = [
    { src: partner1, width: 100 },
    { src: partner2, width: 100 },
    { src: partner3, width: 100 },
    { src: partner4, width: 100 },
    { src: partner5, width: 100 },
    { src: partner6, width: 100 },
    { src: partner7, width: 100 },
    { src: partner8, width: 100 },
  ];

  return (
    <section className="container mt-0 pt-0" id="partners">
      <div className="row gy-4 py-xl-2">
        <div className="col-lg-6 text-lg-start pb-3 pb-lg-0 mb-4 mb-lg-0">
          <h2 className="headerText">Our partners</h2>
          <p className="intro">
            We take pride in delivering leads of the highest quality,
            meticulously aligned with the policies and terms of all the top feed
            providers.
          </p>
        </div>
        <div className="col-lg-12">
          <div className="row row-cols-sm-5 row-cols-2 gy-4">
            {partners.map((partner, index) => (
              <div className="col" key={index}>
                <div className="position-relative text-center logo-item">
                  <img
                    src={partner.src}
                    width={partner.width}
                    className="d-block mx-auto mb-3"
                    alt={`Partner logo ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
