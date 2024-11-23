import Image from 'next/image';
import Link from "next/link";

const BrandLogo = ({ imageSrc }) => {
  const defaultImageSrc = "/images/logo/logo-dark.svg";
  const logoSrc = imageSrc || defaultImageSrc;

  return (
    <div className="brand-logo">
      <Link href="/">
        <Image 
          src={logoSrc} 
          alt="Wizebot Logo" 
          width={150}
          height={40}
          style={{ width: 'auto', height: 'auto' }}
          className="light-version-logo"
        />
      </Link>
    </div>
  );
};

export default BrandLogo;
