"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

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

  const scrollToStart = (e) => {
    e.preventDefault();
    const element = document.getElementById('start-free');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <h1>Seu WhatsApp uma Fonte Automática de Vendas💰</h1>
            <p>
              Use a API oficial do WhatsApp com a Wizebot e evite banimentos.
              Aproveite os menores custos e 🤑 0% de taxa adicional na API do Meta,
              ao contrário de outros que cobram de 20 a 25% a mais.
            </p>
            <div className="wizebot-hero-btn-wrap center">
              <a className="wizebot-default-btn" href="#start-free" onClick={scrollToStart}>
                <span>Comece Gratuitamente</span>
              </a>
              <button
                className="video-init wizebot-hero-video"
                onClick={openPopup}
              >
                <Image 
                  src="/images/v1/play-btn.png" 
                  alt="Play Button" 
                  width={24} 
                  height={24}
                  style={{ width: 'auto', height: 'auto' }}
                />
                Veja como é Fácil
              </button>
            </div>
            <div className="wizebot-hero-shape" style={{ position: 'relative' }}>
              <Image
                src="/images/v1/shape.png"
                alt="Shape"
                width={200}
                height={100}
                priority={true}
                className="img-fluid"
                style={{
                  maxWidth: '100%',
                  position: 'absolute',
                  left: '10px',  
                  top: '10%',
                  transform: 'translateY(-50%)',
                }}
              />
            </div>
          </div>
          <div className="wizebot-hero-bottom" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="wizebot-hero-thumb wow fadeInUpX">
              <Image
                src="/images/v1/hero-mocup2.gif"
                alt="Hero Mockup"
                width={600}
                height={400}
                priority={true}
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
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
