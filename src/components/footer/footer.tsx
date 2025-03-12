import React from "react";
import logo from "../../assets/img/logo.png"; // Import the logo

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-center items-center">
      <div className="container max-w-[1320px] p-[60px]!">
        <div className="row flex-row flex mb-[5rem]!">
          {/* Left Column */}
          <div className="col-lg-4 col-md-4 max-w-[500px]">
            <div className="navbar-brand">
              <img src={logo} alt="SBC Digital" className="logo" />
            </div>
            <p className="footer-description text-left">
              We are your gateway to a thriving global marketing ecosystem. As a
              leading provider of digital marketing and search traffic services,
              we pride ourselves on delivering unparalleled results.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="footer-links">
              {/* Social Links Section */}
              <div className="footer-section">
                <h6 className="max-w-[300px]"></h6>
                <ul className="nav">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/sbcdigital/"
                      className="footer-link"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex flex-row justify-between">
          <p className="all-rights">
            © 2025
            <br />
            All rights reserved.
          </p>
          <p className="footer-address">
            SBC Digital, a DBA of SBBC Health LLC
            <br />
            571 S Washington, Afton, WY 83110, USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
