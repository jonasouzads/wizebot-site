import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import IntegrationSection from "~/components/Section/Integrations/integrations/Integrations";
import Header from "~/components/Section/Common/Header/Header";

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <PageHeader title="Integrações" />
      <div className="wizebot-section-padding2">
        <IntegrationSection />
      </div>
      <Footer />
    </>
  );
}
