"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const ContentSectionTwo = () => {
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
                  src="/images/v2/thumb-v2-2.gif" 
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
              <h2>Carrossel de Produtos no WhatsApp</h2>
              <p>
                Se você tem uma loja virtual ou e-commerce, a Wizebot permite criar carrosséis 
                de produtos diretamente no WhatsApp. Ideal para promover seus produtos e fazer 
                campanhas personalizadas, tornando a experiência de compra mais fácil e 
                interativa para seus clientes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
