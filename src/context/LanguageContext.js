import React, { createContext, useContext, useState } from 'react';

// Örnek çeviriler
const translations = {
  en: {
    // Common texts
    "Back to Home": "← Back to Home",
    "Back": "← Back",
    "Help": "Help",
    "About Us": "About Us",
    "Cheapest Global": "Cheapest Global",
    "Loading products...": "Loading products...",
    "Failed to fetch products.": "Failed to fetch products.",
    "Product not found": "Product not found",
    "Prices by Country": "Prices by Country",
    "Country": "Country",
    "Price": "Price",
    "Original Price": "Original Price",
    "Website": "Website",
    "Find Prices by City": "Find Prices by City",
    "Enter your city (e.g., Istanbul)": "Enter your city (e.g., Istanbul)",
    "Search": "Search",
    "Searching...": "Searching...",
    "No prices found for": "No prices found for",
    "Failed to fetch prices for the entered city.": "Failed to fetch prices for the entered city.",
    "Prices in": "Prices in",
    "Comments": "Comments",
    "Your Nickname": "Your Nickname",
    "Your Comment": "Your Comment",
    "Add Comment": "Add Comment",
    "No comments yet. Be the first to comment!": "No comments yet. Be the first to comment!",
    "Loading product...": "Loading product...",
    "Failed to fetch product data.": "Failed to fetch product data.",
    "Para Birimi:": "Currency:",
    "Loading...": "Loading...",

    // Product names (optional, can be fetched from backend)
    "PlayStation 5 Console": "PlayStation 5 Console",
    "MacBook Air M2": "MacBook Air M2",
    "Amazon Echo Dot (5th Gen)": "Amazon Echo Dot (5th Gen)",
    "Dyson V15 Detect Vacuum": "Dyson V15 Detect Vacuum",
    "Instant Pot Duo 7-in-1": "Instant Pot Duo 7-in-1",

    // Countries (optional, can be handled by country flags/codes)
    "USA": "USA",
    "Germany": "Germany",
    "Turkey": "Turkey",
    "UK": "UK",
    "Canada": "Canada",
    "Australia": "Australia",
    "France": "France",
    "Spain": "Spain",
    "Italy": "Italy",
    "Japan": "Japan",
    "South Korea": "South Korea",
    "Mexico": "Mexico",
    "Netherlands": "Netherlands",
    "Sweden": "Sweden",
    "Norway": "Norway",
    "Brazil": "Brazil",
    "India": "India",
    "China": "China",
  },
  tr: {
    // Common texts
    "Back to Home": "← Ana Sayfaya Dön",
    "Back": "← Geri",
    "Help": "Yardım",
    "About Us": "Hakkımızda",
    "Cheapest Global": "En Ucuz Global",
    "Loading products...": "Ürünler yükleniyor...",
    "Failed to fetch products.": "Ürünler alınamadı.",
    "Product not found": "Ürün bulunamadı",
    "Prices by Country": "Ülkelere Göre Fiyatlar",
    "Country": "Ülke",
    "Price": "Fiyat",
    "Original Price": "Orijinal Fiyat",
    "Website": "Web Sitesi",
    "Find Prices by City": "Şehre Göre Fiyatları Bul",
    "Enter your city (e.g., Istanbul)": "Şehrinizi girin (örn: İstanbul)",
    "Search": "Ara",
    "Searching...": "Aranıyor...",
    "No prices found for": "için fiyat bulunamadı:",
    "Failed to fetch prices for the entered city.": "Girilen şehir için fiyatlar alınamadı.",
    "Prices in": "Fiyatlar:",
    "Comments": "Yorumlar",
    "Your Nickname": "Takma Adınız",
    "Your Comment": "Yorumunuz",
    "Add Comment": "Yorum Ekle",
    "No comments yet. Be the first to comment!": "Henüz yorum yok. İlk yorum yapan siz olun!",
    "Loading product...": "Ürün yükleniyor...",
    "Failed to fetch product data.": "Ürün bilgileri alınamadı.",
    "Para Birimi:": "Para Birimi:",
    "Loading...": "Yükleniyor...",

    // Product names (optional, can be fetched from backend)
    "PlayStation 5 Console": "PlayStation 5 Konsol",
    "MacBook Air M2": "MacBook Air M2",
    "Amazon Echo Dot (5th Gen)": "Amazon Echo Dot (5. Nesil)",
    "Dyson V15 Detect Vacuum": "Dyson V15 Detect Süpürge",
    "Instant Pot Duo 7-in-1": "Instant Pot Duo 7'si 1 Arada",

     // Countries (optional, can be handled by country flags/codes)
     "USA": "ABD",
     "Germany": "Almanya",
     "Turkey": "Türkiye",
     "UK": "İngiltere",
     "Canada": "Kanada",
     "Australia": "Avustralya",
     "France": "Fransa",
     "Spain": "İspanya",
     "Italy": "İtalya",
     "Japan": "Japonya",
     "South Korea": "Güney Kore",
     "Mexico": "Meksika",
     "Netherlands": "Hollanda",
     "Sweden": "İsveç",
     "Norway": "Norveç",
     "Brazil": "Brezilya",
     "India": "Hindistan",
     "China": "Çin",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Varsayılan dil İngilizce

  const translate = (key) => {
    return translations[selectedLanguage][key] || key; // Çeviri yoksa orijinal metni döndür
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
