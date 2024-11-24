"use client";
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  useEffect(() => {
    function getUTMSource() {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('utm_source');
      }
      return null;
    }

    function simplifyOrigin(origin) {
      return origin.replace(/^(www\.)/, '').replace(/\..*$/, '');
    }

    function handleClick(e) {
      e.preventDefault();
      const utmSource = getUTMSource();
      let origin;

      if (utmSource) {
        origin = utmSource;
      } else {
        origin = document.referrer ? new URL(document.referrer).hostname : 'origem desconhecida';
      }

      origin = origin !== 'origem desconhecida' ? simplifyOrigin(origin) : origin;

      const message = origin === 'origem desconhecida'
        ? "Olá, gostaria de mais informações..."
        : `Olá, vim do ${origin} e gostaria de mais informações...`;

      const whatsappURL = `https://api.whatsapp.com/send/?phone=559192226534&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
      window.location.href = whatsappURL;
    }

    const button = document.getElementById('whatsappButton');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      const button = document.getElementById('whatsappButton');
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <a
      href="#"
      id="whatsappButton"
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </a>
  );
};

export default WhatsAppButton;
