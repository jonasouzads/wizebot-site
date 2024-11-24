import CtaTwo from "~/components/Section/Common/Cta-2/CtaTwo";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";
import IntegrationSection from "~/components/Section/Common/Integrations/Integracoes";
import PaymentIntegrations from "~/components/Section/Common/PaymentIntegrations/PaymentIntegrations";
import BrandSection from "~/components/Section/Home/Brand/Brand";
import ContentSectionOne from "~/components/Section/Home/Content/ContentOne";
import ContentSectionTwo from "~/components/Section/Home/Content/ContentTwo";
import ContentSectionTree from "~/components/Section/Home/Content/ContentTree";
import ContentSectionFor from "~/components/Section/Home/Content/ContentFor";
import FeatureSection from "~/components/Section/Home/Feature/Feature";
import HeroSection from "~/components/Section/Home/Hero/Hero";
import PricingSection from "~/components/Section/Home/Pricing/Pricing";
import PricingTwo from "~/components/Section/Pricing/Pricing-2/Pricing";
import Faq from "~/components/Section/Faq/Faq/Faq";
import Testimonial from "~/components/Section/Home/Testimonial/Testimonial";
import Header from "~/components/Section/Common/Header/HomeHeader";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionTree />
      <ContentSectionFor />
      <Testimonial />
      <PricingSection />
      <PricingTwo />
      <IntegrationSection />
      <PaymentIntegrations />
      <CtaTwo />
      <Faq />
      <FooterTwo />
    </>
  );
}
