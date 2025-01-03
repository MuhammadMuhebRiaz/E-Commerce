import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      sale_offer: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      shop_now: "Shop Now",
      home: "Home",
      contact: "Contact",
      about: "About",
      signup: "Sign Up",
      search_placeholder: "What are you looking for?",
      brand_name: "Exclusive",
    },
  },
  ar: {
    translation: {
      sale_offer: "تخفيضات الصيف على جميع ملابس السباحة وتوصيل مجاني - خصم 50٪!",
      shop_now: "تسوق الآن",
      home: "الرئيسية",
      contact: "اتصل",
      about: "حول",
      signup: "سجل",
      search_placeholder: "عن ماذا تبحث؟",
      brand_name: "حصري",
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
