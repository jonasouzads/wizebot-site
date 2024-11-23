import Link from "next/link";

const SerciveCard = ({ title, description, icon, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-iconbox-wrap-left iconbox-left-border">
        <div className="wizebot-iconbox-icon none-bg">
          <img src={icon} alt="" />
        </div>
        <div className="wizebot-iconbox-data data-small">
          <span>{title}</span>
          <p>{description}</p>
          <Link className="wizebot-iconbox-btn" href={link}>
            <span>Saber mais</span>
            <img src="/images/icon/arrow-right2.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SerciveCard;
