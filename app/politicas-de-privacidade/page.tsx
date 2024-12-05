export default function PoliticasPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Política de Privacidade</h1>
        
        <div className="mt-8 prose prose-lg">
          <p>
            A WizeBot está comprometida em proteger sua privacidade. Esta Política de Privacidade
            descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>

          <h2>1. Informações que Coletamos</h2>
          <p>
            Coletamos informações que você nos fornece diretamente, incluindo:
          </p>
          <ul>
            <li>Nome e informações de contato</li>
            <li>Informações de pagamento</li>
            <li>Dados de uso da plataforma</li>
            <li>Comunicações com nossa equipe</li>
          </ul>

          <h2>2. Como Usamos suas Informações</h2>
          <p>
            Utilizamos suas informações para:
          </p>
          <ul>
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Processar pagamentos</li>
            <li>Enviar atualizações importantes</li>
            <li>Personalizar sua experiência</li>
            <li>Resolver problemas técnicos</li>
          </ul>

          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais. Compartilhamos dados apenas com:
          </p>
          <ul>
            <li>Provedores de serviço necessários para nossa operação</li>
            <li>Quando exigido por lei</li>
            <li>Com seu consentimento explícito</li>
          </ul>

          <h2>4. Segurança</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger
            suas informações contra acesso não autorizado, alteração ou destruição.
          </p>

          <h2>5. Seus Direitos</h2>
          <p>
            Você tem direito a:
          </p>
          <ul>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar exclusão de dados</li>
            <li>Retirar consentimento</li>
            <li>Exportar seus dados</li>
          </ul>

          <h2>6. Contato</h2>
          <p>
            Para questões sobre privacidade, entre em contato:
            <br />
            Email: privacy@wizebot.com
            <br />
            Telefone: (XX) XXXX-XXXX
          </p>

          <h2>7. Atualizações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Notificaremos sobre
            mudanças significativas através de nosso site ou por email.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Última atualização: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  )
}
