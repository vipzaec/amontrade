import React from "react";
import logo from "../../assets/img/logo.png"; // Import the logo
import man from "../../assets/img/man.jpg"; // Import the logo

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-center items-center">
      <div className="container max-w-[1320px] p-[60px]!">
        <div className="row flex-row flex mb-[5rem]!">
          {/* Left Column */}
          <div className="col-lg-4 col-md-4 flex justify-between  w-full  flex-col sm:flex-row  ">
            <div className=" max-w-[500px] mb-10 sm:mb-0">
              <div className="navbar-brand mb-9">
                <img src={logo} alt="SBC Digital" className="logo" />
              </div>
              <p className="footer-description text-left">
                We are your gateway to a thriving global marketing ecosystem. As
                a leading provider of digital marketing and search traffic
                services, we pride ourselves on delivering unparalleled results.
              </p>
            </div>
            <div>
              <img src={man}></img>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="footer-links">
              {/* Social Links Section */}
              <div className="footer-section">
                <h6 className="max-w-[300px]"></h6>
                <ul className="nav">
                  {/* <li>
                    <a
                      href="https://www.linkedin.com/company/sbcdigital/"
                      className="footer-link"
                    >
                      LinkedIn
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex flex-row justify-between">
          <p className="all-rights">
            © 2023 AMON TRADE LLC
            <br />
            All rights reserved.
          </p>
          <p className="footer-address">
            AMON TRADE LLC
            <br />
            Petersburg, FL 33702, Pinellas County, FL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
