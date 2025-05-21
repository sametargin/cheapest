import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
