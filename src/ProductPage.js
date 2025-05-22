import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";
import { useCurrency } from './context/CurrencyContext';
import { useMediaQuery } from "react-responsive"; // useMediaQuery import edildi

function ProductPage() {
  const { id } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Mobil ekran kontrolü

  const product = products.find((p) => p.id === id);

  const { selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice } = useCurrency();

  if (!product) {
    return (
      <div style={{ color: "white", padding: 30 }}>
        <h2>Product not found</h2>
        <Link to="/" style={{ color: "#ffdb08" }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? 16 : 30, color: "white" }}> {/* Mobil için padding azaltıldı */}
      {/* Başlık ve Para Birimi Seçici */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Mobil için dikey hizalama
        alignItems: isMobile ? "flex-start" : "center", // Mobil için sola hizalama
        justifyContent: "space-between",
        marginBottom: isMobile ? 16 : 24, // Mobil için margin azaltıldı
        gap: isMobile ? 16 : 0 // Mobil için gap eklendi
      }}>
        {/* Logo ve Başlık Link ile Sarmalandı */}
        <Link to="/"
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 8 : 10, // Mobil için gap azaltıldı
            margin: 0,
            textDecoration: 'none'
          }}
        >
          <img src={logo} alt="Cheapest Logo" style={{ height: isMobile ? 32 : 40 }} /> {/* Mobil için logo boyutu */}
          <span style={{ fontWeight: 700, fontSize: isMobile ? 24 : 28 }}>Cheapest</span> {/* Mobil için font boyutu */}
          <span
            style={{
              fontWeight: 400,
              fontSize: isMobile ? 16 : 20, // Mobil için font boyutu
              opacity: 0.7,
              marginLeft: isMobile ? 0 : 4, // Mobil için margin kaldırıldı
              letterSpacing: 1,
            }}
          >
            Global
          </span>
        </Link>
        {/* Para Birimi Seçici */}
        <div style={{ textAlign: isMobile ? 'left' : 'right', width: isMobile ? '100%' : 'auto' }}> {/* Mobil için sola hizalama ve tam genişlik */}
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
              width: isMobile ? 'auto' : 'auto' // Mobil için genişlik ayarı
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


      <Link
        to="/"
        style={{
          background: "#ffdb08",
          color: "#222",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "8px 18px",
          borderRadius: 8,
          display: "inline-block",
          marginBottom: 18,
        }}
      >
        ← Back
      </Link>
      {/* Ürün Resmi ve Detayları */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Mobil için dikey hizalama
        gap: isMobile ? 24 : 32, // Mobil için gap ayarı
        alignItems: "flex-start",
        marginTop: 24
      }}>
        <img
          src={product.image ? product.image : logo}
          alt={product.name}
          style={{
            height: isMobile ? 180 : 220, // Mobil için resim boyutu
            objectFit: "contain",
            background: "#222",
            borderRadius: 12,
            padding: 12,
            maxWidth: isMobile ? '100%' : 'auto' // Mobil için max genişlik
          }}
        />
        <div style={{ width: isMobile ? '100%' : 'auto' }}> {/* Mobil için tam genişlik */}
          <h1 style={{ marginBottom: 12, fontSize: isMobile ? 20 : 24 }}>{product.name}</h1> {/* Mobil için başlık boyutu */}
          <h3 style={{ fontSize: isMobile ? 16 : 18 }}>Prices by Country</h3> {/* Mobil için başlık boyutu */}
          {/* Fiyat Tablosu */}
          <div style={{ overflowX: 'auto' }}> {/* Mobil için yatay kaydırma */}
            <table style={{
              color: "white",
              background: "#222",
              borderRadius: 8,
              padding: 8,
              width: isMobile ? 'max-content' : '100%',
              borderCollapse: 'collapse' // Çift kenarlıkları kaldırır
            }}>
              <thead>
                <tr>
                  {/* Başlık hücrelerine kenarlık eklendi */}
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Country</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Price ({selectedCurrency})</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Original Currency</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Website</th>
                </tr>
              </thead>
              <tbody>
                {product.prices.map((price, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#222' : '#2a2a2a' // Çift/tek satır renkleri
                    }}
                  >
                    {/* Veri hücrelerine kenarlık eklendi */}
                    <td style={{ padding: 8, border: '1px solid #444' }}>{price.country}</td>
                    <td style={{ padding: 8, border: '1px solid #444' }}>{convertPrice(price.price_usd)} {selectedCurrency}</td>
                    {/* Original Currency yazısı için stil eklendi */}
                    <td style={{ padding: 8, border: '1px solid #444', fontSize: 12, opacity: 0.8 }}>
                      {price.price} {price.currency}
                    </td>
                    <td style={{ padding: 8, border: '1px solid #444', display: "flex", alignItems: "center", gap: 6 }}>
                      {price.company_logo && (
                        <img
                          src={price.company_logo}
                          alt={price.company}
                          style={{ width: 20, height: 20, borderRadius: 4, marginRight: 4 }}
                        />
                      )}
                      <span>{price.company}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
