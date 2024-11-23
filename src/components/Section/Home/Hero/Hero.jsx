"use client";

import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import ReactPlayer from "react-player";
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
        style={{ backgroundImage: "url(/images/v1/hero-shape1.png)" }}
      >
        <div className="container">
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
                <Image
                  src="/images/v1/play-btn.png"
                  alt="Play Button"
                  width={48}
                  height={48}
                  style={{ width: 'auto', height: 'auto' }}
                />
                Veja como é Fácil
              </button>
            </div>
            <div className="wizebot-hero-shape">
              <Image
                src="/images/v1/shape.png"
                alt="Hero Shape"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="wizebot-hero-bottom">
            <div className="wizebot-hero-thumb wow fadeInUpX">
              <Image
                src="/images/v1/hero-mocup1.png"
                alt="Hero Mocup"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="wizebot-hero-card card1 wow zoomIn">
              <Image
                src="/images/v1/h-card1.png"
                alt="Hero Card 1"
                width={200}
                height={150}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="wizebot-hero-card card2 wow zoomIn">
              <Image
                src="/images/v1/h-card2.png"
                alt="Hero Card 2"
                width={200}
                height={150}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="wizebot-hero-card card3 wow zoomIn">
              <Image
                src="/images/v1/h-card4.png"
                alt="Hero Card 3"
                width={200}
                height={150}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="wizebot-hero-card card4 wow zoomIn">
              <Image
                src="/images/v1/h-card3.png"
                alt="Hero Card 4"
                width={200}
                height={150}
                style={{ width: '100%', height: 'auto' }}
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
            width="560"
            height="315"
            src=""
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="popup-close" onClick={closePopup}>
            <IoClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
