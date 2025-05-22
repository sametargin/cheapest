import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouter yerine HashRouter kullanıldı
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail"; // Ürün detay sayfanızın bileşeni
import { CurrencyProvider } from "./context/CurrencyContext"; // CurrencyProvider'ı import edin

function App() {
  return (
    <CurrencyProvider> {/* Uygulamayı CurrencyProvider ile sarmalayın */}
      <Router> {/* BrowserRouter yerine HashRouter kullanıldı */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Ürün detay sayfası rotası */}
          {/* Diğer rotalarınız */}
        </Routes>
      </Router> {/* BrowserRouter yerine HashRouter kullanıldı */}
    </CurrencyProvider>
  );
}

export default App;
