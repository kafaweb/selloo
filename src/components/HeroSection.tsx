import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import qrCodeImage from '@/assets/qr-code-placeholder.png';
import sellooLogo from '@/assets/selloo-logo.png';
import appStoreBadge from '@/assets/app-store-badge.svg';
import googlePlayBadge from '@/assets/google-play-badge.svg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-selloo-green-light selloo-section">
      <div className="selloo-container text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={sellooLogo}
              alt="Selloo Logo"
              className="h-16 sm:h-20 lg:h-24 mx-auto"
            />
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
            <a 
              href="#" 
              className="transition-transform hover:scale-105"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
            
            <a 
              href="#" 
              className="transition-transform hover:scale-105"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>
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