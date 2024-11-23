/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';

const TestimonialCard = ({ title, description, avatar, name, role }) => {
  return (
    <div className="col-lg-6">
      <div className="wizebot-testimonial-wrap">
        <div className="wizebot-testimonial-rating">
          <ul>
            <li>
              <Image src="/images/icon/star-green.svg" alt="Star Rating" width={16} height={16} />
            </li>
            <li>
              <Image src="/images/icon/star-green.svg" alt="Star Rating" width={16} height={16} />
            </li>
            <li>
              <Image src="/images/icon/star-green.svg" alt="Star Rating" width={16} height={16} />
            </li>
            <li>
              <Image src="/images/icon/star-green.svg" alt="Star Rating" width={16} height={16} />
            </li>
            <li>
              <Image src="/images/icon/star-green.svg" alt="Star Rating" width={16} height={16} />
            </li>
          </ul>
        </div>
        <div className="wizebot-testimonial-data">
          <h3>{title}</h3>
          <p>"{description}"</p>
        </div>
        <div className="wizebot-testimonial-author">
          <div className="wizebot-testimonial-author-thumb">
            <Image 
              src={avatar} 
              alt={name} 
              width={50} 
              height={50}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="wizebot-testimonial-author-data">
            <span>{name}</span>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
