import React from "react";

import product1 from "../../assets/img/product2.webp";
import product2 from "../../assets/img/product1.webp";
import product3 from "../../assets/img/product3.webp";

import "./Products.scss"; // Import the SCSS file

const Products: React.FC = () => {
  return (
    <section className="section4">
      <div className="container" id="marketing-fields">
        <h2 className="headerText">Our Products</h2>
        <div className="fieldsM">
          {/* Field Item 1 */}
          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={product1} alt="Tech Development" />
              </div>
              {/* <h2 className="h4">Technology Solutions</h2>
              <p className="text-muted">
                We offer unique tech solutions that allow seamless management of
                complex data in one click, using advanced technologies that set
                us apart from competitors.
              </p> */}
            </div>
          </div>

          {/* Field Item 2 */}
          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={product2} alt="Media buying" />
              </div>
              {/* <h2 className="h4">Advertising Procurement</h2>
              <p className="text-muted">
                With a team of skilled media buyers, we manage large budgets to
                acquire quality leads on social and native networks daily.
              </p> */}
            </div>
          </div>

          <div className="card-item field-item">
            <div className="card-body">
              <div className="bimg">
                <img src={product3} alt="Media buying" />
              </div>
              {/* <h2 className="h4">Advertising Procurement</h2>
              <p className="text-muted">
                With a team of skilled media buyers, we manage large budgets to
                acquire quality leads on social and native networks daily.
              </p> */}
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
    </section>
  );
};

export default Products;
