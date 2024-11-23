"use client";

import Link from "next/link";

const ErrosSection = () => {
  return (
    <div className="section wizebot-extra-section">
      <div className="container">
        <div className="wizebot-errors-wrap">
          <div className="wizebot-errors-thumb">
            <img src="/images/about/404.png" alt="" />
          </div>
          <h2>Ops! Parece que você pegou o caminho errado</h2>
          <div className="wizebot-extara-mt">
            <Link className="wizebot-default-btn" href="/">
              <span>Voltar para o Início</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrosSection;
