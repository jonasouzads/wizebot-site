import { useState } from 'react';

interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
  externalId?: string;
}

interface EventData {
  sourceUrl: string;
  currency?: string;
  value?: number;
  contentName?: string;
  contentCategory?: string;
  contentIds?: string[];
  contents?: Array<{
    id: string;
    quantity: number;
    price?: number;
  }>;
}

interface ConversionEvent {
  eventName: string;
  eventData: EventData;
  userData: UserData;
}

export const useFacebookConversion = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEvent = async (eventData: ConversionEvent) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/facebook-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send conversion event');
      }

      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Facebook Conversion Error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Funções auxiliares para eventos comuns
  const trackPageView = async (url: string, userData: UserData) => {
    return sendEvent({
      eventName: 'PageView',
      eventData: {
        sourceUrl: url,
      },
      userData,
    });
  };

  const trackLead = async (userData: UserData, value?: number) => {
    return sendEvent({
      eventName: 'Lead',
      eventData: {
        sourceUrl: window.location.href,
        currency: 'BRL',
        value,
      },
      userData,
    });
  };

  const trackPurchase = async (
    userData: UserData,
    value: number,
    contents: Array<{ id: string; quantity: number; price: number }>
  ) => {
    return sendEvent({
      eventName: 'Purchase',
      eventData: {
        sourceUrl: window.location.href,
        currency: 'BRL',
        value,
        contents,
      },
      userData,
    });
  };

  return {
    sendEvent,
    trackPageView,
    trackLead,
    trackPurchase,
    isLoading,
    error,
  };
};
