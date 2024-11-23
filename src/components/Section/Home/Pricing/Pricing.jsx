"use client";
import Link from "next/link";
import { useState } from "react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const priceToggle = () => {
    setIsMonthly(!isMonthly);
  };
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
                <h2>R$</h2>
                <div className="wizebot-price dynamic-value">
                  {isMonthly ? 97 : 932}
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
                    <img src="/images/v3/check.png" alt="" />
                    1 número de WhatsApp conectado
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Limite de Contatos: 5000
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Painel de controle completo
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    2 atendentes inclusos
                  </li>
                </ul>
              </div>
              <Link className="wizebot-pricing-btn" href="contact-us">
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
                <h2>R$</h2>
                <div className="wizebot-price dynamic-value">
                  {isMonthly ? 197 : 1892}
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
                    <img src="/images/v3/check.png" alt="" />
                    2 números de WhatsApp
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Limite de Contatos: 15000
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Suporte prioritário
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    5 atendentes inclusos
                  </li>
                </ul>
              </div>
              <Link className="wizebot-pricing-btn active" href="contact-us">
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
                <h2>R$</h2>
                <div className="wizebot-price dynamic-value">
                  {isMonthly ? 397 : 3812}
                </div>
                <p className="dynamic-value">
                  /{isMonthly ? "Mensal" : "Anual"}
                </p>
              </div>
              <div className="wizebot-pricing-description">
                <p>Solução completa para grandes empresas e agências</p>
              </div>
              <div className="wizebot-pricing-body">
                <p>O plano inclui:</p>
                <ul>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    5 números de WhatsApp
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Contatos ilimitados
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Suporte VIP
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    10 atendentes inclusos
                  </li>
                </ul>
              </div>
              <Link className="wizebot-pricing-btn" href="contact-us">
                Começar agora
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="wizebot-pricing-wrap">
              <div className="wizebot-pricing-header">
                <h5>Enterprise</h5>
              </div>
              <div className="wizebot-pricing-price">
                <h2>R$</h2>
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
                    <img src="/images/v3/check.png" alt="" />
                    WhatsApp ilimitados
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Contatos ilimitados
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
                    Suporte dedicado
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" />
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
