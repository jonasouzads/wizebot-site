"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const ContentSectionFive = () => {
  return (
    <div className="section wizebot-section-padding5 overflow-hidden">
      <div className="container position-relative">
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-v2-thumb d-flex justify-content-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/images/v2/thumb-v2-5.gif" 
                  alt="WhatsApp Flows" 
                  className="img-fluid rounded-4 shadow-lg"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-default-content ps-lg-4">
              <h2>WhatsApp Flows</h2>
              <p>
                Crie experiências mais integradas e personalizadas para seus clientes. 
                Com o WhatsApp Flows, você simplifica processos, desde cadastros até ofertas 
                personalizadas, tornando a jornada do cliente mais prática e eficiente. 
                Aumente suas conversões com uma experiência avançada direto no WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionFive;
