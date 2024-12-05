'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/wizebot-logo.svg"
              alt="Wizebot"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* 404 Image */}
        <div className="relative mx-auto w-64 h-64 mb-8">
          <Image
            src="/images/404.png"
            alt="404 Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Error Message */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Ops! Parece que você pegou o caminho errado
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Voltar ao início
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
