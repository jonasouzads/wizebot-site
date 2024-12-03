"use client";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const priceToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const CheckIcon = () => (
    <Image 
      src="/images/v3/check.png" 
      alt="Incluído" 
      width={24}
      height={24}
      style={{ width: 'auto', height: 'auto' }}
    />
  );

  return (
    <div className="section wizebot-section-padding3">
      <div className="container">
        <div className="wizebot-section-title center">
          <h2>Escolha o Plano Ideal Para Seu Negócio</h2>
        </div>
        <div className="pricing-btn">
          <div className="toggle-btn">
            <label>Mensal</label>
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              id="flexSwitchCheckDefault"
              data-pricing-trigger
              data-target="#table-price-value"
              onClick={priceToggle}
              checked={isMonthly}
              onChange={() => {}}
            />
            <label>Anual</label>
          </div>
        </div>
        <div
          className="row wizebot-pricing-four-column"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active="monthly"
        >
          <div className="col-xl-3 col-md-6">
            <div className="wizebot-pricing-wrap">
              <div className="wizebot-pricing-header">
                <h5>Básico</h5>
              </div>
              <div className="wizebot-pricing-price">
                <h2 style={{ fontSize: '1.5rem' }}>R$</h2>
                <div className="wizebot-price dynamic-value">
                  {isMonthly ? 147 : 1227}
                </div>
                <p className="dynamic-value">
                  /{isMonthly ? "Mensal" : "Anual"}
                </p>
              </div>
              <div className="wizebot-pricing-description">
                <p>Ideal para quem quer experimentar todas as funcionalidades essenciais</p>
              </div>
              <div className="wizebot-pricing-body">
                <p>O plano inclui:</p>
                <ul>
                  <li>
                    <CheckIcon />
                    1 Número de WhatsApp
                  </li>
                  <li>
                    <CheckIcon />
                    Limite de Contatos: 5000
                  </li>
                  <li>
                    <CheckIcon />
                    Painel de controle completo
                  </li>
                  <li>
                    <CheckIcon />
                    2 atendentes inclusos
                  </li>
                </ul>
              </div>
              <Link 
                className="wizebot-pricing-btn" 
                href={isMonthly ? "https://pay.kirvano.com/2c26ab1f-07a5-40a2-91b6-fb46a0ba11de?utm_source=site&utm_medium=wizebot&utm_campaign=planos" : "https://pay.kirvano.com/9d64ebad-4768-43b8-b69d-5d011d8e8461?utm_source=site&utm_medium=wizebot&utm_campaign=planos"}
                target="_blank"
              >
                Começar agora
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="wizebot-pricing-wrap active">
              <div className="wizebot-pricing-header">
                <h5>Pro</h5>
              </div>
              <div className="wizebot-pricing-price">
                <h2 style={{ fontSize: '1.5rem' }}>R$</h2>
                <div className="wizebot-price dynamic-value">
                  {isMonthly ? 197 : 1657}
                </div>
                <p className="dynamic-value">
                  /{isMonthly ? "Mensal" : "Anual"}
                </p>
              </div>
              <div className="wizebot-pricing-description">
                <p>Para empresas que precisam de mais recursos e capacidade</p>
              </div>
              <div className="wizebot-pricing-body">
                <p>O plano inclui:</p>
                <ul>
                  <li>
                    <CheckIcon />
                    1 Número de WhatsApp
                  </li>
                  <li>
                    <CheckIcon />
                    Limite de Contatos: 15000
                  </li>
                  <li>
                    <CheckIcon />
                    Suporte prioritário
                  </li>
                  <li>
                    <CheckIcon />
                    5 atendentes inclusos
                  </li>
                </ul>
              </div>
              <Link 
                className="wizebot-pricing-btn active" 
                href={isMonthly ? "https://pay.kirvano.com/9aad9d90-e17a-4c01-93e7-09e30ba5a779?utm_source=site&utm_medium=wizebot&utm_campaign=planos" : "https://pay.kirvano.com/b0b7eb70-7fe2-4071-bf9f-04b3521d0059?utm_source=site&utm_medium=wizebot&utm_campaign=planos"}
                target="_blank"
              >
                Começar agora
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="wizebot-pricing-wrap">
              <div className="wizebot-pricing-header">
                <h5>Elite</h5>
              </div>
              <div className="wizebot-pricing-price">
                <h2 style={{ fontSize: '1.5rem' }}>R$</h2>
                <div className="wizebot-price dynamic-value">
                  {isMonthly ? 397 : 3334}
                </div>
                <p className="dynamic-value">
                  /{isMonthly ? "Mensal" : "Anual"}
                </p>
              </div>
              <div className="wizebot-pricing-description">
                <p>Solução completa para grandes empresas</p>
              </div>
              <div className="wizebot-pricing-body">
                <p>O plano inclui:</p>
                <ul>
                  <li>
                    <CheckIcon />
                    1 Número de WhatsApp
                  </li>
                  <li>
                    <CheckIcon />
                    Limite de Contatos: 30000
                  </li>
                  <li>
                    <CheckIcon />
                    Suporte VIP
                  </li>
                  <li>
                    <CheckIcon />
                    10 atendentes inclusos
                  </li>
                </ul>
              </div>
              <Link 
                className="wizebot-pricing-btn" 
                href={isMonthly ? "https://pay.kirvano.com/c22a2961-3727-4172-84b2-a7d671b086f8?utm_source=site&utm_medium=wizebot&utm_campaign=planos" : "https://pay.kirvano.com/9d235e58-9ba7-4483-8572-eb05bd70c593?utm_source=site&utm_medium=wizebot&utm_campaign=planos"}
                target="_blank"
              >
                Começar agora
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="wizebot-pricing-wrap">
              <div className="wizebot-pricing-header">
                <h5>Agência</h5>
              </div>
              <div className="wizebot-pricing-price">
                <h2 style={{ fontSize: '1.5rem' }}>R$</h2>
                <div className="wizebot-price">
                  
                </div>
              </div>
              <div className="wizebot-pricing-description">
                <p>Soluções personalizadas para grandes operações</p>
              </div>
              <div className="wizebot-pricing-body">
                <p>O plano inclui:</p>
                <ul>
                  <li>
                    <CheckIcon />
                    WhatsApp ilimitados
                  </li>
                  <li>
                    <CheckIcon />
                    Contatos ilimitados
                  </li>
                  <li>
                    <CheckIcon />
                    Suporte dedicado
                  </li>
                  <li>
                    <CheckIcon />
                    Atendentes ilimitados
                  </li>
                </ul>
              </div>
              <Link className="wizebot-pricing-btn" href="contact-us">
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
