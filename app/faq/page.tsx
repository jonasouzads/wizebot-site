const faqs = [
  {
    question: 'O que é a WizeBot?',
    answer: 'A WizeBot é uma plataforma de automação de atendimento que utiliza inteligência artificial para ajudar empresas a melhorar sua comunicação com clientes através do WhatsApp e outras plataformas.'
  },
  {
    question: 'Como começar a usar a WizeBot?',
    answer: 'Para começar, basta criar uma conta em nosso site, escolher um plano adequado às suas necessidades e seguir o processo de configuração inicial. Oferecemos um guia passo a passo e suporte para ajudá-lo neste processo.'
  },
  {
    question: 'Quais são os planos disponíveis?',
    answer: 'Oferecemos diferentes planos para atender às necessidades de cada negócio: Básico, Profissional e Empresarial. Cada plano inclui diferentes recursos e limites de uso. Você pode ver os detalhes completos em nossa página de preços.'
  },
  {
    question: 'A WizeBot é compatível com qual versão do WhatsApp?',
    answer: 'A WizeBot é compatível com o WhatsApp Business API, que é a versão oficial do WhatsApp para empresas. Isso garante total conformidade com as políticas do WhatsApp e segurança para seu negócio.'
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Oferecemos suporte através de múltiplos canais: email, chat ao vivo e WhatsApp. O tempo de resposta e os canais disponíveis variam de acordo com o seu plano.'
  },
  {
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer: 'Sim, você pode cancelar sua assinatura a qualquer momento. Não há contratos de longo prazo. Consulte nossa política de reembolso para mais detalhes sobre reembolsos após o cancelamento.'
  },
  {
    question: 'A WizeBot oferece período de teste?',
    answer: 'Sim, oferecemos um período de teste de 7 dias em todos os nossos planos. Durante este período, você terá acesso a todas as funcionalidades do plano escolhido para avaliar se atende às suas necessidades.'
  },
  {
    question: 'Como funciona a integração com outros sistemas?',
    answer: 'A WizeBot oferece diversas integrações nativas com plataformas populares como Shopify, WooCommerce e Google Sheets. Além disso, disponibilizamos uma API robusta para integrações personalizadas.'
  },
  {
    question: 'Quais são os requisitos técnicos?',
    answer: 'A WizeBot é uma plataforma baseada em nuvem, então você só precisa de um navegador moderno e uma conexão estável com a internet. Não é necessário instalar nenhum software adicional.'
  },
  {
    question: 'Como é garantida a segurança dos dados?',
    answer: 'Utilizamos criptografia de ponta a ponta, servidores seguros e seguimos as melhores práticas de segurança da indústria. Todos os dados são armazenados de forma segura e em conformidade com as leis de proteção de dados.'
  }
]

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Perguntas Frequentes
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre a WizeBot
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <dt className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Still have questions section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ainda tem dúvidas?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nossa equipe está pronta para ajudar você
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Falar com Suporte
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
