import Link from "next/link";

const IntegrationCard = ({ icon, name, category, description, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-iconbox-wrap-left d-block iconbox-left-border">
        <div className="wizebot-iconbox-header">
          <div className="wizebot-iconbox-icon">
            <img src={icon} alt="" />
          </div>
          <div className="wizebot-iconbox-header-data">
            <h4>{name}</h4>
            <p>{category}</p>
          </div>
        </div>
        <div className="wizebot-iconbox-data">
          <p>{description}</p>
          <Link className="wizebot-iconbox-btn" href="">
            <span>Saber mais</span>
            <img src="/images/icon/arrow-right2.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
