import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./pages/ProductPage";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";
import { CurrencyProvider } from "./context/CurrencyContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitch from "./components/ThemeSwitch";
import CurrencySwitcher from "./components/CurrencySwitcher";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <CurrencyProvider>
            <div style={{ position: 'fixed', top: 20, right: 20, display: 'flex', flexDirection: 'row', gap: 5, zIndex: 1000, alignItems: 'center' }}>
              <CurrencySwitcher />
              <LanguageSwitcher />
              <ThemeSwitch />
            </div>
            <div className="App" style={{ minHeight: "100vh" }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
          </CurrencyProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
