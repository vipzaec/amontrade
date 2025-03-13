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
                    <b>
                      AMON TRADE LLC{" "}
                      <a href="mailto:OSHF23@gmail.com" className="email-link">
                        OSHF23@gmail.com
                      </a>
                    </b>
                  </div>
                  <div>TEL: +13058137003 </div>
                  <div>Mailing address: 7901 4th St N, STE 300</div>
                  <div>Address: St Petersburg, FL 33702, Pinellas, FL</div>
                  <div>OLEKSANDR ZAITSEV</div>
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
