import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // HashRouter kullanılıyor
import HomePage from "./HomePage";
import ProductPage from "./pages/ProductPage";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    // Burada basename prop'u yok
    <Router>
      <CurrencyProvider>
        <div className="App" style={{ background: "#1a1a1a", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </CurrencyProvider>
    </Router>
  );
}

export default App;
