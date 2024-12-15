"use client";
import dynamic from 'next/dynamic';
import CtaTwo from "~/components/Section/Common/Cta-2/CtaTwo";
import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";
import Header from "~/components/Section/Common/Header/HomeHeader";
import HeroSection from "~/components/Section/Home/Hero/Hero";
import BrandSection from "~/components/Section/Home/Brand/Brand";

// Lazy load components
const ContentSectionOne = dynamic(() => import("~/components/Section/Home/Content/ContentOne"), { ssr: true });
const ContentSectionTwo = dynamic(() => import("~/components/Section/Home/Content/ContentTwo"), { ssr: true });
const ContentSectionTree = dynamic(() => import("~/components/Section/Home/Content/ContentTree"), { ssr: true });
const ContentSectionFor = dynamic(() => import("~/components/Section/Home/Content/ContentFor"), { ssr: true });
const ContentSectionFive = dynamic(() => import("~/components/Section/Home/Content/ContentFive"), { ssr: true });
const ContentSectionSix = dynamic(() => import("~/components/Section/Home/Content/ContentSix"), { ssr: true });
const FeatureSection = dynamic(() => import("~/components/Section/Home/Feature/Feature"), { ssr: true });
const PricingSection = dynamic(() => import("~/components/Section/Home/Pricing/Pricing"), { ssr: true });
const PricingTwo = dynamic(() => import("~/components/Section/Pricing/Pricing-2/Pricing"), { ssr: true });
const Faq = dynamic(() => import("~/components/Section/Faq/Faq/Faq"), { ssr: true });
const Testimonial = dynamic(() => import("~/components/Section/Home/Testimonial/Testimonial"), { ssr: true });
const IntegrationSection = dynamic(() => import("~/components/Section/Common/Integrations/Integracoes"), { ssr: true });
const PaymentIntegrations = dynamic(() => import("~/components/Section/Common/PaymentIntegrations/PaymentIntegrations"), { ssr: true });
const MetaPartnership = dynamic(() => import("~/components/Section/Home/MetaPartnership/MetaPartnership"), { ssr: true });

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <MetaPartnership />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionTree />
      <ContentSectionFor />
      <ContentSectionFive />
      <ContentSectionSix />
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
