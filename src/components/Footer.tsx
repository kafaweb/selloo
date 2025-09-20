import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="selloo-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Language Toggle */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-selloo-green">Selloo</h3>
            
            <div className="flex gap-2">
              <Button
                variant={language === 'vi' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('vi')}
                className="h-8 px-3 text-sm"
              >
                VI
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="h-8 px-3 text-sm"
              >
                EN
              </Button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('contact')}</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-selloo-green transition-colors"
              >
                {t('legalNotice')}
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-selloo-green transition-colors"
              >
                {t('privacyPolicy')}
              </a>
              <a
                href="mailto:hello@selloo.vn"
                className="block text-sm text-muted-foreground hover:text-selloo-green transition-colors"
              >
                hello@selloo.vn
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Social</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/selloo.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Instagram className="w-5 h-5 text-selloo-green" />
              </a>
              <a
                href="https://facebook.com/selloo.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Facebook className="w-5 h-5 text-selloo-green" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Selloo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;