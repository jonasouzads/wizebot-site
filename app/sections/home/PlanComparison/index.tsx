'use client'

import { useState } from 'react'
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatedSection } from '@/app/components/ui/animated-section'

const features = [
  {
    name: 'Atendentes',
    basic: '2',
    pro: '5',
    elite: '10',
    category: 'Principais'
  },
  {
    name: 'WhatsApp Conectado',
    basic: '1 WhatsApp',
    pro: '1 WhatsApp',
    elite: '1 WhatsApp',
    category: 'Principais'
  },
  {
    name: 'Limite de Contatos',
    basic: '5.000',
    pro: '15.000',
    elite: '30.000',
    category: 'Principais'
  },
  {
    name: 'Acesso ao Instagram',
    basic: false,
    pro: 'Em Breve',
    elite: 'Em Breve',
    category: 'Principais'
  },
  {
    name: 'Painel de Controle',
    basic: true,
    pro: true,
    elite: true,
    category: 'Recursos Básicos'
  },
  {
    name: 'CRM para Contatos',
    basic: true,
    pro: true,
    elite: true,
    category: 'Recursos Básicos'
  },
  {
    name: 'Campos Personalizados',
    basic: true,
    pro: true,
    elite: true,
    category: 'Recursos Básicos'
  },
  {
    name: 'Disparo em Massa',
    basic: true,
    pro: true,
    elite: true,
    category: 'Recursos Básicos'
  },
  {
    name: 'Criador de Automações',
    basic: true,
    pro: true,
    elite: true,
    category: 'Automação'
  },
  {
    name: 'Fluxos de Conversa Ilimitados',
    basic: true,
    pro: true,
    elite: true,
    category: 'Automação'
  },
  {
    name: 'Palavras Chaves Ilimitadas',
    basic: true,
    pro: true,
    elite: true,
    category: 'Automação'
  },
  {
    name: 'Reescrita com IA',
    basic: true,
    pro: true,
    elite: true,
    category: 'IA e Analytics'
  },
  {
    name: 'Remarketing Ilimitados',
    basic: true,
    pro: true,
    elite: true,
    category: 'Marketing'
  },
  {
    name: 'Disparos de SMS',
    basic: true,
    pro: true,
    elite: true,
    category: 'Marketing'
  },
  {
    name: 'Etiquetas',
    basic: true,
    pro: true,
    elite: true,
    category: 'Organização'
  },
  {
    name: 'Inteligência Artificial ChatGPT',
    basic: false,
    pro: true,
    elite: true,
    category: 'IA e Analytics'
  },
  {
    name: 'Relatórios de Cliques nos Botões',
    basic: false,
    pro: true,
    elite: true,
    category: 'IA e Analytics'
  },
  {
    name: 'Integração via Webhook',
    basic: false,
    pro: true,
    elite: true,
    category: 'Integrações'
  },
  {
    name: 'Integração via API',
    basic: false,
    pro: true,
    elite: true,
    category: 'Integrações'
  },
  {
    name: 'Shopify e Woocommerce',
    basic: false,
    pro: true,
    elite: true,
    category: 'E-commerce'
  },
  {
    name: 'Remarketing Woocommerce',
    basic: false,
    pro: true,
    elite: true,
    category: 'E-commerce'
  },
  {
    name: 'WhatsApp Flows',
    basic: false,
    pro: false,
    elite: true,
    category: 'Recursos Avançados'
  },
  {
    name: 'Carrocel no WhatsApp',
    basic: false,
    pro: true,
    elite: true,
    category: 'Recursos Avançados'
  },
  {
    name: 'Integração Google Planilhas',
    basic: false,
    pro: true,
    elite: true,
    category: 'Integrações'
  },
  {
    name: 'Integração via API no ChatBot',
    basic: false,
    pro: false,
    elite: true,
    category: 'Recursos Avançados'
  }
]

export function PlanComparison() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())
  const [isExpanded, setIsExpanded] = useState(true)

  const categories = Array.from(new Set(features.map(f => f.category)))

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  const toggleAll = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      setOpenCategories(new Set(categories))
    } else {
      setOpenCategories(new Set())
    }
  }

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      )
    }
    return <span className="text-sm text-center block">{value}</span>
  }

  return (
    <AnimatedSection delay={0.2}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Planos e Recursos
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para o seu negócio e comece a automatizar seu atendimento hoje mesmo!
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 rounded-3xl bg-white">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {isExpanded ? 'Comparação Detalhada' : 'Comparação Resumida'}
                </h3>
                <button
                  onClick={toggleAll}
                  className="flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-150"
                >
                  {isExpanded ? (
                    <>
                      Ocultar Comparação
                      <ChevronUp className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Mostrar Comparação
                      <ChevronDown className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50/80">
                    <th scope="col" className="py-6 px-6 text-left text-sm font-medium text-gray-500 w-1/3 border-r border-gray-200 rounded-tl-3xl">Recursos</th>
                    <th scope="col" className="py-6 px-6 text-center text-sm font-medium text-gray-500 w-1/5 border-r border-gray-200">Básico</th>
                    <th scope="col" className="py-6 px-6 text-center text-sm font-medium text-gray-500 w-1/5 border-r border-gray-200">Pro</th>
                    <th scope="col" className="py-6 px-6 text-center text-sm font-medium text-gray-500 w-1/5 rounded-tr-3xl">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {categories.flatMap(category => {
                    const categoryFeatures = features.filter(f => f.category === category)
                    return [
                      <tr key={`${category}-header`} 
                          className="border-t border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                          onClick={() => toggleCategory(category)}>
                        <td colSpan={4} className="py-4 px-6">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-medium text-gray-900">{category}</span>
                            {openCategories.has(category) ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </td>
                      </tr>,
                      ...(openCategories.has(category)
                        ? categoryFeatures.map((feature, index) => (
                            <tr key={`${category}-${feature.name}`}
                                className={`border-t border-gray-200 ${
                                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                }`}>
                              <td className="py-4 px-6 text-sm text-gray-900 border-r border-gray-200">{feature.name}</td>
                              <td className="py-4 px-6 text-center border-r border-gray-200">{renderFeatureValue(feature.basic)}</td>
                              <td className="py-4 px-6 text-center border-r border-gray-200">{renderFeatureValue(feature.pro)}</td>
                              <td className="py-4 px-6 text-center">{renderFeatureValue(feature.elite)}</td>
                            </tr>
                          ))
                        : [])
                    ]
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
