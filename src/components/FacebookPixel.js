'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useCallback } from 'react';

// Eventos permitidos (excluindo Purchase que será tratado pela plataforma de vendas)
const ALLOWED_EVENTS = [
  'Lead',           // Quando alguém se cadastra para saber mais
  'Contact',        // Quando alguém entra em contato
  'ViewContent',    // Visualização detalhada de uma página/conteúdo
  'InitiateCheckout', // Quando clica em um botão de plano (mas não compra ainda)
  'CompleteRegistration', // Quando completa um formulário
];

let pixelInitialized = false;

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pixelInitialized) {
      // Inicializa o objeto fbq
      window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      };
      window._fbq = window._fbq || window.fbq;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      
      script.onload = () => {
        if (!pixelInitialized) {
          window.fbq('init', '1002296057592912');
          window.fbq('track', 'PageView');
          pixelInitialized = true;
        }
      };

      // Adiciona o noscript element para fallback
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = 'https://www.facebook.com/tr?id=1002296057592912&ev=PageView&noscript=1';
      noscript.appendChild(img);

      document.head.appendChild(script);
      document.body.appendChild(noscript);
    } else {
      window.fbq('track', 'PageView');
    }

    return () => {
      // Cleanup se necessário
    };
  }, [pathname]);

  // Função para enviar eventos tanto para o Pixel quanto para a Conversion API
  const trackEvent = useCallback(async (eventName, eventData = {}, userData = {}) => {
    // Verificar se é um evento permitido
    if (!ALLOWED_EVENTS.includes(eventName)) {
      console.warn(`Evento ${eventName} não permitido. Use apenas: ${ALLOWED_EVENTS.join(', ')}`);
      return;
    }

    // Enviar para o Pixel do Facebook
    if (window.fbq) {
      window.fbq('track', eventName, eventData);
    }

    // Enviar para a Conversion API
    try {
      await fetch('/api/facebook-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName,
          eventData: {
            ...eventData,
            sourceUrl: window.location.href,
          },
          userData,
        }),
      });
    } catch (error) {
      console.error('Error sending conversion event:', error);
    }
  }, []);

  // Expor a função trackEvent globalmente
  if (typeof window !== 'undefined') {
    window.fbTrackEvent = trackEvent;
  }

  return null;
}
