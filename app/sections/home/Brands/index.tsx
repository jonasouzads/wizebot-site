'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/app/components/ui/animated-section'

export function Brands() {
  // Array com logos das marcas (você precisará adicionar as imagens na pasta public)
  const brands = [
    '/images/brand.png',
    '/images/brand2.png',
    '/images/brand3.png',
    '/images/brand4.png',
    '/images/brand5.png',
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">As maiores estão com a gente!</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            {/* Gradiente para efeito de fade nas laterais */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

            {/* Container do marquee */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {/* Repetimos as marcas 3 vezes para criar o efeito infinito */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-16 mx-8">
                    {brands.map((brand, index) => (
                      <div
                        key={`${i}-${index}`}
                        className="flex-shrink-0 h-12 w-32 relative grayscale hover:grayscale-0 transition-all"
                      >
                        <Image
                          src={brand}
                          alt={`Brand Logo ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
