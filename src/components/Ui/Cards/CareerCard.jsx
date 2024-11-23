import Link from "next/link";

const CareerCard = ({ job }) => {
  return (
    <div className="wizebot-jobs-item">
      <div className="wizebot-jobs-item-content">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
      </div>
      <div className="wizebot-jobs-item-content">
        <span>{job.location}</span>
        <span>
          {job.type}, Salary: {job.salary}
        </span>
      </div>
      <div className="wizebot-jobs-item-content">
        <div className="wizebot-jobs-apply-btn">
          <Link className="wizebot-default-btn" href="contact-us">
            <span>Apply now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
