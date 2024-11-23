"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const ContentSectionTree = () => {
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
                  src="/images/v2/thumb-v2-1.png" 
                  alt="Reescrita com IA" 
                  className="img-fluid rounded-4 shadow-lg"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-7 d-flex align-items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-default-content">
              <h2>Reescreva<br/>com IA</h2>
              <p>
                Evite erros e garanta uma comunicação profissional com seus clientes. 
                A função de reescrita com IA da Wizebot corrige e melhora automaticamente 
                as mensagens digitadas pelos atendentes, garantindo que cada interação 
                seja clara, sem erros e alinhada ao tom ideal da sua marca.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTree;