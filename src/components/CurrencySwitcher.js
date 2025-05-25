import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';
import ReactCountryFlag from 'react-country-flag';

const currencyFlagMap = {
  USD: 'US',
  EUR: 'EU',
  TRY: 'TR',
  GBP: 'GB',
  CAD: 'CA',
  AUD: 'AU',
  // Daha fazla para birimi ve bayrak kodu eklenebilir
};

function CurrencySwitcher() {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const { isDarkMode } = useTheme();

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',  // changed from row to column
      alignItems: 'center',     // center horizontally
      gap: 4,                   // smaller vertical gap
      padding: '8px 12px',
      borderRadius: 20,
      backgroundColor: isDarkMode ? '#333' : '#fff',
      border: `1px solid ${isDarkMode ? '#555' : '#ccc'}`,
      cursor: 'pointer',
      userSelect: 'none'
    }}>
      {selectedCurrency && currencyFlagMap[selectedCurrency] && (
        <ReactCountryFlag
          countryCode={currencyFlagMap[selectedCurrency]}
          svg
          style={{ width: '1.5em', height: '1.5em' }}
          title={selectedCurrency}
        />
      )}
      <select
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: isDarkMode ? '#ffdb08' : '#333',
          fontSize: 16,
          fontWeight: 'bold',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        {Object.keys(currencyFlagMap).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySwitcher;
