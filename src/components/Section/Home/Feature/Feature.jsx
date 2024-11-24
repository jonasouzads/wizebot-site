import FeatureCardTwo from "~/components/Ui/Cards/FeatureTwo";

const FeatureSection = () => {
  return (
    <div className="section wizebot-section-padding3">
      <div className="container">
        <div className="wizebot-section-title center">
          <h2>Por Que a Wizebot É Sua Melhor Escolha</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FeatureCardTwo
              icon="/images/v2/icon-v2-1.png"
              title="API Oficial"
              description="Operação 100% dentro das regras do WhatsApp. Dispare campanhas sem medo de bloqueios."
              image="/images/v2/card-v2-1.png"
            />
            <FeatureCardTwo
              icon="/images/v2/icon-v2-3.png"
              title="Disparo em Massa"
              description="Alcance milhares de clientes simultaneamente, mantendo personalização e segurança."
              image="/images/v2/card-v2-3.png"
            />
          </div>
          <div className="col-lg-6">
            <FeatureCardTwo
              icon="/images/v2/icon-v2-2.png"
              title="Inteligência Artificial"
              description="ChatGPT integrado ao seu WhatsApp: Atendimento que converte 24 horas por dia."
              image="/images/v2/card-v2-2.png"
            />
            <FeatureCardTwo
              icon="/images/v2/icon-v2-4.png"
              title="integrations"
              description="Conecte-se com Hotmart, Kiwify, WooCommerce e Shopify em um único lugar."
              image="/images/v2/card-v2-4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
