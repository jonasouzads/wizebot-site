import Header from "~/components/Section/Common/Header/Header";
import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Calculadora from "~/components/Section/Calculadora";

export default function CalculadoraPage() {
  return (
    <>
      <Header />
      <PageHeader title="Calculadora de Custos" />
      <Calculadora />
      <Footer />
    </>
  );
}
