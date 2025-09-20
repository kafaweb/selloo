import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Hero section
    heroTitle: "Mua bán dễ dàng với Selloo",
    heroSubtitle: "Ứng dụng mua bán thông minh cho cộng đồng Việt Nam",
    qrText: "Quét mã QR hoặc bấm nút để tải ứng dụng Selloo.",
    
    // Features section
    featuresTitle: "Tính năng nổi bật",
    feature1: "Đăng tin trong 60 giây",
    feature2: "Bộ lọc thông minh (size, giá, màu, khoảng cách)",
    feature3: "Chat đơn giản + thông báo",
    feature4: "Tài khoản Pro & Premium cho người bán thường xuyên",
    
    // How it works
    howItWorksTitle: "Cách thức hoạt động",
    step1Title: "Tạo tài khoản",
    step1Desc: "Đăng ký nhanh chóng với email hoặc số điện thoại",
    step2Title: "Đăng hoặc tìm sản phẩm", 
    step2Desc: "Dễ dàng đăng tin bán hoặc tìm kiếm sản phẩm yêu thích",
    step3Title: "Trò chuyện và hoàn tất giao dịch",
    step3Desc: "Chat trực tiếp với người mua/bán và hẹn gặp",
    
    // CTA section
    ctaTitle: "Bạn muốn là người đầu tiên trải nghiệm Selloo?",
    ctaSubtitle: "Để lại email để nhận quyền truy cập sớm.",
    formName: "Họ và tên",
    formEmail: "Email",
    formCity: "Thành phố",
    formSubmit: "Đăng ký ngay",
    
    // Footer
    legalNotice: "Điều khoản sử dụng",
    privacyPolicy: "Chính sách bảo mật",
    contact: "Liên hệ",
  },
  en: {
    // Hero section  
    heroTitle: "Buy and Sell with Ease on Selloo",
    heroSubtitle: "Smart marketplace app for Vietnamese community",
    qrText: "Scan the QR code or click a button to download Selloo.",
    
    // Features section
    featuresTitle: "Key Features",
    feature1: "60-second listing",
    feature2: "Smart filters (size, price, color, distance)",
    feature3: "Clean chat + notifications",
    feature4: "Pro & Premium accounts for active sellers",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1Title: "Create your account",
    step1Desc: "Quick registration with email or phone number",
    step2Title: "List or browse",
    step2Desc: "Easily post items for sale or browse for what you need",
    step3Title: "Chat & meet",
    step3Desc: "Direct chat with buyers/sellers and arrange meetings",
    
    // CTA section
    ctaTitle: "Want to be among the first to try Selloo?",
    ctaSubtitle: "Leave your email for early access.",
    formName: "Full Name",
    formEmail: "Email",
    formCity: "City",
    formSubmit: "Sign up now",
    
    // Footer
    legalNotice: "Legal Notice",
    privacyPolicy: "Privacy Policy", 
    contact: "Contact",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};