"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaYoutube, FaInstagram, FaBook, FaArrowRight } from "react-icons/fa";
import "~/assets/css/thank-you.css";

const ThankYouSection = () => {
  return (
    <div className="wizebot-thank-you-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="thank-you-header"
            >
              <Image
                src="/images/logo/logo-dark.svg"
                alt="Wizebot Logo"
                width={240}
                height={80}
                className="mb-5"
                priority
              />
              
              <h1 className="thank-you-title">
                Bem-vindo à Wizebot! <span className="wave">👋</span>
              </h1>
              <p className="thank-you-text">
                Estamos muito felizes em ter você como cliente. Para começar sua jornada de sucesso,
                preparamos alguns recursos essenciais:
              </p>
            </motion.div>

            <div className="thank-you-links">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="link-card"
              >
                <Link 
                  href="https://api.whatsapp.com/send/?phone=559192226534&text=Olá%2C%20gostaria%20de%20mais%20informações...&type=phone_number&app_absent=0" 
                  target="_blank" 
                  className="support-link"
                >
                  <div className="icon-wrapper whatsapp">
                    <FaWhatsapp className="icon" />
                  </div>
                  <div className="link-content">
                    <h3>Suporte WhatsApp</h3>
                    <p>Fale diretamente com nossa equipe</p>
                  </div>
                  <FaArrowRight className="arrow-icon" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="link-card"
              >
                <Link href="https://help.wizebot.com.br/" target="_blank" className="docs-link">
                  <div className="icon-wrapper docs">
                    <FaBook className="icon" />
                  </div>
                  <div className="link-content">
                    <h3>Central de Ajuda</h3>
                    <p>Aprenda a usar todos os recursos</p>
                  </div>
                  <FaArrowRight className="arrow-icon" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="link-card"
              >
                <Link href="https://youtube.com/@wize_bot/videos" target="_blank" className="youtube-link">
                  <div className="icon-wrapper youtube">
                    <FaYoutube className="icon" />
                  </div>
                  <div className="link-content">
                    <h3>Canal no YouTube</h3>
                    <p>Vídeos e tutoriais exclusivos</p>
                  </div>
                  <FaArrowRight className="arrow-icon" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 start-button-wrapper"
            >
              <div className="credentials-notice">
                <div className="notice-icon">📧</div>
                <p>
                  Suas credenciais de acesso serão enviadas para seu WhatsApp e e-mail em instantes.
                  <br />
                  <span>Fique atento às suas mensagens!</span>
                </p>
              </div>
              <Link href="https://app.wizebot.com.br/login" className="start-button">
                Acessar Plataforma
                <FaArrowRight className="ms-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSection;
