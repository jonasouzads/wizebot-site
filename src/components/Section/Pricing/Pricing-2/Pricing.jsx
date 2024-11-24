'use client';

import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

const PricingSectionTwo = () => {
  const [showComparison, setShowComparison] = useState(false);

  const CheckIcon = () => (
    <Image 
      src="/images/icon/check.svg" 
      alt="Incluído" 
      width={24}
      height={24}
      style={{ width: 'auto', height: 'auto' }}
    />
  );

  const MinusIcon = () => (
    <Image 
      src="/images/icon/minus.svg" 
      alt="Não incluído" 
      width={24}
      height={24}
      style={{ width: 'auto', height: 'auto' }}
    />
  );

  return (
    <>
      <div className="wizebot-divider"></div>

      <div className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 className="wizebot-section-title">Planos e Recursos</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#4B5563',
              marginBottom: '2.5rem',
              lineHeight: '1.6'
            }}>
              Escolha o plano ideal para o seu negócio e comece a automatizar seu atendimento hoje mesmo!
            </p>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="wizebot-default-btn"
            >
              <span>{showComparison ? '− Ocultar Comparação' : '+ Comparar Planos'}</span>
            </button>
          </div>

          {showComparison && (
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              background: '#fff',
              marginTop: '2rem',
              padding: '2rem'
            }}>
              <div className="table-responsive" style={{
                padding: '0.5rem',
                margin: '-1rem'
              }}>
                <table className="table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th scope="col">Recursos</th>
                      <th scope="col">Básico</th>
                      <th scope="col">Pro</th>
                      <th scope="col">Elite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Atendentes</td>
                      <td>2</td>
                      <td>5</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>WhatsApp Conectado</td>
                      <td>1 WhatsApp</td>
                      <td>1 WhatsApp</td>
                      <td>1 WhatsApp</td>
                    </tr>
                    <tr>
                      <td>Limite de Contatos</td>
                      <td>5.000</td>
                      <td>15.000</td>
                      <td>30.000</td>
                    </tr>
                    <tr>
                      <td>Acesso ao Instagram</td>
                      <td><MinusIcon /></td>
                      <td>Em Breve</td>
                      <td>Em Breve</td>
                    </tr>
                    <tr>
                      <td>Painel de Controle</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>CRM para Contatos</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Campos Personalizados</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Disparo em Massa</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Criador de Automações</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Fluxos de Conversa Ilimitados</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Palavras Chaves Ilimitadas</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Reescrita com IA</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Remarketing Ilimitados</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Disparos de SMS</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Etiquetas</td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Inteligência Artificial ChatGPT</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Relatórios de Cliques nos Botões</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Integração via Webhook</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Integração via API</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Shopify e Woocommerce</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Remarketing Woocommerce</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>WhatsApp Flows</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Carrocel no WhatsApp</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Integração Google Planilhas</td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td>Integração via API no ChatBot</td>
                      <td><MinusIcon /></td>
                      <td><MinusIcon /></td>
                      <td><CheckIcon /></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <Link 
                          className="wizebot-default-btn" 
                          href="https://pay.kirvano.com/2c26ab1f-07a5-40a2-91b6-fb46a0ba11de?utm_source=site&utm_medium=wizebot&utm_campaign=planos"
                          target="_blank"
                        >
                          <span>Começar Agora</span>
                        </Link>
                      </td>
                      <td>
                        <Link 
                          className="wizebot-default-btn" 
                          href="https://pay.kirvano.com/9aad9d90-e17a-4c01-93e7-09e30ba5a779?utm_source=site&utm_medium=wizebot&utm_campaign=planos"
                          target="_blank"
                        >
                          <span>Começar Agora</span>
                        </Link>
                      </td>
                      <td>
                        <Link 
                          className="wizebot-default-btn" 
                          href="https://pay.kirvano.com/c22a2961-3727-4172-84b2-a7d671b086f8?utm_source=site&utm_medium=wizebot&utm_campaign=planos"
                          target="_blank"
                        >
                          <span>Começar Agora</span>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingSectionTwo;
