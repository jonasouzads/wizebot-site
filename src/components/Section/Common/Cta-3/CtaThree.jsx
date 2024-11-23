import Link from "next/link";

const CtaThree = ({ title, btnText }) => {
  return (
    <div className="section wizebot-section-padding dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="wizebot-default-content cta light">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            <div className="wizebot-title-btn">
              <Link className="wizebot-default-btn" href="single-team">
                <span>{btnText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaThree;
