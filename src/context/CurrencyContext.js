import React, { createContext, useState, useEffect, useContext } from 'react';

// Örnek döviz kurları (API çağrısı başarısız olursa kullanılır)
const mockExchangeRates = {
  USD: 1,
  EUR: 0.92, // 1 USD = 0.92 EUR (Örnek değer)
  TRY: 32.5, // 1 USD = 32.5 TRY (Örnek değer)
  GBP: 0.79, // 1 USD = 0.79 GBP (Örnek değer)
  // Daha fazla para birimi eklenebilir
};

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState(mockExchangeRates);
  const [loadingRates, setLoadingRates] = useState(false);

  useEffect(() => {
    setLoadingRates(true);
    const apiKey = "fca_live_Tz93khH0tYhIwEUFbSwx05EXMErvOwTs1hbk1VeK"; // API Anahtarınız
    const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.data) {
           const ratesWithUSD = { ...data.data, USD: 1 };
           setExchangeRates(ratesWithUSD);
        } else {
           console.error("API response data is not in expected format:", data);
           setExchangeRates(mockExchangeRates); // Hata durumunda mock data kullan
        }
        setLoadingRates(false);
      })
      .catch(error => {
        console.error("Error fetching exchange rates:", error);
        setLoadingRates(false);
        setExchangeRates(mockExchangeRates); // Hata durumunda mock data kullan
      });
  }, []); // Component ilk yüklendiğinde kurları çek

  // Fiyatı seçilen para birimine dönüştüren fonksiyon
  const convertPrice = (priceUsd) => {
    if (!exchangeRates || !exchangeRates[selectedCurrency]) {
      return loadingRates ? "Loading..." : "N/A";
    }
    return (priceUsd * exchangeRates[selectedCurrency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);