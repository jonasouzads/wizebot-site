"use client";
import React from "react";
import Image from "next/image";

const CallUsSection = () => {
  return (
    <div className="section dark-bg wizebot-section-padding6 dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <a href="tel:123">
              <div className="wizebot-iconbox-wrap-left text-center-lg rt-mb-24">
                <div className="wizebot-iconbox-icon">
                  <Image src="/images/icon/call2.svg" alt="Call Icon" width={50} height={50} />
                </div>
                <div className="wizebot-iconbox-data light">
                  <h3>Fale Conosco</h3>
                  <p>
                    +55 (91) 92222-6534
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6">
            <a href="mailto:suporte@wizebot.com.br">
              <div className="wizebot-iconbox-wrap-left text-center-lg rt-mb-24">
                <div className="wizebot-iconbox-icon">
                  <Image src="/images/icon/email3.svg" alt="Email Icon" width={50} height={50} />
                </div>
                <div className="wizebot-iconbox-data light">
                  <h3>Envie um E-mail</h3>
                  <p>
                    suporte@wizebot.com.br
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUsSection;
