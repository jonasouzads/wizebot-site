'use client';

import dynamic from 'next/dynamic';
import { memo, useCallback, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Componentes pesados carregados dinamicamente
const PaymentLogos = dynamic(() => import('./PaymentLogos'), {
  ssr: false,
  loading: () => <div className="payment-logos-placeholder" />
});

const PaymentIntegrations = memo(function PaymentIntegrations() {
  const [isVisible, setIsVisible] = useState(false);

  // Memoize animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }), []);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  // Memoize section style
  const sectionStyle = useMemo(() => ({
    background: 'var(--white)',
    padding: '50px 0',
    '@media (max-width: 768px)': {
      padding: '30px 0'
    }
  }), []);

  // Render otimizado com useMemo
  const renderContent = useMemo(() => (
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Automatize suas vendas com integrações poderosas
        </h2>
        <div className="text-gray-600 mb-12 max-w-3xl mx-auto">
          <p className="mb-1">
            A Wizebot se conecta com as principais plataformas de pagamento do mercado para recuperar vendas perdidas e aumentar sua conversão automaticamente
          </p>
          <p>
            Envie acessos aos produtos, links de pagamento e acompanhe transações em tempo real sem precisar fazer nada manualmente
          </p>
        </div>
        <div className={`payment-logos ${isVisible ? 'visible' : ''}`}>
          <PaymentLogos />
        </div>
      </motion.div>
    </div>
  ), [containerVariants, isVisible]);

  return (
    <section style={sectionStyle}>
      {renderContent}
      <style jsx>{`
        .payment-logos {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .payment-logos.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .payment-logos {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
});

PaymentIntegrations.displayName = 'PaymentIntegrations';

export default PaymentIntegrations;
