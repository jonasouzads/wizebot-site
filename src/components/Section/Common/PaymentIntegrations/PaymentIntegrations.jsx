"use client";
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const LogoItem = memo(({ logo, index, rowIndex }) => (
  <div className="logo-item">
    <Image
      src={logo}
      alt={`Payment Platform ${index + 1 + (rowIndex * 10)}`}
      width={120}
      height={40}
      className="payment-logo"
      loading={index < 6 ? "eager" : "lazy"}
      priority={index < 3}
      style={{ filter: 'none' }}
      quality={75}
    />
  </div>
));

LogoItem.displayName = 'LogoItem';

const PaymentIntegrations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const logos = useMemo(() => ({
    row1: [
      '/images/payment/logo (1).png',
      '/images/payment/logo (2).png',
      '/images/payment/logo (3).png',
      '/images/payment/logo (4).png',
      '/images/payment/logo (5).png',
      '/images/payment/logo (6).png',
      '/images/payment/logo (7).png',
      '/images/payment/logo (8).png',
      '/images/payment/logo (9).png',
      '/images/payment/logo (10).png',
    ],
    row2: [
      '/images/payment/logo (11).png',
      '/images/payment/logo (12).png',
      '/images/payment/logo (13).png',
      '/images/payment/logo (14).png',
      '/images/payment/logo (15).png',
      '/images/payment/logo (16).png',
      '/images/payment/logo (17).png',
      '/images/payment/logo (18).png',
      '/images/payment/logo (19).png',
      '/images/payment/logo (20).png',
    ],
    row3: [
      '/images/payment/logo (21).png',
      '/images/payment/logo (22).png',
      '/images/payment/logo (23).png',
      '/images/payment/logo (24).png',
      '/images/payment/logo (25).png',
      '/images/payment/logo (26).png',
      '/images/payment/logo (27).png',
      '/images/payment/logo (28).png',
      '/images/payment/logo (29).png',
      '/images/payment/logo (30).png',
    ],
  }), []);

  const renderLogoRow = useCallback((rowKey, rowLogos, rowIndex) => (
    <div key={rowKey} className={`logo-row ${rowIndex % 2 === 0 ? 'slide-right' : 'slide-left'}`}>
      <div className="logo-track">
        {[...rowLogos].map((logo, index) => (
          <LogoItem
            key={`${rowKey}-${index}`}
            logo={logo}
            index={index}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </div>
  ), []);

  return (
    <div className="wizebot-payment-integrations">
      <div className="container">
        <div className="description-text">
          <p>
            Faça recuperação de vendas perdidas e aumente sua taxa de conversão com nossas integrações. 
            Envie automaticamente acesso aos produtos, links de pagamento e acompanhe o status das transações 
            em tempo real através das principais plataformas do mercado.
          </p>
        </div>
        <div className={`wizebot-payment-logos ${isVisible ? 'visible' : ''}`}>
          {Object.entries(logos).map(([rowKey, rowLogos], rowIndex) => 
            renderLogoRow(rowKey, rowLogos, rowIndex)
          )}
        </div>
      </div>
      <style jsx>{`
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          will-change: transform;
        }

        .logo-track {
          display: flex;
          align-items: center;
          transform: translateZ(0);
        }

        @media (max-width: 768px) {
          .logo-item {
            padding: 0 8px;
          }
          
          :global(.payment-logo) {
            width: 90px !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(PaymentIntegrations);
