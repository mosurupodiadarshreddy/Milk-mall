import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation resource files for each language
import en from "./resources/english";
import te from "./resources/telugu";
import hi from "./resources/hindi";
import kn from "./resources/kannada";
import ta from "./resources/tamil";
import ml from "./resources/malayalam";


// Initialize i18next and connect it with React using initReactI18next
i18n.use(initReactI18next).init({

   // Translation resources for supported languages
  // Key -> language code
  // Value -> translation object
  resources: {
    en: { translation: en },
    te: { translation: te },
    hi: { translation: hi },
    kn: { translation: kn },
    ta: { translation: ta },
    ml: { translation: ml },
  },

    // Read saved language from localStorage
    // Default to English if no language is saved
  lng: localStorage.getItem("language") || "en",

    // Fallback language used when translation key is missing in selected language
  fallbackLng: "en",

  interpolation: {

    // React already protects from XSS by escaping values automatically
    // So additional escaping by i18next is not required
    escapeValue: false,
  },
});

export default i18n;