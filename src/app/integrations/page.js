import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import IntegrationSection from "~/components/Section/Integrations/integration";
import Header from "~/components/Section/Common/Header/Header";


export default function IntegrationPage() {
  return (
    <>
      <Header />
      <PageHeader title="Integrações" />
      <IntegrationSection />
      <Footer />
    </>
  );
}
