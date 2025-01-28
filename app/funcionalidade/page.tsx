import { Cpu, MessageSquare, BarChart2, Zap, Database, Users, Webhook, ShoppingCart, ShoppingBag, FileSpreadsheet, Shield, MessageCircle } from 'lucide-react'

const features = [
  {
    name: 'Resposta de Bot de IA',
    description: 'Respostas automáticas inteligentes usando IA avançada',
    icon: Cpu
  },
  {
    name: 'Análise Poderosa',
    description: 'Métricas e insights detalhados sobre seu atendimento',
    icon: BarChart2
  },
  {
    name: 'Modelo de Mensagens',
    description: 'Templates personalizáveis para respostas rápidas',
    icon: MessageSquare
  },
  {
    name: 'API Poderosa',
    description: 'Integração flexível com sua infraestrutura existente',
    icon: Zap
  },
  {
    name: 'Campos Personalizados',
    description: 'Adapte a plataforma às suas necessidades específicas',
    icon: Database
  },
  {
    name: 'Segmentação de Assinantes',
    description: 'Organize e gerencie seus contatos eficientemente',
    icon: Users
  },
  {
    name: 'Fluxo de Trabalho com Webhook',
    description: 'Automatize processos com integrações webhook',
    icon: Webhook
  },
  {
    name: 'Integração com Shopify',
    description: 'Conecte-se facilmente com sua loja Shopify',
    icon: ShoppingCart
  },
  {
    name: 'Integração com WooCommerce',
    description: 'Sincronize com sua loja WooCommerce',
    icon: ShoppingBag
  },
  {
    name: 'Google Sheets',
    description: 'Exporte e importe dados facilmente',
    icon: FileSpreadsheet
  },
  {
    name: 'Mascaramento de Números',
    description: 'Proteja a privacidade dos seus atendentes',
    icon: Shield
  },
  {
    name: 'Widget de Chat',
    description: 'Interface de chat personalizável para seu site',
    icon: MessageCircle
  },
]

export default function FuncionalidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Funcionalidades
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Descubra todas as ferramentas poderosas que a WizeBot oferece
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
