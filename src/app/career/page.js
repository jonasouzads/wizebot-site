import CtaThree from "~/components/Section/Common/Cta-3/CtaThree";
import Footer from "~/components/Section/Common/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Header from "~/components/Section/Common/Header/Header";


const CareerPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Career" />
      <CtaThree title="Mesmo assim, você tem alguma dúvida?" btnText="Fale Conosco" />
      <Footer />
    </>
  );
};

export default CareerPage;
