import Image from 'next/image';

const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-iconbox-wrap center">
        <div className="wizebot-iconbox-icon">
          <Image 
            src={icon} 
            alt={title} 
            width={64} 
            height={64}
            style={{ width: '100%', height: 'auto' }}
          />
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
