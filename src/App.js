import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./pages/ProductPage";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";
import { CurrencyProvider } from "./context/CurrencyContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CurrencyProvider>
          <ThemeSwitch />
          <div className="App" style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </CurrencyProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
