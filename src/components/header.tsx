import React from "react";
import "./Header.scss"; // Import the SCSS file
import logo from "../../src/assets/img/logo.png";

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Side: Buttons for scrolling */}
        <div className="logo-nav-container">
          <img src={logo} alt="React logo" className="logo" />

          <nav className="nav">
            <button
              onClick={() => scrollToSection("mission")}
              className="nav-button"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("marketing-fields")}
              className="nav-button"
            >
              Marketing Fields
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-button"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="nav-button"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="nav-button"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="nav-button"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="nav-button"
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Right Side: Contact Me button */}
        <a
          href="mailto:example@gmail.com"
          className="contact-button text-nowrap"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
