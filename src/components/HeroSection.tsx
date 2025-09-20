import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import qrCodeImage from '@/assets/qr-code-placeholder.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-selloo-green-light selloo-section">
      <div className="selloo-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-selloo-green mb-2">
              Selloo
            </h1>
          </div>

          {/* Hero Title */}
          <h2 className="selloo-heading mb-6">
            {t('heroTitle')}
          </h2>
          
          {/* Hero Subtitle */}
          <p className="selloo-subheading mb-12 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>

          {/* QR Code */}
          <div className="mb-8">
            <div className="inline-block p-6 bg-white rounded-3xl shadow-lg">
              <img
                src={qrCodeImage}
                alt="Selloo QR Code"
                className="w-48 h-48 sm:w-56 sm:h-56 mx-auto"
              />
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              asChild 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl h-auto"
            >
              <a href="#" className="flex items-center gap-3">
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </Button>
            
            <Button 
              asChild 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl h-auto"
            >
              <a href="#" className="flex items-center gap-3">
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </Button>
          </div>

          {/* QR Text */}
          <p className="text-sm sm:text-base text-selloo-gray-light max-w-md mx-auto">
            {t('qrText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;