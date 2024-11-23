"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const ContentSectionFor = () => {
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
                  src="/images/v2/thumb-v2-4.gif" 
                  alt="Carrossel de Produtos no WhatsApp" 
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
              <h2>Inteligência Artificial no WhatsApp</h2>
              <p>
              Com a Wizebot, você coloca o ChatGPT a IA mais avançada do mundo dentro do seu WhatsApp,
              garantindo respostas rápidas e precisas para seus clientes enquanto
              você aproveita seu tempo livre ou adianta outras tarefas.
              Deixe a automação cuidar do seu atendimento!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionFor;
