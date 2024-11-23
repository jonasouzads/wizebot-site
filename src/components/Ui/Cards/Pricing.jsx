import Image from 'next/image';
import Link from "next/link";

const PricingCard = () => {
  return (
    <div className="wizebot-pricing-wrap active">
      <div className="wizebot-pricing-header">
        <h5>Standard</h5>
      </div>
      <div className="wizebot-pricing-price">
        <h2>$</h2>
        <div
          className="wizebot-price dynamic-value"
          data-active="49"
          data-monthly="49"
          data-yearly="69"
        ></div>
        <p
          className="dynamic-value"
          data-active="USD/Billed monthly"
          data-monthly="USD/Billed monthly"
          data-yearly="USD/Billed Yearly"
        ></p>
      </div>
      <div className="wizebot-pricing-description">
        <p>Great for small and medium teams</p>
      </div>
      <div className="wizebot-pricing-body">
        <ul>
          <li>
            <Image 
              src="/images/v2/check2.png" 
              alt="Check mark" 
              width={24}
              height={24}
              style={{ width: 'auto', height: 'auto' }}
            />
            All multimedia channels
          </li>
          <li>
            <Image 
              src="/images/v2/check2.png" 
              alt="Check mark" 
              width={24}
              height={24}
              style={{ width: 'auto', height: 'auto' }}
            />
            All advanced CRM features
          </li>
          <li>
            <Image 
              src="/images/v2/check2.png" 
              alt="Check mark" 
              width={24}
              height={24}
              style={{ width: 'auto', height: 'auto' }}
            />
            Up to 15,000 contacts
          </li>
          <li>
            <Image 
              src="/images/v2/check2.png" 
              alt="Check mark" 
              width={24}
              height={24}
              style={{ width: 'auto', height: 'auto' }}
            />
            Flow + AI base chatbot
          </li>
          <li>
            <Image 
              src="/images/v2/check2.png" 
              alt="Check mark" 
              width={24}
              height={24}
              style={{ width: 'auto', height: 'auto' }}
            />
            24/7 Support (Live, Email, Chat)
          </li>
        </ul>
      </div>
      <Link href="pricing" className="wizebot-pricing-btn">
        Select the plan
      </Link>
    </div>
  );
};

export default PricingCard;
