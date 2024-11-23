import Link from "next/link";
import Image from 'next/image';

const IntegrationCard = ({ icon, name, category, description, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-iconbox-wrap-left d-block iconbox-left-border">
        <div className="wizebot-iconbox-header">
          <div className="wizebot-iconbox-icon">
            <Image 
              src={icon} 
              alt={name} 
              width={48} 
              height={48}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="wizebot-iconbox-header-data">
            <h4>{name}</h4>
            <p>{category}</p>
          </div>
        </div>
        <div className="wizebot-iconbox-data">
          <p>{description}</p>
          <Link className="wizebot-iconbox-btn" href={link || ""}>
            <span>Saber mais</span>
            <Image 
              src="/images/icon/arrow-right2.svg" 
              alt="Arrow Right" 
              width={16} 
              height={16}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
