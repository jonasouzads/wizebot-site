import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL não está definida nas variáveis de ambiente');
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY não está definida nas variáveis de ambiente');
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const API_TOKEN = process.env.WIZEBOT_API_TOKEN;
const API_BASE_URL = 'https://app.wizebot.com.br/api/v1';
const WEBHOOK_URL = 'https://n8n.wizebot.com.br/webhook/5a9531bc-7d94-4594-8079-a8f6740c32f5';

function formatPhoneNumber(phone) {
  if (!phone) {
    throw new Error('Número de telefone é obrigatório');
  }
  
  let cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length < 10) {
    throw new Error('Número de telefone inválido. O número deve ter pelo menos 10 dígitos (DDD + número)');
  }

  if (cleanPhone.length > 11 && !cleanPhone.startsWith('55')) {
    throw new Error('Formato de telefone inválido');
  }

  if (!cleanPhone.startsWith('55')) {
    cleanPhone = '55' + cleanPhone;
  }

  const ddd = parseInt(cleanPhone.substring(2, 4));
  
  if (isNaN(ddd) || ddd < 11 || ddd > 99) {
    throw new Error('DDD inválido. Use um DDD válido do Brasil');
  }

  let numberWithoutDDI = cleanPhone.substring(2);
  
  if (ddd <= 30) {
    const numberWithoutDDD = numberWithoutDDI.substring(2);
    if (numberWithoutDDD.length === 8) {
      numberWithoutDDI = numberWithoutDDI.substring(0, 2) + '9' + numberWithoutDDD;
    } else if (numberWithoutDDD.length !== 9) {
      throw new Error('Número de telefone inválido para o DDD informado');
    }
  } else {
    const numberWithoutDDD = numberWithoutDDI.substring(2);
    if (numberWithoutDDD.length === 9) {
      numberWithoutDDI = numberWithoutDDI.substring(0, 2) + numberWithoutDDD.substring(1);
    } else if (numberWithoutDDD.length !== 8) {
      throw new Error('Número de telefone inválido para o DDD informado');
    }
  }

  return '55' + numberWithoutDDI;
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Nome, e-mail e telefone são obrigatórios.' },
        { status: 400 }
      );
    }

    const { 
      name, 
      email, 
      phone,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content
    } = data;

    let formattedPhone;
    try {
      formattedPhone = formatPhoneNumber(phone);
    } catch (phoneError) {
      return NextResponse.json(
        { error: phoneError.message },
        { status: 400 }
      );
    }

    const userCheckUrl = `${API_BASE_URL}/user/list?apiToken=${API_TOKEN}&id=${email}`;
    const userCheckResponse = await fetch(userCheckUrl);
    const userCheckData = await userCheckResponse.json();

    if (userCheckData.status === "1" && userCheckData.message && 
        typeof userCheckData.message === 'object' && !Array.isArray(userCheckData.message)) {
      return NextResponse.json(
        { error: 'Este e-mail já está cadastrado.' },
        { status: 400 }
      );
    }

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3);
    const formattedExpiration = expirationDate.toISOString().split('T')[0];

    const params = new URLSearchParams({
      apiToken: API_TOKEN,
      package_id: '1287',
      name: name,
      email: email,
      expired_date: formattedExpiration
    });

    const createUserResponse = await fetch(
      `${API_BASE_URL}/user/get/direct-login-url`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      }
    );

    const createUserData = await createUserResponse.json();

    if (createUserData.status !== "1" || !createUserData.message?.direct_login_url) {
      throw new Error(createUserData.message || 'Erro ao criar usuário na Wizebot');
    }

    const { error: supabaseError } = await supabase
      .from('clientes')
      .insert([{
        user_id: '08c81049-05f4-4be9-97af-950a5dab470d',
        nome: name,
        email: email,
        telefone: formattedPhone,
        wizebot_package_name: 'Teste Grátis',
        form_id: 'Rodapé do Site',
        utm_source: utm_source || '',
        utm_medium: utm_medium || '',
        utm_campaign: utm_campaign || '',
        utm_term: utm_term || '',
        utm_content: utm_content || '',
        created_at: new Date().toISOString()
      }]);

    if (supabaseError) {
      throw supabaseError;
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'new_registration',
          user: {
            name,
            email,
            phone: formattedPhone,
            package_id: '1287',
            expired_date: formattedExpiration,
            utm_data: {
              source: utm_source,
              medium: utm_medium,
              campaign: utm_campaign,
              term: utm_term,
              content: utm_content
            }
          }
        })
      });
    } catch (webhookError) {
      console.error('Webhook notification error:', webhookError);
    }

    return NextResponse.json({ 
      directLoginUrl: createUserData.message.direct_login_url 
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao processar o registro. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
}
