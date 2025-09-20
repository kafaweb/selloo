import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const CTASection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
    });
    setFormData({ name: '', email: '', city: '' });
  };

  return (
    <section className="selloo-section bg-selloo-green-light">
      <div className="selloo-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="selloo-heading mb-6">
            {t('ctaTitle')} 👋
          </h2>
          
          <p className="selloo-subheading mb-12">
            {t('ctaSubtitle')}
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              name="name"
              placeholder={t('formName')}
              value={formData.name}
              onChange={handleInputChange}
              required
              className="h-12 text-base"
            />
            
            <Input
              type="email"
              name="email"
              placeholder={t('formEmail')}
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12 text-base"
            />
            
            <Input
              type="text"
              name="city"
              placeholder={t('formCity')}
              value={formData.city}
              onChange={handleInputChange}
              required
              className="h-12 text-base"
            />
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold bg-selloo-green hover:bg-selloo-green/90"
            >
              {t('formSubmit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;