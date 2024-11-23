import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-team-wrap">
        <div className="wizebot-team-thumb">
          <img src={member?.image} alt={member?.name} />
          <div className="wizebot-team-data">
            <h4>{member?.name}</h4>
            <p>{member?.role}</p>
            <div className="wizebot-social-icon social-box small-box position">
              <ul>
                <li>
                  <a href={member?.social?.facebook} target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href={member?.social?.twitter} target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href={member?.social?.linkedin} target="_blank">
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
