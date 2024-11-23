import Image from 'next/image';

const FeatureCardThree = ({ feature }) => {
    return (
        <div className="col-xl-4 col-md-6">
        <div className="wizebot-iconbox-wrap-left iconbox-left-border">
          <div className="wizebot-iconbox-icon none-bg">
            <Image 
              src={feature.icon} 
              alt={feature.title}
              width={48}
              height={48}
              style={{ width: '100%', height: 'auto' }}
            />
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