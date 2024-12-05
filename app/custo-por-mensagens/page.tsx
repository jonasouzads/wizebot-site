'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  Calculator, 
  RotateCw, 
  TrendingUp, 
  Lock, 
  Check, 
  MessageSquare 
} from 'lucide-react'

const modelos = {
  "0.0080": { 
    nome: "Utilidade", 
    preco: 0.0080,
    icon: MessageSquare,
    desc: "Suporte e atendimento ao cliente"
  },
  "0.0625": { 
    nome: "Marketing", 
    preco: 0.0625,
    icon: TrendingUp,
    desc: "Perfeito para campanhas e promoções"
  },
  "0.0315": { 
    nome: "Autenticação", 
    preco: 0.0315,
    icon: Lock,
    desc: "Segurança e verificação em dois fatores"
  },
}

const beneficios = [
  "Atendimento 24/7 automatizado",
  "Integração com sistemas existentes",
  "Relatórios detalhados em tempo real",
  "Suporte técnico especializado",
  "Segurança e conformidade",
  "Escalabilidade garantida"
]

export default function CalculadoraPage() {
  const [modelo, setModelo] = useState("0.0080")
  const [cotacao, setCotacao] = useState(5.71)
  const [quantidade, setQuantidade] = useState(1)
  const [custoEstimado, setCustoEstimado] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const obterCotacao = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      const data = await response.json()
      if (data.USDBRL) {
        setCotacao(parseFloat(data.USDBRL.high))
      }
    } catch (error) {
      console.error('Erro ao obter cotação:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    obterCotacao()
  }, [obterCotacao])

  const calcularCusto = (modeloValor = modelo, cotacaoValor = cotacao, quantidadeValor = quantidade) => {
    const custo = parseFloat(modeloValor) * cotacaoValor * quantidadeValor
    setCustoEstimado(custo)
  }

  const handleModeloChange = (valor: string) => {
    setModelo(valor)
    calcularCusto(valor, cotacao, quantidade)
  }

  const handleCotacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseFloat(e.target.value) || 0
    setCotacao(valor)
    calcularCusto(modelo, valor, quantidade)
  }

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value)
    setQuantidade(valor)
    calcularCusto(modelo, cotacao, valor)
  }

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Informações */}
          <div className="w-full">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Calcule seus custos do WhatsApp Business
              </h1>
              <p className="text-xl text-gray-600">
                A Calculadora do WhatsApp Business API é uma ferramenta útil para as empresas
                calcularem o custo da utilização do WhatsApp para as suas comunicações.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Precisa da plataforma WhatsApp Business?
              </h3>
              <div className="space-y-3 mb-6">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/teste-gratis"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Teste a Wizebot gratuitamente
              </Link>
            </div>
          </div>

          {/* Calculadora Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-8">
              <div className="space-y-6">
                {/* Modelo Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Escolha o modelo:
                  </label>
                  <div className="space-y-4">
                    {Object.entries(modelos).map(([valor, { nome, preco, icon: Icon, desc }]) => (
                      <div
                        key={valor}
                        onClick={() => handleModeloChange(valor)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          modelo === valor
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-200'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`p-3 rounded-lg ${
                            modelo === valor ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="ml-4 flex-grow">
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold">{nome}</h3>
                              <span className="text-blue-600 font-semibold">
                                ${preco.toFixed(4)}/msg
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">{desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cotação */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cotação atual do dólar (R$):
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      value={cotacao}
                      onChange={handleCotacaoChange}
                      step="0.01"
                      className="flex-1 rounded-l-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ex: 5.20"
                    />
                    <button
                      onClick={obterCotacao}
                      disabled={isLoading}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      <RotateCw className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                      {isLoading ? 'Atualizando...' : 'Atualizar'}
                    </button>
                  </div>
                </div>

                {/* Quantidade */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantidade de mensagens:
                  </label>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-blue-600 mr-2">
                      {quantidade.toLocaleString()}
                    </span>
                    <span className="text-gray-600">mensagens</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10000"
                    value={quantidade}
                    onChange={handleQuantidadeChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>5.000</span>
                    <span>10.000</span>
                  </div>
                </div>

                {/* Resultado */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
                  <p className="text-gray-600 mb-2">Custo Estimado</p>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-gray-900">
                      {custoEstimado.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </span>
                    <span className="text-2xl text-gray-500">BRL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg max-w-3xl mx-auto">
          <div className="flex">
            <Calculator className="w-5 h-5 text-yellow-400" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-yellow-800">
                Aviso Importante
              </h4>
              <p className="text-sm text-yellow-700 mt-2">
                Os preços indicados estão sujeitos a alterações em Meta. Consulte a página
                <Link
                  href="https://developers.facebook.com/docs/whatsapp/pricing?locale=pt_BR"
                  className="mx-2 text-yellow-800 font-medium underline"
                >
                  Meta
                </Link>
                para obter as últimas atualizações de preços.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de informações */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-marquee whitespace-nowrap overflow-hidden">
            <span className="inline-block mx-4">💬 Transforme seu atendimento com WhatsApp Business</span>
            <span className="inline-block mx-4">🚀 Aumente suas vendas com automação</span>
            <span className="inline-block mx-4">✨ Melhore a experiência dos seus clientes</span>
            <span className="inline-block mx-4">📈 Escale seu negócio com inteligência</span>
          </div>
        </div>
      </div>
    </main>
  )
}