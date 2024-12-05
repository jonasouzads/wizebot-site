'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedSection } from '@/app/components/ui/animated-section'

export function MetaPartnership() {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Parceiro Oficial Meta</h2>
            <p className="text-lg text-white/90 mb-12">
              A Wizebot é um parceiro oficial certificado pela Meta, garantindo a mais alta qualidade
              e confiabilidade em soluções para WhatsApp Business. Nossa parceria nos permite
              oferecer recursos avançados e suporte especializado para impulsionar seu negócio.
            </p>
            <div className="relative">
              {/* Efeito de brilho */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1968f0]/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#1968f0]/30 rounded-full blur-3xl" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="https://www.facebook.com/business/partner-directory/search?solution_type=campaign_management&id=7294219637349954&section=overview" 
                  target="_blank"
                  className="relative inline-block group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/metapartners.png"
                      alt="Wizebot - Parceiro Oficial Meta"
                      width={1000}
                      height={500}
                      className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-[#1968f0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mt-8"
              >
                <div className="relative inline-block group">
                  <Image
                    src="/images/meta/Meta_Business_Partners.png"
                    alt="Meta Business Partners Logo"
                    width={300}
                    height={150}
                    className="mx-auto transition-all duration-300 group-hover:brightness-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
