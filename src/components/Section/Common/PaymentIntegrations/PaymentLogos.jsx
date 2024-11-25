'use client';

import { memo, useCallback, useMemo } from 'react';
import Image from 'next/image';

const LogoItem = memo(({ logo, index }) => (
  <div className="logo-item">
    <Image
      src={logo}
      alt={`Payment Integration ${index + 1}`}
      width={100}
      height={40}
      loading={index < 3 ? "eager" : "lazy"}
      priority={index < 3}
      quality={60}
      style={{ 
        objectFit: 'contain', 
        width: 'auto', 
        height: 'auto', 
        maxWidth: '100%', 
        maxHeight: '40px',
        willChange: 'transform'
      }}
    />
  </div>
));

LogoItem.displayName = 'LogoItem';

const PaymentLogos = memo(function PaymentLogos() {
  // Reduzido número de logos por linha para melhor performance
  const logos = useMemo(() => ({
    row1: [
      '/images/payment/logo (1).png',
      '/images/payment/logo (2).png',
      '/images/payment/logo (3).png',
      '/images/payment/logo (4).png',
      '/images/payment/logo (5).png',
      '/images/payment/logo (6).png',
    ],
    row2: [
      '/images/payment/logo (7).png',
      '/images/payment/logo (8).png',
      '/images/payment/logo (9).png',
      '/images/payment/logo (10).png',
      '/images/payment/logo (11).png',
      '/images/payment/logo (12).png',
    ],
    row3: [
      '/images/payment/logo (13).png',
      '/images/payment/logo (14).png',
      '/images/payment/logo (15).png',
      '/images/payment/logo (16).png',
      '/images/payment/logo (17).png',
      '/images/payment/logo (18).png',
    ],
  }), []);

  const renderLogoRow = useCallback((rowKey, rowLogos, rowIndex) => (
    <div key={rowKey} className={`logo-row ${rowIndex % 2 === 0 ? 'slide-right' : 'slide-left'}`}>
      <div className="logo-track">
        {[...rowLogos, ...rowLogos].map((logo, index) => (
          <LogoItem
            key={`${rowKey}-${index}`}
            logo={logo}
            index={index}
          />
        ))}
      </div>
    </div>
  ), []);

  return (
    <div className="payment-logos">
      {Object.entries(logos).map(([rowKey, rowLogos], rowIndex) => 
        renderLogoRow(rowKey, rowLogos, rowIndex)
      )}
      <style jsx>{`
        .payment-logos {
          overflow: hidden;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          contain: content;
        }
        .logo-row {
          margin-bottom: 30px;
          overflow: hidden;
          contain: content;
        }
        .logo-track {
          display: flex;
          gap: 40px;
          animation: slide 40s linear infinite;
          align-items: center;
          contain: layout style paint;
          transform: translateZ(0);
          will-change: transform;
        }
        .slide-right .logo-track {
          animation-direction: normal;
          animation-play-state: running;
        }
        .slide-left .logo-track {
          animation-direction: reverse;
          animation-play-state: running;
        }
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        :global(.logo-item) {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          min-width: 120px;
          height: 50px;
          contain: layout style;
        }
        @media (max-width: 768px) {
          .logo-track {
            gap: 20px;
          }
          :global(.logo-item) {
            min-width: 100px;
            height: 40px;
            padding: 0 5px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
});

PaymentLogos.displayName = 'PaymentLogos';

export default PaymentLogos;
