"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const HeroSection = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/FnuSOunMW9A?si=GPDCuQu4RdgYCmfw";
    }
  };

  const closePopup = () => {
    setPopup(false);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "";
    }
  };

  return (
    <>
      <div
        className="wizebot-hero-section white-bg"
        style={{ 
          backgroundImage: "url(/images/v1/hero-shape1.png)",
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <div className="container" style={{ overflow: 'hidden' }}>
          <div className="wizebot-hero-content center position-relative">
            <h1>Seu WhatsApp uma Fonte Automática de Vendas</h1>
            <p>
              Use a API oficial do WhatsApp com a Wizebot e evite banimentos.
              Aproveite os menores custos e 0% de taxa adicional na API do Meta,
              ao contrário de outros que cobram de 20 a 25% a mais.
            </p>
            <div className="wizebot-hero-btn-wrap center">
              <Link className="wizebot-default-btn" href="contact-us">
                <span>Comece Gratuitamente</span>
              </Link>
              <button
                className="video-init wizebot-hero-video"
                onClick={openPopup}
              >
                <img src="/images/v1/play-btn.png" alt="Play Button" />
                Veja como é Fácil
              </button>
            </div>
            <div className="wizebot-hero-shape">
              <img src="/images/v1/shape.png" alt="Shape" style={{ maxWidth: '100%' }} />
            </div>
          </div>
          <div className="wizebot-hero-bottom" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="wizebot-hero-thumb wow fadeInUpX">
              <img src="/images/v1/hero-mocup1.png" alt="Hero Mockup" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="wizebot-hero-card card1 wow zoomIn" style={{ maxWidth: '80px' }}>
              <img src="/images/v1/h-card1.png" alt="Hero Card 1" style={{ width: '100%' }} />
            </div>
            <div className="wizebot-hero-card card2 wow zoomIn" style={{ maxWidth: '80px' }}>
              <img src="/images/v1/h-card2.png" alt="Hero Card 2" style={{ width: '100%' }} />
            </div>
            <div className="wizebot-hero-card card3 wow zoomIn" style={{ maxWidth: '80px' }}>
              <img src="/images/v1/h-card4.png" alt="Hero Card 3" style={{ width: '100%' }} />
            </div>
            <div className="wizebot-hero-card card4 wow zoomIn" style={{ maxWidth: '80px' }}>
              <img src="/images/v1/h-card3.png" alt="Hero Card 4" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`popup-video ${popup ? "popup" : "popdown"}`}
        onClick={closePopup}
      >
        <div className="video-wrapper">
          <iframe
            id="youtube-video"
            className="video"
            width="100%"
            height="100%"
            src=""
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={closePopup}>
            <IoClose className="close-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
