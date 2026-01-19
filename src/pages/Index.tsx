import Layout from "@/components/Layout";
import HeroSection from "@/sections/HeroSection";
import WhatWeDoSection from "@/sections/WhatWeDoSection";
import CoreServicesSection from "@/sections/CoreServicesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import IndustriesSection from "@/sections/IndustriesSection";
import FAQSection from "@/sections/FAQSection";
import FinalCTASection from "@/sections/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <CoreServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
