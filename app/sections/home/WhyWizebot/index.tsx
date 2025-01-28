'use client'

import Image from 'next/image'

export function WhyWizebot() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Por Que a Wizebot
          <br />
          É Sua Melhor Escolha
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* API Oficial */}
          <div className="bg-white rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col h-full overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">API Oficial</h3>
              <p className="text-gray-600">
                Operação 100% dentro das regras do WhatsApp. Dispare campanhas sem medo de bloqueios.
              </p>
            </div>
            <div className="relative w-full aspect-video mt-auto">
              <Image
                src="/images/meta-verification.png"
                alt="Meta Verificação"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Integrações */}
          <div className="bg-white rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col h-full overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Integrações</h3>
              <p className="text-gray-600">
                Conecte-se com Hotmart, Kiwify, WooCommerce e Shopify em um único lugar.
              </p>
            </div>
            <div className="relative w-full aspect-video mt-auto">
              <Image
                src="/images/integrations.png"
                alt="Integrações"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Disparo em Massa */}
          <div className="bg-white rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col h-full overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Disparo em Massa</h3>
              <p className="text-gray-600">
                Alcance milhares de clientes simultaneamente, mantendo personalização e segurança.
              </p>
            </div>
            <div className="relative w-full aspect-video mt-auto">
              <Image
                src="/images/mass-messaging.png"
                alt="Disparo em Massa"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Inteligência Artificial */}
          <div className="bg-white rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col h-full overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Inteligência Artificial</h3>
              <p className="text-gray-600">
                ChatGPT integrado ao seu WhatsApp: Atendimento que converte 24 horas por dia.
              </p>
            </div>
            <div className="relative w-full aspect-video mt-auto">
              <Image
                src="/images/chatgpt-integration.png"
                alt="Integração ChatGPT"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
