import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { UserPlus, Search, MessageSquare } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      icon: Search,
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      icon: MessageSquare,
      title: t('step3Title'),
      description: t('step3Desc'),
    },
  ];

  return (
    <section className="selloo-section">
      <div className="selloo-container">
        <div className="text-center mb-16">
          <h2 className="selloo-heading mb-6">
            {t('howItWorksTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-selloo-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-selloo-green-light rounded-full flex items-center justify-center text-selloo-green font-bold text-sm">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-selloo-green-light transform -translate-x-8"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;