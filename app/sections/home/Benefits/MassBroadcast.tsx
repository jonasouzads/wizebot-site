'use client'

import Image from 'next/image'

export function MassBroadcast() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      <div className="relative w-full max-w-md mx-auto lg:mx-0">
        <div className="relative w-full aspect-[960/1040] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <Image
            src="/images/disparo-massa-preview.png"
            alt="Disparo em Massa sem Banimentos"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-bold mb-6 text-center lg:text-left">
          Disparo em massa
          <br />
          sem banimentos
        </h2>
        <p className="text-xl text-gray-600 mb-8 text-center lg:text-left">
          Se na hora de abrir o carrinho ou avisar sobre a live seus números caem, 
          isso pode ser por uso de ferramentas não autorizadas. Com a Wizebot, 
          você faz disparos seguros e mantém suas operações dentro das regras do WhatsApp.
        </p>
        
        <div className="grid grid-cols-2 gap-8 text-center lg:text-left">
          <div>
            <h3 className="text-4xl font-bold text-brand-primary mb-2">99%</h3>
            <p className="text-lg text-gray-600">Taxa de entrega de mensagens</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand-primary mb-2">3.5X</h3>
            <p className="text-lg text-gray-600">Aumente o alcance das suas campanhas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
