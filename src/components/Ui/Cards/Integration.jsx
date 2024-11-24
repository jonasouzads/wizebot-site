import Link from "next/link";
import Image from 'next/image';

const integrationsCard = ({ icon, name, category, description, link }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="wizebot-iconbox-wrap-left d-block iconbox-left-border">
        <div className="wizebot-iconbox-header">
          <div className="wizebot-iconbox-icon">
            <Image 
              src={icon} 
              alt={name} 
              width={40} 
              height={40} 
            />
          </div>
          <div className="wizebot-iconbox-header-content">
            <h4>{name}</h4>
            <span>{category}</span>
          </div>
        </div>
        <div className="wizebot-iconbox-content">
          <p>{description}</p>
        </div>
        <div className="wizebot-iconbox-btn">
          <Link href={link} target="_blank">
            <span>Ver Mais Integrações</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default integrationsCard;
