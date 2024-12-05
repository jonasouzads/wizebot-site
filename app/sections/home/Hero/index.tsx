'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export function Hero() {
  const [popup, setPopup] = useState(false)

  const openPopup = () => {
    setPopup(true)
    const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/FnuSOunMW9A?si=GPDCuQu4RdgYCmfw"
    }
  }

  const closePopup = () => {
    setPopup(false)
    const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = ""
    }
  }

  return (
    <>
      <div
        className="relative pt-40 w-full overflow-hidden"
        style={{ 
          backgroundImage: "url(/images/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "min(100%, 1200px) auto",
          paddingBottom: "clamp(400px, 50vw, 700px)" // Responsivo entre 400px e 700px
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Seu WhatsApp uma
              <br />
              Fonte Automática de
              <br />
              Vendas!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-16">
              Use a API oficial do WhatsApp com a Wizebot e evite banimentos. Aproveite os 
              menores custos e <span role="img" aria-label="money">🤑</span> 0% de taxa adicional na API do Meta, ao contrário de 
              outros que cobram de 20 a 25% a mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-40 relative"> {/* Responsivo: mb-16 no mobile, mb-40 no desktop */}
              {/* Seta animada */}
              <div className="absolute -left-14 top-1/2 -translate-y-1/2 hidden lg:block animate-horizontal-bounce">
                <Image
                  src="/images/arrow.png"
                  alt="Seta indicativa"
                  width={80}
                  height={40}
                  className="w-auto h-auto"
                />
              </div>
              <button className="bg-[#1968f0] hover:bg-[#1968f0]/90 text-white px-10 py-5 rounded-lg w-full sm:w-auto sm:min-w-[200px] font-medium text-lg transition-colors">
                Comece Gratuitamente
              </button>
              <button
                onClick={openPopup}
                className="flex items-center justify-center text-[#1968f0] border border-[#1968f0] hover:bg-[#1968f0]/5 px-10 py-5 rounded-lg w-full sm:w-auto sm:min-w-[200px] font-medium text-lg transition-colors"
              >
                <Image 
                  src="/images/play-btn.png" 
                  alt="Play Button" 
                  width={24} 
                  height={24}
                  className="mr-2"
                />
                Veja como é Fácil
              </button>
            </div>

            {/* Seta decorativa */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                src="/images/arrow.png"
                alt="Seta indicativa"
                width={64}
                height={64}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '10%',
                  transform: 'translateY(-50%)',
                }}
              />
            </div>
          </div>

          {/* WhatsApp Preview */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full" style={{ marginTop: "clamp(1rem, 3vw, 3rem)" }}>
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src="/images/whatsapp.gif"
                alt="WhatsApp Interface"
                width={640}
                height={427}
                priority
                unoptimized
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      <div
        className={`fixed inset-0 bg-black/80 z-50 transition-opacity ${
          popup ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closePopup}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video">
          <iframe
            id="youtube-video"
            className="w-full h-full"
            src=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button 
            className="absolute -top-10 right-0 text-white text-3xl"
            onClick={closePopup}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  )
}
