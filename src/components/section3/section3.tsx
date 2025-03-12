import React from "react";
import "./section3.scss"; // Import the SCSS file

const Section3: React.FC = () => {
  return (
    <section className="section3 container pt-3">
      <div className="swiper pt-3">
        <div
          className="swiper-wrapper pt-4"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="swiper-slide border-end-lg px-2"
            role="group"
            aria-label="1 / 4"
          >
            <div className="text-center">
              <i className="fa-solid fa-earth-americas swiper-icon"></i>
              <h4 className="mb-2 pb-1">100+ Countries</h4>
            </div>
          </div>

          <div
            className="swiper-slide border-end-lg px-2"
            role="group"
            aria-label="2 / 4"
          >
            <div className="text-center">
              <i className="fa-regular fa-handshake swiper-icon"></i>
              <h4 className="mb-2 pb-1">100% Trust Rate</h4>
            </div>
          </div>

          <div
            className="swiper-slide border-end-lg px-2"
            role="group"
            aria-label="3 / 4"
          >
            <div className="text-center">
              <i className="fa-solid fa-layer-group swiper-icon"></i>
              <h4 className="mb-2 pb-1">100+ Niches</h4>
            </div>
          </div>

          <div className="swiper-slide px-2" role="group" aria-label="4 / 4">
            <div className="text-center">
              <i className="fa-solid fa-cube swiper-icon"></i>
              <h4 className="mb-2 pb-1">10+ Platforms</h4>
            </div>
          </div>
        </div>

        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </section>
  );
};

export default Section3;
