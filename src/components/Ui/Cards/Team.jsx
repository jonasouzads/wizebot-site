import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, role, image, twitter, facebook, linkedin }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-team-wrap">
        <div className="wizebot-team-thumb">
          <img src={image} alt={name} />
          <div className="wizebot-team-data">
            <a href="single-team.html">
              <h4>{name}</h4>
            </a>
            <p>{role}</p>
            <div className="wizebot-social-icon social-box small-box position">
              <ul>
                <li>
                  <a href={twitter} target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href={facebook} target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href={linkedin} target="_blank">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
