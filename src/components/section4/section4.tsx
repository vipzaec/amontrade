import React from "react";

import mf1 from "../../assets/img/mf1.png";
import mf2 from "../../assets/img/mf2.png";
import "./section4.scss"; // Import the SCSS file

const Section4: React.FC = () => {
  return (
    <section className="section4">
      <div className="container" id="marketing-fields">
        <h2 className="headerText">Our marketing fields</h2>
        <div className="fieldsM">
          {/* Field Item 1 */}
          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={mf1} alt="Tech Development" />
              </div>
              <h2 className="h4">Technology Solutions</h2>
              <p className="text-muted">
                We offer unique tech solutions that allow seamless management of
                complex data in one click, using advanced technologies that set
                us apart from competitors.
              </p>
            </div>
          </div>

          {/* Field Item 2 */}
          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={mf2} alt="Media buying" />
              </div>
              <h2 className="h4">Advertising Procurement</h2>
              <p className="text-muted">
                With a team of skilled media buyers, we manage large budgets to
                acquire quality leads on social and native networks daily.
              </p>
            </div>
          </div>

          {/* Field Item 3 */}
          {/* <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={mf3} alt="Creative agency" />
              </div>
              <h2 className="h4">Creative agency</h2>
              <p className="text-muted">
                Our agency produces over 3,000 unique creatives per day,
                combining motion design, graphic design, and a global network of
                UGC creators. We help brands stand out with tailored,
                high-quality content.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="containerThree" id="services">
        <h2 className="headerTextSecond">Our Services</h2>
        <div className="intro">
          <p className="text-muted">
            We provide a comprehensive suite of services designed to help
            businesses thrive in today’s competitive digital world. Trust us to
            be your partner in achieving success across various sectors.
          </p>
        </div>

        <div className="services">
          {/* Service Item 1 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-magnifying-glass-dollar"></i>
              </div>
              <h2 className="h4">Digital Audience Growth</h2>
              <p className="text-muted">
                We optimize your online presence through advanced search engine
                strategies, ensuring maximum visibility, attracting quality
                leads, and driving conversions.
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h2 className="h4">Online Advertising Solutions</h2>
              <p className="text-muted">
                From social media to PPC campaigns, our team offers a full range
                of services to promote your brand across all digital platforms.
              </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <h2 className="h4">Business Intelligence Analysis</h2>
              <p className="text-muted">
                Leverage data-driven insights to fine-tune strategies,
                understand customer behaviors, and make informed decisions for
                superior results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
