'use client'

import { AnimatedSection } from '@/app/components/ui/animated-section'
import { Bot, BarChart2, FileText, Webhook, Database, Users, ShoppingBag, Table, Shield, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Resposta de Bot de IA',
    description: 'Automatize respostas com IA para respostas mais rápidas e uma melhor experiência do cliente.',
    icon: Bot,
  },
  {
    name: 'Análise Poderosa',
    description: 'Analise o desempenho das mensagens com métricas detalhadas para melhorar a estratégia de engajamento.',
    icon: BarChart2,
  },
  {
    name: 'Modelo de Mensagens',
    description: 'Crie e use facilmente modelos aprovados pelo WhatsApp para mensagens rápidas e consistentes.',
    icon: FileText,
  },
  {
    name: 'API Poderosa',
    description: 'Integre-se de forma simples com APIs flexíveis para aprimorar as funcionalidades de chatbot e marketing.',
    icon: Database,
  },
  {
    name: 'Campos Personalizados',
    description: 'Colete dados personalizados com campos personalizados para interações adaptadas ao usuário.',
    icon: Table,
  },
  {
    name: 'Segmentação de Assinantes',
    description: 'Segmentação da sua audiência para um direcionamento preciso e comunicação personalizada.',
    icon: Users,
  },
  {
    name: 'Fluxo de Trabalho com Webhook',
    description: 'Automatize processos conectando aplicativos com fluxos de trabalho personalizados baseados em webhook.',
    icon: Webhook,
  },
  {
    name: 'Integração com Shopify',
    description: 'Sincronize com Shopify para agilizar interações com clientes e rastreamento de pedidos.',
    icon: ShoppingBag,
  },
  {
    name: 'Integração com WooCommerce',
    description: 'Conecte-se com WooCommerce para atualizações de pedidos e suporte ao cliente de forma eficiente.',
    icon: ShoppingBag,
  },
  {
    name: 'Google Sheets',
    description: 'Vincule o Google Sheets para gerenciar e atualizar dados de clientes em tempo real.',
    icon: Table,
  },
  {
    name: 'Mascaramento de Números',
    description: 'Proteja a privacidade do usuário mascarando com segurança os números de contato durante as conversas.',
    icon: Shield,
  },
  {
    name: 'Widget de Chat',
    description: 'Engaje visitantes do site diretamente com um widget de chat personalizável e interativo.',
    icon: MessageCircle,
  },
]

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-bold mb-6">
              Recursos que 
              <span className="text-primary"> Transformam</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ferramentas poderosas para automatizar e escalar sua comunicação no WhatsApp Business
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 bg-white rounded-3xl transition-all duration-300 hover:shadow-xl">
                {/* Gradiente de fundo no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
                
                {/* Conteúdo */}
                <div className="relative">
                  <div className="inline-flex mb-6 p-3 rounded-2xl bg-primary/[0.07] text-primary group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
