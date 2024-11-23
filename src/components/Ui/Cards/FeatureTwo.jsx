const FeatureCardTwo = ({ title, description, image, icon }) => {
  return (
    <div className="wizebot-iconbox-wrap2">
      <div className="wizebot-iconbox-icon">
        <img src={icon} alt="" />
      </div>
      <div className="wizebot-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="wizebot-iconbox-thumb">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default FeatureCardTwo;
