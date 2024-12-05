'use client'

import Image from 'next/image'

export function AIRewrite() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      <div className="relative w-full max-w-md mx-auto lg:mx-0">
        <div className="relative w-full aspect-[960/1040] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <Image
            src="/images/rewrite-preview.gif"
            alt="Reescrita com IA"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-bold mb-6 text-center lg:text-left">
          Reescreva
          <br />
          com IA
        </h2>
        <p className="text-xl text-gray-600 text-center lg:text-left">
          Evite erros e garanta uma comunicação profissional com seus 
          clientes. A função de reescrita com IA da Wizebot corrige e 
          melhora automaticamente as mensagens digitadas pelos 
          atendentes, garantindo que cada interação seja clara, sem 
          erros e alinhada ao tom ideal da sua marca.
        </p>
      </div>
    </div>
  )
}
