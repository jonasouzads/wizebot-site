'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Eventos permitidos (excluindo Purchase que será tratado pela plataforma de vendas)
const ALLOWED_EVENTS = [
  'Lead',           // Quando alguém se cadastra para saber mais
  'Contact',        // Quando alguém entra em contato
  'ViewContent',    // Visualização detalhada de uma página/conteúdo
  'InitiateCheckout', // Quando clica em um botão de plano (mas não compra ainda)
  'CompleteRegistration', // Quando completa um formulário
];

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1002296057592912');
        ReactPixel.pageView();
      });
  }, [pathname]);

  // Função para enviar eventos tanto para o Pixel quanto para a Conversion API
  const trackEvent = async (eventName, eventData = {}, userData = {}) => {
    // Verificar se é um evento permitido
    if (!ALLOWED_EVENTS.includes(eventName)) {
      console.warn(`Evento ${eventName} não permitido. Use apenas: ${ALLOWED_EVENTS.join(', ')}`);
      return;
    }

    // Enviar para o Pixel do Facebook
    const ReactPixel = await import('react-facebook-pixel').then(x => x.default);
    ReactPixel.track(eventName, eventData);

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
  };

  // Expor a função trackEvent globalmente
  if (typeof window !== 'undefined') {
    window.fbTrackEvent = trackEvent;
  }

  return null;
}
