'use client'

import Image from 'next/image'

export function AutomatedService() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="lg:order-2">
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative w-full aspect-[960/1040] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <Image
              src="/images/chatgpt-preview.gif"
              alt="IA no WhatsApp"
              fill
              unoptimized
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
      <div className="lg:order-1">
        <h2 className="text-5xl font-bold mb-6 text-center lg:text-left">
          Inteligência Artificial
          <br />
          no WhatsApp
        </h2>
        <p className="text-xl text-gray-600 text-center lg:text-left">
          Com a Wizebot, você coloca o ChatGPT a IA mais avançada do 
          mundo dentro do seu WhatsApp, garantindo respostas rápidas e 
          precisas para seus clientes enquanto você aproveita seu tempo 
          livre ou adianta outras tarefas. Deixe a automação cuidar do seu 
          atendimento!
        </p>
      </div>
    </div>
  )
}
