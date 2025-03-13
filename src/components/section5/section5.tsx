import "./section5.scss";
import "font-awesome/css/font-awesome.min.css";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section5: React.FC = () => {
  return (
    <section className="container" id="team">
      <div className="row">
        <div className="team-info text-left">
          <h2 className="headerTextSecond">Our team</h2>
          <p className="intro">
            Our digital marketing experts are dedicated to helping you succeed.
            With a diverse skill set, we ensure seamless execution and impactful
            outcomes.
          </p>
        </div>
        <div className="team-details">
          <div className="card card-hover bg-secondary border-0 mb-4">
            <div className="card-body d-flex align-items-start">
              <div className="team-icon-wrapper">
                <i className="fa-solid fa-microchip team-icon"></i>
              </div>
              <div className="icon-details">
                <h3 className="headerText5">Cutting-Edge Technology</h3>
                <p className="card-intro">
                  Harness the latest tools and secure data systems for a
                  competitive edge in the market.
                </p>
              </div>
            </div>
          </div>
          <div className="card card-hover bg-secondary border-0 mb-4">
            <div className="card-body d-flex align-items-start">
              <div className="team-icon-wrapper">
                <i className="fa-solid fa-rectangle-ad team-icon"></i>
              </div>
              <div className="icon-details">
                <h3 className="headerText5">Expert Media Buying</h3>
                <p className="card-intro">
                  Our data-driven strategies secure prime advertising spaces,
                  boosting traffic and performance.
                </p>
              </div>
            </div>
          </div>
          <div className="card card-hover bg-secondary border-0 mb-4">
            <div className="card-body d-flex align-items-start">
              <div className="team-icon-wrapper">
                <i className="fa-solid fa-lightbulb team-icon"></i>
              </div>
              <div className="icon-details">
                <h3 className="headerText5">Imaginative Skill</h3>
                <p className="card-intro">
                  Our talented team creates visually stunning campaigns that
                  engage and build brand loyalty.
                </p>
              </div>
            </div>
          </div>
          <div className="card card-hover bg-secondary border-0 mb-4">
            <div className="card-body d-flex align-items-start">
              <div className="team-icon-wrapper">
                <FontAwesomeIcon icon={faPeopleGroup} className="team-icon" />
              </div>
              <div className="icon-details">
                <h3 className="headerText5">Collective Strength</h3>
                <p className="card-intro">
                  Our team works hand-in-hand to ensure smooth collaboration and
                  exceptional campaign results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
