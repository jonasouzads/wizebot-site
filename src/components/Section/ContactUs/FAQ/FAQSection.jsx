/* eslint-disable react/no-unescaped-entities */
"use client";

import Accordion from "~/components/Ui/Accordion";

const accordionItems = [
  {
    question: "A API oficial do WhatsApp realmente resolve o problema de banimento nos disparos em massa?",
    answer:
      "Sim! Utilizando a API oficial, você segue todas as diretrizes do WhatsApp, permitindo o envio de mensagens em massa de forma segura e sem riscos de bloqueios.",
  },
  {
    question: "Posso enviar campanhas promocionais em massa sem ser banido?",
    answer:
      "Com certeza! A Wizebot permite que você envie mensagens em massa para seus clientes que optaram por recebê-las, garantindo conformidade com as políticas do WhatsApp.",
  },
  {
    question: "A Inteligência Artificial da Wizebot atende como um humano?",
    answer:
      "Sim, você pode treinar a Inteligência Artificial da Wizebot para responder como um humano, ajustando sua personalidade e fornecendo as instruções que deseja que ela siga.",
  },
  {
    question: "É complicado implementar essas soluções? Preciso saber programar?",
    answer:
      "Não! Nossa plataforma é intuitiva e fácil de usar. Basta criar sua conta, conectar seu número e personalizar as informações do seu negócio. Não é necessário nenhum conhecimento técnico.",
  },
  {
    question: "A Wizebot integra-se como minha plataforma de vendas?",
    answer:
      "Sim! A Wizebot é compatível com diversos plataforma de vendas como Hotmar, Kirvano, Kiwify e CRMs, facilitando a integração e otimização dos seus processos existentes.",
  },
];

const FAQSection = () => {
  return (
    <div className="section wizebot-section-padding2 white-bg">
      <div className="container">
        <div className="wizebot-section-title center">
          <h2>Dúvidas Frequentes</h2>
        </div>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default FAQSection;
