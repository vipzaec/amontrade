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
        <h2 className="headerText text-left sm:text-center">About Us</h2>
      </div>
      <div className="about-us-row">
        <div className="about-us-image">
          <img src={aboutus} alt="About Us" />
        </div>
        <div className="about-us-content">
          <p className="intro">
            <b>SBC Digital</b> is a DBA (Doing Business As) of SBBC Health LLC.
            We specialize in digital marketing, performance analytics, and media
            buying. Our mission is to provide innovative solutions to help
            businesses grow online and succeed in the digital space. Founded to
            meet the unique needs of companies across the U.S., SBC Digital
            offers comprehensive services tailored to drive brand growth,
            customer engagement, and measurable results.
          </p>
          <p className="intro">
            <b>About Our DBA – SBC Digital:</b>
            <br />
            We are proud to announce that SBBC Health LLC now operates under the
            trade name SBC Digital to better reflect our focus on digital
            marketing and consulting services. Although our legal name remains
            SBBC Health LLC, all services and communications will be conducted
            under the SBC Digital name. This transition streamlines our brand
            identity, providing a cohesive experience for our clients.
            <br />
            <br />
            For legal and contractual purposes, please note that SBC Digital is
            a DBA of SBBC Health LLC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section7;
