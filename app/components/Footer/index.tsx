'use client'

import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  produto: [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Funcionalidade', href: '/funcionalidade' },
    { name: 'Planos', href: '/planos' },
    { name: 'Blog', href: '/blog' },
  ],
  institucional: [
    { name: 'Políticas de Privacidade', href: '/politicas-de-privacidade' },
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Políticas de Reembolso', href: '/politicas-de-reembolso' },
  ],
  recursos: [
    { name: 'Centro de Ajuda', href: '/ajuda' },
    { name: 'Suporte via WhatsApp', href: 'https://wa.me/seu-numero' },
    { name: 'Calculadora de Custos', href: '/calculadora' },
    { name: 'Gerador de Links para WhatsApp', href: '/gerador-links' },
    { name: 'FAQ', href: '/faq' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo/wizebot.svg"
              alt="WizeBot"
              width={150}
              height={40}
            />
            <p className="mt-4 text-gray-300 text-sm">
              Acreditamos que serviços de qualidade não precisam ser inacessíveis. 
              Na WizeBot, estamos empenhados em levar o melhor atendimento e soluções 
              inovadoras aos nossos clientes a um custo razoável.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              {navigation.produto.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              {navigation.institucional.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {navigation.recursos.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            {new Date().getFullYear()} WizeBot. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
