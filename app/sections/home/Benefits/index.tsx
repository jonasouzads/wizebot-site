'use client'

import { MassBroadcast } from './MassBroadcast'
import { ProductCarousel } from './ProductCarousel'
import { AIRewrite } from './AIRewrite'
import { AutomatedService } from './AutomatedService'

export function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MassBroadcast />
        <ProductCarousel />
        <AIRewrite />
        <AutomatedService />
      </div>
    </section>
  )
}