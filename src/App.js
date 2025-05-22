import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouter yerine HashRouter kullanıldı
import HomePage from "./HomePage";
import ProductPage from "./ProductPage"; // ProductDetail yerine ProductPage import edildi
import { CurrencyProvider } from "./context/CurrencyContext"; // CurrencyProvider'ı import edin

function App() {
  return (
    <CurrencyProvider> {/* Uygulamayı CurrencyProvider ile sarmalayın */}
      <Router> {/* BrowserRouter yerine HashRouter kullanıldı */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* ProductDetail yerine ProductPage kullanıldı */}
          {/* Diğer rotalarınız */}
        </Routes>
      </Router> {/* BrowserRouter yerine HashRouter kullanıldı */}
    </CurrencyProvider>
  );
}

export default App;
