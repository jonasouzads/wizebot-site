"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "~/assets/css/meta-partnership.css";
import Link from "next/link";

const MetaPartnership = () => {
  return (
    <div className="wizebot-meta-partnership-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="row justify-content-center text-center"
        >
          <div className="col-xl-10">
            <div className="wizebot-meta-partnership-content">
              <h2 className="wizebot-section-title">Parceiro Oficial Meta</h2>
              <p className="wizebot-section-text">
                A Wizebot é um parceiro oficial certificado pela Meta, garantindo a mais alta qualidade
                e confiabilidade em soluções para WhatsApp Business. Nossa parceria nos permite
                oferecer recursos avançados e suporte especializado para impulsionar seu negócio.
              </p>
              <Link 
                href="https://www.facebook.com/business/partner-directory/search?solution_type=campaign_management&id=7294219637349954&section=overview" 
                target="_blank" 
                className="wizebot-meta-partnership-image"
              >
                <Image
                  src="/images/v2/metapartners.png"
                  alt="Wizebot - Parceiro Oficial Meta"
                  width={1000}
                  height={500}
                  className="img-fluid"
                  priority
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MetaPartnership;