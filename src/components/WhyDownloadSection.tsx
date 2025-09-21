import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const WhyDownloadSection = () => {
  const { t } = useLanguage();

  const points = [
    t('whyPoint1'),
    t('whyPoint2'),
    t('whyPoint3'),
    t('whyPoint4'),
  ];

  return (
    <section className="selloo-section bg-secondary/50">
      <div className="selloo-container">
        <div className="text-center mb-12">
          <h2 className="selloo-heading">
            {t('whyDownloadTitle')}
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-selloo-green rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDownloadSection;