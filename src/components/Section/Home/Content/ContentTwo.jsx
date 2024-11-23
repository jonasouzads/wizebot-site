"use client";
import { motion } from "framer-motion";

const ContentSectionTwo = () => {
  return (
    <div className="section wizebot-section-padding5">
      <div className="container">
        <div className="row">
          <motion.div 
            className="col-lg-5 order-lg-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="wizebot-v2-thumb thumb-ml">
              <motion.img 
                src="/images/v2/thumb-v2-2.png" 
                alt="Carrossel de Produtos no WhatsApp" 
                className="img-fluid rounded-4 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
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
