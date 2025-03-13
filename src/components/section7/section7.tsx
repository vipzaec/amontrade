import React from "react";
import "./section7.scss";
import aboutus from "../../assets/img/about-us.png";

const Section7: React.FC = () => {
  return (
    <section
      id="about-us"
      className="about-us-container flex justify-center flex-col items-center "
    >
      <div className="max-w-[1320px] w-full">
        <h2 className="headerText text-left sm:text-center ml-[5rem]!">
          About Us
        </h2>
      </div>
      <div className="about-us-row">
        <div className="about-us-image">
          <img src={aboutus} alt="About Us" />
        </div>
        <div className="about-us-content">
          <p className="intro">
            <b>AMON TRADE LLC</b> is a trusted partner specializing in
            delivering comprehensive solutions for businesses worldwide. Our
            focus is on providing innovative strategies that drive growth,
            enhance performance, and create measurable results. With a deep
            understanding of the global market, we are dedicated to helping our
            clients achieve their goals through tailored services that meet
            their unique needs.
          </p>
          <p className="intro">
            <b>About AMON TRADE LLC:</b>
            <br />
            At AMON TRADE LLC, we pride ourselves on being a reliable and
            forward-thinking company. Our services encompass strategic
            consulting, efficient trade solutions, and expert guidance designed
            to optimize business performance. As a company that values trust and
            transparency, we are committed to delivering results that exceed
            expectations.
            <br />
            <br />
            With a foundation built on excellence, AMON TRADE LLC continues to
            evolve to meet the dynamic demands of the market, ensuring the
            highest standards of service for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section7;
