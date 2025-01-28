'use client'

import Link from "next/link"
import { AnimatedSection } from "@/app/components/ui/animated-section"

export function CTA() {
  return (
    <AnimatedSection delay={0.2}>
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Compare nossos planos e escolha o ideal para você
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Desde funcionalidades básicas até recursos avançados de automação, temos o plano perfeito para suas necessidades
          </p>
          <Link
            href="/precos"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
          >
            Ver Planos e Preços
          </Link>
        </div>
      </section>
    </AnimatedSection>
  )
}
