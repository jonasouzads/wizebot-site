import CtaTwo from "~/components/Section/Common/Cta-2/CtaTwo";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";
import Integrationsection from "~/components/Section/Common/Integration/Integration";
import BrandSection from "~/components/Section/Home/Brand/Brand";
import ContentSectionOne from "~/components/Section/Home/Content/ContentOne";
import ContentSectionTwo from "~/components/Section/Home/Content/ContentTwo";
import ContentSectionTree from "~/components/Section/Home/Content/ContentTree";
import FeatureSection from "~/components/Section/Home/Feature/Feature";
import HeroSection from "~/components/Section/Home/Hero/Hero";
import PricingSection from "~/components/Section/Home/Pricing/Pricing";
import TestimonialSection from "~/components/Section/Home/Testimonial/Testimonial";
import Header from "~/components/Section/Common/Header/HomeHeader";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <TestimonialSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionTree />
      <PricingSection />
      <Integrationsection />
      <CtaTwo />
      <FooterTwo />
    </>
  );
}
