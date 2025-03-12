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
            Our team of digital marketing specialists is the backbone of SBC
            Digital. We bring a variety of skills and experiences to the table.
            Count on our team to be your trusted partners in achieving digital
            success.
          </p>
        </div>
        <div className="team-details">
          <div className="card card-hover bg-secondary border-0 mb-4">
            <div className="card-body d-flex align-items-start">
              <div className="team-icon-wrapper">
                <i className="fa-solid fa-microchip team-icon"></i>
              </div>
              <div className="icon-details">
                <h3 className="headerText">Advanced Tech</h3>
                <p className="card-intro">
                  Cutting-edge tools, skilled developers, and data security give
                  a competitive edge.
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
                <h3 className="headerText">Media Buying Mastery</h3>
                <p className="card-intro">
                  Data-driven strategies secure prime ad spaces, driving
                  substantial traffic.
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
                <h3 className="headerText">Creative Prowess</h3>
                <p className="card-intro">
                  Talented designers create captivating campaigns, fostering
                  brand loyalty.
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
                <h3 className="headerText">Collaborative Synergy</h3>
                <p className="card-intro">
                  Teams work together for seamless campaigns, delivering
                  unparalleled results.
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
