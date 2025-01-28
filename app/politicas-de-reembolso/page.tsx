export default function PoliticasReembolsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Política de Reembolso</h1>
        
        <div className="mt-8 prose prose-lg">
          <p>
            A WizeBot está comprometida com a satisfação dos nossos clientes. Esta política
            de reembolso foi desenvolvida para garantir um processo justo e transparente.
          </p>

          <h2>1. Elegibilidade para Reembolso</h2>
          <p>
            Você pode ser elegível para reembolso nas seguintes situações:
          </p>
          <ul>
            <li>Cancelamento nos primeiros 7 dias (período de teste)</li>
            <li>Cobranças duplicadas ou incorretas</li>
            <li>Indisponibilidade significativa do serviço</li>
            <li>Problemas técnicos não resolvidos</li>
          </ul>

          <h2>2. Processo de Reembolso</h2>
          <p>
            Para solicitar um reembolso:
          </p>
          <ol>
            <li>Entre em contato com nosso suporte</li>
            <li>Forneça o motivo detalhado do reembolso</li>
            <li>Inclua informações da transação</li>
            <li>Aguarde análise da nossa equipe (até 5 dias úteis)</li>
          </ol>

          <h2>3. Prazos</h2>
          <p>
            Importante considerar:
          </p>
          <ul>
            <li>Solicitações devem ser feitas em até 30 dias da compra</li>
            <li>Processamento do reembolso: 5-10 dias úteis</li>
            <li>Crédito no cartão: 1-2 ciclos de faturamento</li>
          </ul>

          <h2>4. Exclusões</h2>
          <p>
            Não são elegíveis para reembolso:
          </p>
          <ul>
            <li>Serviços já utilizados completamente</li>
            <li>Solicitações após 30 dias da compra</li>
            <li>Violações dos Termos de Uso</li>
            <li>Cancelamentos após período de teste</li>
          </ul>

          <h2>5. Formas de Reembolso</h2>
          <p>
            O reembolso será processado:
          </p>
          <ul>
            <li>Na mesma forma de pagamento original</li>
            <li>Em créditos na plataforma (se solicitado)</li>
            <li>Por transferência bancária em casos especiais</li>
          </ul>

          <h2>6. Casos Especiais</h2>
          <p>
            Algumas situações podem ser analisadas individualmente:
          </p>
          <ul>
            <li>Problemas técnicos comprovados</li>
            <li>Eventos extraordinários</li>
            <li>Mudanças significativas no serviço</li>
          </ul>

          <h2>7. Contato</h2>
          <p>
            Para solicitar reembolso ou tirar dúvidas:
            <br />
            Email: reembolso@wizebot.com
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
