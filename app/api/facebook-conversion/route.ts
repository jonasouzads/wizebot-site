import { NextResponse } from 'next/server';
import { FacebookAdsApi, ServerEvent, EventRequest } from 'facebook-nodejs-business-sdk';

// Tipos para os dados recebidos
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

// Configurações do Facebook
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// Inicializa a API do Facebook
if (!FACEBOOK_ACCESS_TOKEN || !FACEBOOK_PIXEL_ID) {
  console.error('Facebook credentials are not properly configured');
}

FacebookAdsApi.init(FACEBOOK_ACCESS_TOKEN);

export async function POST(request: Request) {
  try {
    // Validação básica do request
    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      );
    }

    // Parse dos dados recebidos
    const data: ConversionEvent = await request.json();
    const { eventName, eventData, userData } = data;

    // Validação dos dados necessários
    if (!eventName || !eventData || !userData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Criação do evento
    const serverEvent = new ServerEvent()
      .setEventName(eventName)
      .setEventTime(Math.floor(Date.now() / 1000))
      .setUserData(userData)
      .setEventSourceUrl(eventData.sourceUrl)
      .setActionSource('website');

    // Adiciona dados customizados se existirem
    if (eventData.currency && eventData.value) {
      serverEvent.setCustomData({
        currency: eventData.currency,
        value: eventData.value,
      });
    }

    if (eventData.contentName) {
      serverEvent.setCustomData({
        content_name: eventData.contentName,
      });
    }

    if (eventData.contentCategory) {
      serverEvent.setCustomData({
        content_category: eventData.contentCategory,
      });
    }

    if (eventData.contents) {
      serverEvent.setCustomData({
        contents: eventData.contents,
      });
    }

    // Envio do evento
    const eventsData = [serverEvent];
    const eventRequest = new EventRequest(FACEBOOK_ACCESS_TOKEN, FACEBOOK_PIXEL_ID)
      .setEvents(eventsData);

    await eventRequest.execute();

    // Log do evento para debugging
    console.log(`Facebook Conversion Event sent successfully: ${eventName}`);

    return NextResponse.json({
      success: true,
      message: 'Event processed successfully',
      eventName,
    });

  } catch (error) {
    console.error('Facebook Conversion API Error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to process Facebook conversion event',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
