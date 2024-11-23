import Image from 'next/image';

const FeatureCardTwo = ({ title, description, image, icon }) => {
  return (
    <div className="wizebot-iconbox-wrap2">
      <div className="wizebot-iconbox-icon">
        <Image 
          src={icon} 
          alt={title} 
          width={32} 
          height={32}
          style={{ width: '32px', height: '32px' }}
        />
      </div>
      <div className="wizebot-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="wizebot-iconbox-thumb">
        <Image 
          src={image} 
          alt={title}
          width={400}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default FeatureCardTwo;
