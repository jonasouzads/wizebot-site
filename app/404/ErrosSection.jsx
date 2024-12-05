"use client";

import Image from 'next/image';
import Link from "next/link";

const ErrosSection = () => {
  return (
    <div className="section wizebot-extra-section">
      <div className="container">
        <div className="wizebot-errors-wrap">
          <div className="wizebot-errors-thumb">
            <Image 
              src="/images/about/404.png" 
              alt="Página não encontrada" 
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
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
