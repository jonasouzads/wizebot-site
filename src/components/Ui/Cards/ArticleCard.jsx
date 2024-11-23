import Link from "next/link";
import ArrowRightIcon from "../Icon/ArrowRight";

const ArticleCard = ({ article }) => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="wizebot-blog-wrap">
        <Link href={article.link}>
          <div className="wizebot-blog-thumb">
            <img src={article.image} alt="" />
            <div className="wizebot-blog-categorie">{article.category}</div>
          </div>
        </Link>
        <div className="wizebot-blog-data">
          <p>{article.date}</p>
          <Link href={article.link}>
            <h3>{article.title}</h3>
          </Link>
          <Link className="wizebot-blog-btn" href={article.link}>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
