'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";

// Gera array de 1 a 31 para as logos
const generateLogos = (count: number) => 
  Array.from({ length: count }, (_, i) => `/images/payments/logo (${i + 1}).png`);

export function Partners() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (row1Ref.current) {
        row1Ref.current.scrollLeft += 1;
        if (row1Ref.current.scrollLeft >= row1Ref.current.scrollWidth / 2) {
          row1Ref.current.scrollLeft = 0;
        }
      }
      if (row2Ref.current) {
        row2Ref.current.scrollLeft -= 1;
        if (row2Ref.current.scrollLeft <= 0) {
          row2Ref.current.scrollLeft = row2Ref.current.scrollWidth / 2;
        }
      }
      if (row3Ref.current) {
        row3Ref.current.scrollLeft += 1;
        if (row3Ref.current.scrollLeft >= row3Ref.current.scrollWidth / 2) {
          row3Ref.current.scrollLeft = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  const logos = generateLogos(31);
  const logosPerRow = 10;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            Faça recuperação de vendas perdidas e aumente sua taxa de conversão com nossas
            integrações. Envie automaticamente acesso aos produtos, links de pagamento e acompanhe
            o status das transações em tempo real através das principais plataformas do mercado.
          </p>
        </div>

        <div className="space-y-12">
          {/* Primeira linha - direita para esquerda */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div 
              ref={row1Ref} 
              className="flex overflow-hidden"
            >
              <div className="flex gap-12 animate-scroll">
                {[...logos.slice(0, logosPerRow), ...logos.slice(0, logosPerRow)].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-28 h-16 relative">
                    <Image
                      src={logo}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Segunda linha - esquerda para direita */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div 
              ref={row2Ref} 
              className="flex overflow-hidden"
            >
              <div className="flex gap-12 animate-scroll">
                {[...logos.slice(logosPerRow, logosPerRow * 2), ...logos.slice(logosPerRow, logosPerRow * 2)].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-28 h-16 relative">
                    <Image
                      src={logo}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Terceira linha - direita para esquerda */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div 
              ref={row3Ref} 
              className="flex overflow-hidden"
            >
              <div className="flex gap-12 animate-scroll">
                {[...logos.slice(logosPerRow * 2), ...logos.slice(logosPerRow * 2)].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-28 h-16 relative">
                    <Image
                      src={logo}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
