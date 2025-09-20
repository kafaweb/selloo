import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Filter, MessageCircle, Crown } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('feature1'),
    },
    {
      icon: Filter,
      title: t('feature2'),
    },
    {
      icon: MessageCircle,
      title: t('feature3'),
    },
    {
      icon: Crown,
      title: t('feature4'),
    },
  ];

  return (
    <section className="selloo-section bg-secondary/30">
      <div className="selloo-container">
        <div className="text-center mb-16">
          <h2 className="selloo-heading mb-6">
            {t('featuresTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="selloo-card hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-selloo-green-light rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-selloo-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;