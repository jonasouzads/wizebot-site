import Link from "next/link";

const PricingSectionTwo = () => {
  return (
    <>
      <div className="wizebot-divider"></div>

      <div className="section wizebot-section-padding3">
        <div className="container">
          <div className="wizebot-section-title wizebot-two-column-title">
            <div className="row">
              <div className="col-lg-7">
                <h2>Planos e Recursos</h2>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <p>
                  Escolha o plano ideal para o seu negócio e comece a automatizar seu atendimento hoje mesmo!
                </p>
              </div>
            </div>
          </div>

          <div className="wizebot-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Recursos:</th>
                  <th>Básico</th>
                  <th>Pro</th>
                  <th>Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Atendentes</td>
                  <td>2</td>
                  <td>5</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>WhatsApp Conectado</td>
                  <td>1 número</td>
                  <td>1 número</td>
                  <td>1 número</td>
                </tr>
                <tr>
                  <td>Limite de Contatos</td>
                  <td>5.000</td>
                  <td>15.000</td>
                  <td>30.000</td>
                </tr>
                <tr>
                  <td>Painel de Controle</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>CRM para Contatos</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Campos Personalizados</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Disparo em Massa</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Criador de Automações</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Fluxos de Conversa Ilimitados</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Palavras Chaves Ilimitadas</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Reescrita com IA</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Remarketing Ilimitados</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Disparos de SMS</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Etiquetas</td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Acesso ao Instagram</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td>Em Breve</td>
                  <td>Em Breve</td>
                </tr>
                <tr>
                  <td>Inteligência Artificial ChatGPT</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Relatórios de Cliques nos Botões</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Integração via Webhook</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Integração via API</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Shopify e Woocommerce</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Remarketing Woocommerce</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>WhatsApp Flows</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Carrocel no WhatsApp</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Integração Google Planilhas</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>Integração via API no ChatBot</td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/minus.svg" alt="Não incluído" /></td>
                  <td><img src="/images/icon/check.svg" alt="Incluído" /></td>
                </tr>
                <tr>
                  <td>WA+</td>
                  <td>R$ 47</td>
                  <td>R$ 67</td>
                  <td>R$ 97</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link className="wizebot-default-btn" href="contact-us">
                      <span>Começar Agora</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="wizebot-default-btn" href="contact-us">
                      <span>Começar Agora</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="wizebot-default-btn" href="contact-us">
                      <span>Começar Agora</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSectionTwo;
