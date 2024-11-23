const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-iconbox-wrap center">
        <div className="wizebot-iconbox-icon">
          <img src={icon} alt={title} />
        </div>
        <div className="wizebot-iconbox-data">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
