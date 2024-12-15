"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const ContentSectionSix = () => {
  return (
    <div className="section wizebot-section-padding5 overflow-hidden">
      <div className="container position-relative">
        <div className="row">
          <motion.div 
            className="col-lg-5 order-lg-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-v2-thumb thumb-ml">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/images/v2/thumb-v2-6.gif" 
                  alt="API HTTP Integração" 
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-default-content">
              <h2>API Integrada</h2>
              <p>
                Potencialize seu chatbot com integrações avançadas via API HTTP. 
                Conecte sistemas, sincronize dados e automatize processos usando 
                métodos REST padrão (GET, POST, PUT, PATCH, DELETE). Ideal para empresas que 
                precisam de uma solução robusta e personalizada de automação no WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionSix;
