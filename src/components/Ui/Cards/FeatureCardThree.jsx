const FeatureCardThree = ({ feature }) => {
    return (
        <div className="col-xl-4 col-md-6">
        <div className="wizebot-iconbox-wrap-left iconbox-left-border">
          <div className="wizebot-iconbox-icon none-bg">
            <img src={feature.icon} alt={feature.title} />
          </div>
          <div className="wizebot-iconbox-data data-small">
            <span>{feature.title}</span>
            <p>{feature.description}</p>
          </div>
        </div>
      </div>
    );
};

export default FeatureCardThree;