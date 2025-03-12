import React from "react";

import mf1 from "../../assets/img/mf1.png";
import mf2 from "../../assets/img/mf2.png";
import mf3 from "../../assets/img/mf2.png";
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
              <h2 className="h4">Tech Development</h2>
              <p className="text-muted">
                Our company has its own Tech Solution, which allows you to
                manage a huge layer of information in 1 click, which has no
                analogues on the market and is created using advanced
                technologies.
              </p>
            </div>
          </div>

          {/* Field Item 2 */}
          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={mf2} alt="Media buying" />
              </div>
              <h2 className="h4">Media buying</h2>
              <p className="text-muted">
                Our team consists of more than 80 experienced media buyers who
                daily acquire leads in social and native networks, operating
                with large budgets.
              </p>
            </div>
          </div>

          {/* Field Item 3 */}
          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={mf3} alt="Creative agency" />
              </div>
              <h2 className="h4">Creative agency</h2>
              <p className="text-muted">
                A creative agency consisting of Media Hunter, a team of talented
                Motion Design and Graphic Design, and more than 100 of its own
                UGC-creators from around the world.
                <br />
                <br />
                Our Agency does more than 3,000 unique creatives per day
                creating content for our happy clients.
                <br />
                <br />
                Our team has its own Compliance service that ensures compliance
                with all strict advertising requirements from our partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerThree" id="services">
        <h2 className="headerTextSecond">Our Services</h2>
        <div className="intro">
          <p className="text-muted">
            With our comprehensive suite of services, we empower businesses to
            thrive in today's dynamic and competitive landscape. Let us be your
            trusted partner in achieving unprecedented success in the digital
            realm.
          </p>
        </div>

        <div className="services">
          {/* Service Item 1 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-magnifying-glass-dollar"></i>
              </div>
              <h2 className="h4">Search Traffic Services</h2>
              <p className="text-muted">
                Our search traffic services are designed to increase website
                visibility, attract quality leads, and drive conversions. By
                focusing on search engine optimization, we ensure that our
                partners' online presence reaches its full potential.
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h2 className="h4">Digital Marketing</h2>
              <p className="text-muted">
                From social media marketing and product development to email
                campaigns and pay-per-click advertising, our comprehensive
                digital marketing services cover promoting brands across the
                digital realm.
              </p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-globe"></i>
              </div>
              <h2 className="h4">Global Approach</h2>
              <p className="text-muted">
                Reach out and win new markets with our global marketing
                solutions. We have the tools and expertise to navigate the
                challenges of international marketing, helping to connect with a
                global audience.
              </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="card-item service-item">
            <div className="card-body">
              <div className="service-icon bg-primary">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <h2 className="h4">Data Analytics</h2>
              <p className="text-muted">
                Our data analytics services provide valuable insights into
                customer behavior, market trends, and business metrics. We use
                this data to optimize marketing strategy and deliver the best
                results for businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
