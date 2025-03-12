import React from "react";
import "./section8.scss"; // Import your SCSS styles

const Section8: React.FC = () => {
  return (
    <section id="contact-us" className="contact-us-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 p-[3rem]">
            <div className="contact-info">
              <h1 className="contact-header">Contact Us</h1>

              <div className="contact-details">
                <div className="contacts">
                  <p className="contact-description">
                    Do not hesitate to contact our friendly team with questions,
                    consultation requests, or any information you may need.
                  </p>
                  <div>
                    <b>SBC Digital (a DBA of SBBC Health LLC)</b>
                  </div>
                  <div>571 S Washington, Afton, WY, 83110</div>
                  <div>Phone: (331) 249-3543</div>
                  <div className="contact-email">
                    <a href="mailto:welcome@sbc-digital.com">
                      welcome@sbc-digital.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
