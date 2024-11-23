"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";

const ContentSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("wizebot-counter");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section wizebot-section-padding2 overflow-hidden">
      <div id="wizebot-counter"></div>
      <div className="container position-relative">
        <div className="row align-items-center justify-content-center">
          <motion.div 
            className="col-lg-5 text-center mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-v2-thumb">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/images/v2/thumb-v2-1.png" 
                  alt="WhatsApp Disparos em Massa" 
                  width={600}
                  height={400}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="wizebot-default-content text-center text-lg-start ps-lg-4">
              <h2>Disparo em massa sem banimentos</h2>
              <p>
                Se na hora de abrir o carrinho ou avisar sobre a live seus números
                caem, isso pode ser por uso de ferramentas não autorizadas.
                Com a Wizebot, você faz disparos seguros e mantém suas operações
                dentro das regras do WhatsApp.
              </p>
              <div className="d-flex gap-5">
                <div className="text-start">
                  <h3 className="fs-3 mb-1" style={{ fontSize: '120%' }}>
                    <span className="wizebot-counter fw-bold">
                      {isVisible ? <CountUp end={99} duration={2.5} /> : 99}
                    </span>
                    %
                  </h3>
                  <p className="mb-0 text-muted">Taxa de entrega de mensagens</p>
                </div>
                <div className="text-start">
                  <h3 className="fs-3 mb-1" style={{ fontSize: '120%' }}>
                    <span className="wizebot-counter fw-bold">
                      {isVisible ? <CountUp end={3.5} decimals={1} duration={2.5} /> : 3.5}
                    </span>
                    X
                  </h3>
                  <p className="mb-0 text-muted">Aumente o alcance das suas campanhas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
