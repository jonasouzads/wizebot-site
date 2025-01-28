'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

export function Header() {
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const utilityLinks = [
    { href: 'https://api.whatsapp.com/send?phone=559192226534', label: 'Suporte Via WhatsApp', external: true },
    { href: '/custo-por-mensagens', label: 'Calculadora De Custos', external: false },
    { href: 'https://tools.wizebot.com.br/links', label: 'Gerador De Links', external: true },
    { href: 'https://tools.wizebot.com.br/organizar', label: 'Organizador De Contatos', external: true },
    { href: 'https://tools.wizebot.com.br/qrcode', label: 'Gerador De QR Code', external: true },
    { href: 'https://tools.wizebot.com.br/mensagens', label: 'Mensagem De Modelo Com IA', external: true },
  ]

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/wizebot-logo.svg"
            alt="Wizebot"
            width={120}
            height={30}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
            Início
          </Link>
          <Link href="/planos" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
            Planos
          </Link>
          <a 
            href="https://help.wizebot.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            Ajuda
          </a>
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-gray-600 group-hover:text-gray-900 font-medium text-sm"
            >
              Utilidades
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200">
              <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
              {utilityLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.wizebot.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            <Button variant="ghost" className="font-medium text-sm">Login</Button>
          </a>
          <Link href="/planos">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">Comece Agora</Button>
          </Link>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
              Início
            </Link>
            <Link href="/planos" className="block py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
              Planos
            </Link>
            <a 
              href="https://help.wizebot.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
            >
              Ajuda
            </a>
            <div className="py-2">
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium text-sm"
                onClick={() => setIsUtilitiesOpen(!isUtilitiesOpen)}
              >
                Utilidades
                {isUtilitiesOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {isUtilitiesOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  {utilityLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://app.wizebot.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="w-full font-medium text-sm">Login</Button>
              </a>
              <Link href="/planos">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">Comece Agora</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
