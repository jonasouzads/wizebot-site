/* eslint-disable react/no-unescaped-entities */

"use client";

import Accordion from "react-bootstrap/Accordion";

const FaqSection = () => {
  return (
    <div className="section wizebot-section-padding2">
      <div className="container">
        <div className="wizebot-section-title center">
          <h2>Dúvidas Frequentes</h2>
        </div>
        <div className="wizebot-accordion-wrap wizebot-accordion-wrap2">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                A API oficial do WhatsApp realmente resolve o problema de banimento nos disparos em massa?
              </Accordion.Header>
              <Accordion.Body>
                Sim! Utilizando a API oficial, você segue todas as diretrizes do WhatsApp, permitindo o envio de mensagens em massa de forma segura e sem riscos de bloqueios.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Posso enviar campanhas promocionais em massa sem ser banido?
              </Accordion.Header>
              <Accordion.Body>
                Com certeza! A Wizebot permite que você envie mensagens em massa para seus clientes que optaram por recebê-las, garantindo conformidade com as políticas do WhatsApp.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                A Inteligência Artificial da Wizebot atende como um humano?
              </Accordion.Header>
              <Accordion.Body>
                Sim, você pode treinar a Inteligência Artificial da Wizebot para responder como um humano, ajustando sua personalidade e fornecendo as instruções que deseja que ela siga.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                É complicado implementar essas soluções? Preciso saber programar?
              </Accordion.Header>
              <Accordion.Body>
                Não! Nossa plataforma é intuitiva e fácil de usar. Basta criar sua conta, conectar seu número e personalizar as informações do seu negócio. Não é necessário nenhum conhecimento técnico.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                A Wizebot integra-se como minha plataforma de vendas?
              </Accordion.Header>
              <Accordion.Body>
                Sim! A Wizebot é compatível com diversos plataforma de vendas como Hotmar, Kirvano, Kiwify e CRMs, facilitando a integração e otimização dos seus processos existentes.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
