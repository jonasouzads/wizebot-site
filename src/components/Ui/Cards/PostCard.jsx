import Image from 'next/image';

const PostCard = () => {
    return (
        <div className="widget wizebot_recent_posts_Widget">
        <h3 className="wp-block-heading">Recent Posts:</h3>
        <div className="post-item">
          <div className="post-thumb">
            <a href="">
              <Image 
                src="/images/blog/blog1.png" 
                alt="7 businesses for easy money"
                width={100}
                height={75}
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
          </div>
          <div className="post-text">
            <div className="post-date">
              June 18, 2024
            </div>
            <a className="post-title" href="">7 businesses for easy money</a>
          </div>
        </div>
        <div className="post-item">
          <div className="post-thumb">
            <a href="">
              <Image 
                src="/images/blog/blog2.png" 
                alt="My 3 tips for business ideas"
                width={100}
                height={75}
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
          </div>
          <div className="post-text">
            <div className="post-date">
              June 18, 2024
            </div>
            <a className="post-title" href="">My 3 tips for business ideas</a>
          </div>
        </div>
        <div className="post-item">
          <div className="post-thumb">
            <a href="">
              <Image 
                src="/images/blog/blog3.png" 
                alt="12 Halloween costume ideas"
                width={100}
                height={75}
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
          </div>
          <div className="post-text">
            <div className="post-date">
              June 18, 2024
            </div>
            <a className="post-title" href="">12 Halloween costume ideas</a>
          </div>
        </div>
      </div>
    );
};

export default PostCard;