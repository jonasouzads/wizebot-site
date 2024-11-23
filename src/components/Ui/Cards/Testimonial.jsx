/* eslint-disable react/no-unescaped-entities */

const TestimonialCard = ({ title, description, avatar, name, role }) => {
  return (
    <div className="col-lg-6">
      <div className="wizebot-testimonial-wrap">
        <div className="wizebot-testimonial-rating">
          <ul>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="wizebot-testimonial-data">
          <h3>{title}</h3>
          <p>"{description}"</p>
        </div>
        <div className="wizebot-testimonial-author">
          <div className="wizebot-testimonial-author-thumb">
            <img src={avatar} alt="" />
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
