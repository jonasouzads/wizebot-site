'use client'

import Image from 'next/image'

export function ProductCarousel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      <div className="lg:order-2">
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative w-full aspect-[960/1040] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <Image
              src="/images/carrossel-preview.gif"
              alt="Carrossel de Produtos no WhatsApp"
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
          Carrossel de Produtos
          <br />
          no WhatsApp
        </h2>
        <p className="text-xl text-gray-600 text-center lg:text-left">
          Se você tem uma loja virtual ou e-commerce, a Wizebot permite criar 
          carrosséis de produtos diretamente no WhatsApp. Ideal para promover 
          seus produtos e fazer campanhas personalizadas, tornando a experiência 
          de compra mais fácil e interativa para seus clientes.
        </p>
      </div>
    </div>
  )
}
