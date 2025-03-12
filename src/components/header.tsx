import React from "react";
import "./Header.scss"; // Import the SCSS file
import reactLogo from "../../src/assets/react.svg";

interface HeaderProps {
  section1Ref: React.RefObject<HTMLDivElement | null>;
  section2Ref: React.RefObject<HTMLDivElement | null>;
  section3Ref: React.RefObject<HTMLDivElement | null>;
}

const Header: React.FC<HeaderProps> = ({
  section1Ref,
  section2Ref,
  section3Ref,
}: {
  section1Ref: React.RefObject<HTMLDivElement | null>;
  section2Ref: React.RefObject<HTMLDivElement | null>;
  section3Ref: React.RefObject<HTMLDivElement | null>;
}) => {
  console.log(reactLogo);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Side: Buttons for scrolling */}
        <div className="logo-nav-container">
          <img src={reactLogo} alt="React logo" className="logo" />

          <nav className="nav">
            <button
              onClick={() => scrollToSection(section1Ref)}
              className="nav-button"
            >
              Section 1
            </button>
            <button
              onClick={() => scrollToSection(section2Ref)}
              className="nav-button"
            >
              Section 2
            </button>
            <button
              onClick={() => scrollToSection(section3Ref)}
              className="nav-button"
            >
              Section 3
            </button>
          </nav>
        </div>

        {/* Right Side: Contact Me button */}
        <a href="mailto:example@gmail.com" className="contact-button">
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
