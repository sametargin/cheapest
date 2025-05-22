import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";
import { useCurrency } from './context/CurrencyContext';
import { useMediaQuery } from "react-responsive";
import Footer from './components/Footer'; // Footer bileşeni import edildi

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice } = useCurrency();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Ana kapsayıcı div'in stilini kontrol edin ve gerekirse ekleyin
    <div style={{ padding: isMobile ? 16 : 30, color: "white", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Başlık ve Para Birimi Seçici */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        marginBottom: isMobile ? 16 : 24,
        gap: isMobile ? 16 : 0
      }}>
        {/* Logo ve Başlık Link ile Sarmalandı */}
        <Link to="/"
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 8 : 10,
            margin: 0,
            textDecoration: 'none'
          }}
        >
          <img src={logo} alt="Cheapest Logo" style={{ height: isMobile ? 32 : 40 }} />
          <span style={{ fontWeight: 700, fontSize: isMobile ? 24 : 28 }}>Cheapest</span>
          <span
            style={{
              fontWeight: 400,
              fontSize: isMobile ? 16 : 20,
              opacity: 0.7,
              marginLeft: isMobile ? 0 : 4,
              letterSpacing: 1,
            }}
          >
            Global
          </span>
        </Link>
        {/* Para Birimi Seçici */}
        <div style={{ textAlign: isMobile ? 'left' : 'right', width: isMobile ? '100%' : 'auto' }}>
          <label htmlFor="currency-select" style={{ color: '#fff', marginRight: 8 }}>Para Birimi:</label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              backgroundColor: '#333',
              color: '#ffdb08',
              border: '1px solid #555',
              fontSize: 16,
              width: isMobile ? 'auto' : 'auto'
            }}
            disabled={loadingRates}
          >
            {loadingRates ? (
              <option>Loading...</option>
            ) : (
              Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Arama Çubuğu */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #555",
          backgroundColor: "#333",
          color: "white",
          fontSize: 16,
        }}
      />

      {/* Ürün Listesi */}
      {/* Bu div'e flexGrow: 1 ekleyerek içeriğin footer'ı aşağı itmesini sağlayın */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(250px, 1fr))",
        gap: isMobile ? 16 : 24,
        flexGrow: 1 // İçeriğin footer'ı aşağı itmesini sağlar
      }}>
        {filteredProducts.map((product) => {
          // En ucuz fiyatı bul
          const cheapestPrice = product.prices.reduce((minPrice, currentPrice) => {
            return currentPrice.price_usd < minPrice.price_usd ? currentPrice : minPrice;
          }, product.prices[0]); // İlk fiyatı başlangıç değeri olarak al

          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{
                background: "#222",
                borderRadius: 12,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ height: 120, objectFit: "contain", marginBottom: 12 }}
              />
              <h2 style={{ fontSize: 18, marginBottom: 8, textAlign: "center" }}>
                {product.name}
              </h2>
              {/* En ucuz fiyatı ve para birimini göster */}
              <p style={{ fontSize: 16, fontWeight: 'bold', color: '#ffdb08' }}>
                {convertPrice(cheapestPrice.price_usd)} {selectedCurrency}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Footer bileşeni kullanıldı */}
      <Footer />
    </div>
  );
}

export default HomePage;
