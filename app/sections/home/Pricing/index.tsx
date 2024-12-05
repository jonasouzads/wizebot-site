'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/app/components/ui/animated-section'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Básico',
      monthlyPrice: 147,
      annualPrice: 1764,
      monthlyLink: 'https://pay.kirvano.com/2c26ab1f-07a5-40a2-91b6-fb46a0ba11de',
      annualLink: 'https://pay.kirvano.com/9d64ebad-4768-43b8-b69d-5d011d8e8461',
      description: 'Ideal para quem quer experimentar todas as funcionalidades essenciais',
      features: [
        '1 Número de WhatsApp',
        'Limite de Contatos: 5000',
        'Painel de controle completo',
        '2 atendentes inclusos'
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 197,
      annualPrice: 2367,
      monthlyLink: 'https://pay.kirvano.com/9aad9d90-e17a-4c01-93e7-09e30ba5a779',
      annualLink: 'https://pay.kirvano.com/b0b7eb70-7fe2-4071-bf9f-04b3521d0059',
      description: 'Para empresas que precisam de mais recursos e capacidade',
      features: [
        '1 Número de WhatsApp',
        'Limite de Contatos: 15000',
        'Suporte prioritário',
        '5 atendentes inclusos'
      ]
    },
    {
      name: 'Elite',
      monthlyPrice: 397,
      annualPrice: 4764,
      monthlyLink: 'https://pay.kirvano.com/c22a2961-3727-4172-84b2-a7d671b086f8',
      annualLink: 'https://pay.kirvano.com/9d235e58-9ba7-4483-8572-eb05bd70c593',
      description: 'Solução completa para grandes empresas',
      features: [
        '1 Número de WhatsApp',
        'Limite de Contatos: 30000',
        'Suporte VIP',
        '10 atendentes inclusos'
      ]
    },
    {
      name: 'Agência',
      monthlyPrice: null,
      annualPrice: null,
      monthlyLink: 'https://api.whatsapp.com/send?phone=559192226534',
      annualLink: 'https://api.whatsapp.com/send?phone=559192226534',
      description: 'Soluções personalizadas para grandes operações',
      features: [
        'WhatsApp ilimitados',
        'Contatos ilimitados',
        'Suporte dedicado',
        'Atendentes ilimitados'
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">
            Escolha o Plano Ideal Para<br />Seu Negócio
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-gray-100 p-1 rounded-full">
            <span className={`px-4 py-2 rounded-full transition-all ${!isAnnual ? 'bg-white shadow-sm font-medium' : ''}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 flex items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`px-4 py-2 rounded-full transition-all ${isAnnual ? 'bg-white shadow-sm font-medium' : ''}`}>
              Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              delay={0.1 * index}
              className={`rounded-3xl p-8 relative ${index === 1 ? 'bg-black text-white' : 'bg-white border border-gray-200'}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 inset-x-0 mx-auto text-center">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block">
                    Mais vendido
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              {plan.monthlyPrice ? (
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium">R$</span>
                    <span className="text-5xl font-bold">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm font-medium">{isAnnual ? '/Anual' : '/Mensal'}</span>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium">R$</span>
                    <span className="text-lg font-medium">Soluções personalizadas para grandes operações</span>
                  </div>
                </div>
              )}
              <p className={`text-base mb-8 ${index === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                <p className={`text-sm font-medium mb-4 ${index === 1 ? 'text-gray-300' : 'text-gray-700'}`}>
                  O plano inclui:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-5 h-5 ${
                          index === 1 ? 'text-green-400' : 'text-green-500'
                        }`}
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`text-base ${
                        index === 1 ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {plan.monthlyLink ? (
                <a
                  href={isAnnual ? plan.annualLink : plan.monthlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    index === 1
                      ? 'bg-green-500 text-black hover:bg-green-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Começar Agora
                </a>
              ) : (
                <button
                  className="w-full py-3 px-4 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300"
                >
                  Fale Conosco
                </button>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
