export default function TermosUsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Termos de Uso</h1>
        
        <div className="mt-8 prose prose-lg">
          <p>
            Bem-vindo à WizeBot. Ao acessar ou usar nossos serviços, você concorda
            com estes termos de uso. Por favor, leia-os atentamente.
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar a plataforma WizeBot, você concorda em ficar vinculado
            a estes Termos de Uso e todas as leis e regulamentos aplicáveis.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            A WizeBot fornece uma plataforma de automação de atendimento ao cliente
            que inclui, mas não se limita a:
          </p>
          <ul>
            <li>Chatbot com IA</li>
            <li>Análise de dados</li>
            <li>Integrações com plataformas terceiras</li>
            <li>Ferramentas de automação</li>
          </ul>

          <h2>3. Conta de Usuário</h2>
          <p>
            Para usar nossos serviços, você deve:
          </p>
          <ul>
            <li>Criar uma conta com informações precisas</li>
            <li>Manter suas credenciais seguras</li>
            <li>Notificar imediatamente sobre uso não autorizado</li>
            <li>Ser responsável por todas as atividades em sua conta</li>
          </ul>

          <h2>4. Pagamentos e Assinaturas</h2>
          <p>
            Ao assinar nossos serviços:
          </p>
          <ul>
            <li>Você concorda com os preços e termos de pagamento</li>
            <li>Pagamentos são não-reembolsáveis, exceto quando exigido por lei</li>
            <li>Podemos alterar preços com notificação prévia</li>
            <li>Você é responsável por impostos aplicáveis</li>
          </ul>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo e software da WizeBot são protegidos por direitos autorais
            e outras leis de propriedade intelectual.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            A WizeBot não será responsável por:
          </p>
          <ul>
            <li>Danos indiretos ou consequenciais</li>
            <li>Perda de dados ou interrupção de negócios</li>
            <li>Problemas causados por terceiros</li>
            <li>Eventos fora de nosso controle razoável</li>
          </ul>

          <h2>7. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento.
            Alterações significativas serão notificadas com antecedência.
          </p>

          <h2>8. Contato</h2>
          <p>
            Para questões sobre estes termos:
            <br />
            Email: legal@wizebot.com
            <br />
            Telefone: (XX) XXXX-XXXX
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Última atualização: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  )
}
