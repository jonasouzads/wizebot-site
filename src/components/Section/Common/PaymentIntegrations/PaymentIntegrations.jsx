"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const PaymentIntegrations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const logos = {
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
  };

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
          <div className="logo-row slide-right">
            <div className="logo-track">
              {[...logos.row1, ...logos.row1].map((logo, index) => (
                <div key={index} className="logo-item">
                  <Image
                    src={logo}
                    alt={`Payment Platform ${index + 1}`}
                    width={120}
                    height={40}
                    className="payment-logo"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-row slide-left">
            <div className="logo-track">
              {[...logos.row2, ...logos.row2].map((logo, index) => (
                <div key={index} className="logo-item">
                  <Image
                    src={logo}
                    alt={`Payment Platform ${index + 11}`}
                    width={120}
                    height={40}
                    className="payment-logo"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-row slide-right">
            <div className="logo-track">
              {[...logos.row3, ...logos.row3].map((logo, index) => (
                <div key={index} className="logo-item">
                  <Image
                    src={logo}
                    alt={`Payment Platform ${index + 21}`}
                    width={120}
                    height={40}
                    className="payment-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIntegrations;
