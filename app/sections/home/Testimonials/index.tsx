'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/app/components/ui/animated-section'

const testimonials = [
  {
    name: 'Jaine Alcantara',
    username: '@jainealcantara',
    avatar: '/images/testimonials/avatar (1).png',
    content: 'Depois que comecei a utilizar na Abêcê Recursos Pedagogicos não tive mais problemas na entrega dos meus produtos, o cliente compra e já recebe automaticamente no WhatsApp.',
    stats: {
      comments: 32,
      retweets: 89,
      likes: 245
    }
  },
  {
    name: 'André',
    username: '@andréaugusto308',
    avatar: '/images/testimonials/avatar (2).png',
    content: 'Ferramenta perfeito suporte diferenciado atencioso me atendeu até no feriado super indico parabéns',
    stats: {
      comments: 28,
      retweets: 67,
      likes: 189
    }
  },
  {
    name: 'Tag Corretora de Seguro',
    username: '@izabastos',
    avatar: '/images/testimonials/avatar (3).png',
    content: 'Uso e indico',
    stats: {
      comments: 45,
      retweets: 156,
      likes: 312
    }
  },
  {
    name: 'Pedro',
    username: '@pedroagencia',
    avatar: '/images/testimonials/avatar1.png',
    content: 'Como agência, precisávamos de uma solução que nos ajudasse a gerenciar múltiplos clientes. A Wizebot não só resolveu isso como superou nossas expectativas! O suporte é sensacional e as integrations funcionam perfeitamente.',
    stats: {
      comments: 36,
      retweets: 94,
      likes: 278
    }
  },
  {
    name: 'Ana',
    username: '@anabeatriz',
    avatar: '/images/testimonials/avatar2.png',
    content: 'A inteligência artificial da Wizebot é impressionante! Ela entende perfeitamente as dúvidas dos clientes e fornece respostas precisas. Minha taxa de conversão aumentou 40% desde que comecei a usar. Simplesmente fantástico!',
    stats: {
      comments: 58,
      retweets: 167,
      likes: 423
    }
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos reais de pessoas que transformaram seus negócios com a Wizebot
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.username}
              delay={0.1 * index}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.avatar}
                    alt="Avatar do usuário"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark flex items-center gap-1">
                    {testimonial.name}
                    <svg className="w-4 h-4 text-brand-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </svg>
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.username}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{testimonial.content}</p>

              <div className="flex items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {testimonial.stats.comments}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {testimonial.stats.retweets}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {testimonial.stats.likes}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
