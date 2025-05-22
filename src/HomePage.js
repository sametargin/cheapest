import React from "react";
import { Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";
import { FiSettings, FiUser, FiHelpCircle } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { useCurrency } from './context/CurrencyContext'; // useCurrency hook'unu import edin

const infoText = `
  This site helps you shop globally and find products that may be cheaper in other countries you visit.
  Prices are updated daily but may contain errors or delays. Always check the official website before purchasing.
`;

function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice } = useCurrency(); // Context'ten state ve fonksiyonları alın

  return (
    <div>
      {isMobile ? (
        // Mobil görünüm
        <div style={{ paddingBottom: 60, position: 'relative', minHeight: '100vh' }}> {/* Alt çubuk için padding ve pozisyon */}
          <div style={{ padding: 16 }}>
            {/* Logo, Başlık ve Para Birimi Seçici */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <img
                  src={logo}
                  alt="Cheapest Logo"
                  style={{ height: 40, display: "block" }} // Mobil için biraz küçültülmüş logo
                />
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: 28, // Mobil için küçültülmüş boyut
                    lineHeight: 1,
                    letterSpacing: 1,
                  }}
                >
                  Cheapest
                </span>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 20, // Mobil için küçültülmüş boyut
                    opacity: 0.6,
                    marginLeft: 1,
                    lineHeight: 1,
                  }}
                >
                  Global
                </span>
              </div>
              {/* Para Birimi Seçici */}
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                style={{
                  padding: '8px',
                  borderRadius: '4px',
                  backgroundColor: '#333',
                  color: '#ffdb08',
                  border: '1px solid #555',
                  fontSize: 14,
                }}
                disabled={loadingRates} // Kurlar yüklenirken seçiciyi devre dışı bırak
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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Daha küçük kartlar
                gap: 16,
              }}
            >
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    className="card"
                    style={{
                      height: 300, // Daha kısa kartlar
                      backgroundColor: "#1e1e1e",
                      borderRadius: 12,
                      padding: 12,
                      display: "grid",
                      justifyContent: "space-between",
                      boxShadow: "0 0 8px rgba(29, 57, 109, 0.05)",
                    }}
                  >
                    <img
                      src={product.image ? product.image : "logoCHPST.png"}
                      alt={product.name}
                      style={{ height: 120, objectFit: "contain", marginBottom: 8 }} // Daha küçük resim
                    />
                    <h3 style={{ fontSize: 14 }}>{product.name}</h3> {/* Daha küçük başlık */}
                    <p style={{ fontSize: 12 }}>
                      Cheapest: {product.prices[0].country} - {convertPrice(product.prices[0].price_usd)}{" "} {/* Dönüştürülmüş fiyat */}
                      {selectedCurrency} {/* Seçilen para birimi */}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Sabit araç çubuğu */}
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "#181818",
              display: "flex",
              justifyContent: "space-around",
              padding: "8px 0",
              borderTop: "1px solid #333",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ffdb08",
                fontSize: 24,
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
              title="Account"
            >
              <FiUser />
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ffdb08",
                fontSize: 24,
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
              title="Settings"
            >
              <FiSettings />
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ffdb08",
                fontSize: 24,
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
              title="Help"
            >
              <FiHelpCircle />
            </button>
          </div>
        </div>
      ) : (
        // Masaüstü görünüm
        <div style={{ padding: 30 }}>
          {/* Kayan bilgi çubuğu */}
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              background: "#222",
              color: "#ffdb08",
              fontWeight: 500,
              fontSize: 12,
              padding: "8px 0",
              marginBottom: 18,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                animation: "scroll-left 30s linear infinite",
                minWidth: "100%",
              }}
            >
              {infoText}
            </div>
            {/* Animasyon tanımı */}
            <style>
              {`
                @keyframes scroll-left {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-100%); }
                }
              `}
            </style>
          </div>
          {/* Logo, Başlık ve İkon Butonlar */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              background: "#181818",
              padding: "16px 0",
              gap: 16,
            }}
          >
            {/* Sol: Logo ve Başlık */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
              <img
                src={logo}
                alt="Cheapest Logo"
                style={{ height: 48, display: "block" }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 40,
                  lineHeight: 1,
                  letterSpacing: 1,
                }}
              >
                Cheapest
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 32,
                  opacity: 0.6,
                  marginLeft: 1,
                  lineHeight: 1,
                }}
              >
                Global
              </span>
            </div>
            {/* Sağ: İkon Butonlar */}
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffdb08",
                  fontSize: 32,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                title="Account"
              >
                <FiUser />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffdb08",
                  fontSize: 32,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                title="Settings"
              >
                <FiSettings />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffdb08",
                  fontSize: 32,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                title="Help"
              >
                <FiHelpCircle />
              </button>
            </div>
          </div>
           {/* Para Birimi Seçici - Masaüstü */}
           <div style={{ marginBottom: 18, textAlign: 'right' }}>
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
               }}
               disabled={loadingRates} // Kurlar yüklenirken seçiciyi devre dışı bırak
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 25,
            }}
          >
            {products.map((product) => {
              // Cheapest fiyatı USD cinsinden alıp dönüştürüyoruz
              const cheapest = product.prices.reduce((min, curr) =>
                curr.price_usd < min.price_usd ? curr : min
              );
              return (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div
                    className="card"
                    style={{
                      height: 360,
                      backgroundColor: "#1e1e1e",
                      borderRadius: 12,
                      padding: 12,
                      display: "grid",
                      justifyContent: "space-between",
                      boxShadow: "0 0 8px rgba(29, 57, 109, 0.05)",
                    }}
                  >
                    <img
                      src={product.image ? product.image : "logoCHPST.png"}
                      alt={product.name}
                      style={{
                        height: 180,
                        objectFit: "contain",
                        marginBottom: 12,
                      }}
                    />
                    <h3 style={{ fontSize: 16 }}>{product.name}</h3>
                    <p style={{ fontSize: 14 }}>
                      Cheapest: {cheapest.country} – {convertPrice(cheapest.price_usd)}{" "} {/* Dönüştürülmüş fiyat */}
                      {selectedCurrency} {/* Seçilen para birimi */}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
