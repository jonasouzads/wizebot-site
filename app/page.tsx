'use client'

import { Hero } from '@/app/sections/home/Hero'
import { WhyWizebot } from '@/app/sections/home/WhyWizebot'
import { Features } from '@/app/sections/home/Features'
import { Benefits } from '@/app/sections/home/Benefits'
import { Testimonials } from '@/app/sections/home/Testimonials'
import { Integrations } from '@/app/sections/home/Integrations'
import { Partners } from '@/app/sections/home/Partners'
import { Pricing } from '@/app/sections/home/Pricing'
import { PlanComparison } from '@/app/sections/home/PlanComparison'
import { Trial } from '@/app/sections/home/Trial'
import { CTA } from '@/app/sections/home/CTA'
import { Brands } from '@/app/sections/home/Brands'
import { MetaPartnership } from '@/app/sections/home/MetaPartnership'

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <WhyWizebot />
      <Features />
      <Benefits />
      <MetaPartnership />
      <Integrations />
      <Partners />
      <Testimonials />
      <Pricing />
      <PlanComparison />
      <Trial />
      <CTA />
    </main>
  )
}