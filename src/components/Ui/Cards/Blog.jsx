import Link from "next/link";
import ArrowRightIcon from "../Icon/ArrowRight";

const BlogCard = (title, category, image, date, link) => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="wizebot-blog-wrap">
        <Link href={link}>
          <div className="wizebot-blog-thumb">
            <img src={image} alt="" />
            <div className="wizebot-blog-categorie">{category}</div>
          </div>
        </Link>
        <div className="wizebot-blog-data">
          <p>{date}</p>
          <Link href={link}>
            <h3>{title}</h3>
          </Link>
          <Link href={link} className="wizebot-blog-btn">
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
