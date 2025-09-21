import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import WhyDownloadSection from '@/components/WhyDownloadSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const SellooLandingPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <WhyDownloadSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default SellooLandingPage;