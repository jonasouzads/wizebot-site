import { Pricing } from "@/app/sections/home/Pricing"
import { PlanComparison } from "@/app/sections/home/PlanComparison"
import { CTA } from "@/app/sections/home/CTA"
import { Metadata } from 'next'
import { constructMetadata } from '../lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Planos e Preços',
  description: 'Escolha o plano ideal para automatizar seu atendimento no WhatsApp. Temos opções para todos os tamanhos de negócio.',
  keywords: [
    'planos wizebot',
    'preços chatbot whatsapp',
    'assinatura chatbot',
    'automação whatsapp preços',
    'planos automação whatsapp'
  ],
  path: '/planos'
})

export default function PlanosPage() {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Escolha o plano ideal para sua empresa
            </h1>
            <p className="text-xl text-gray-600">
              Desde funcionalidades básicas até recursos avançados de automação, 
              temos o plano perfeito para suas necessidades.
            </p>
          </div>
        </div>
      </div>

      <Pricing />
      
      <div className="py-16 bg-gray-50">
        <PlanComparison />
      </div>

      <CTA />
    </main>
  )
}
