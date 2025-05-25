import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

function LanguageSwitcher() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const { isDarkMode } = useTheme();

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '80px', // Tema değiştirme butonunun yanına yerleştir
      zIndex: 1000,
    }}>
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        style={{
          padding: '8px',
          borderRadius: '4px',
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#ffdb08' : '#333',
          border: `1px solid ${isDarkMode ? '#555' : '#ccc'}`,
          fontSize: 16,
          cursor: 'pointer'
        }}
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        {/* Daha fazla dil seçeneği eklenebilir */}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
