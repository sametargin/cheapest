import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";
import { useCurrency } from './context/CurrencyContext'; // useCurrency hook'unu import edin

function ProductPage() {
  const { id } = useParams(); // URL'den ürün ID'sini alın

  // Ürünü bulurken ID'leri string olarak karşılaştıralım
  // parseInt kullanmak string ID'ler için yanlıştı
  const product = products.find((p) => p.id === id); // Karşılaştırma düzeltildi

  const { selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice } = useCurrency(); // Context'ten state ve fonksiyonları alın

  if (!product) {
    return (
      <div style={{ color: "white", padding: 30 }}>
        <h2>Product not found</h2>
        <Link to="/" style={{ color: "#ffdb08" }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 30, color: "white" }}>
      {/* Başlık ve Para Birimi Seçici */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 10,
            margin: 0 // Margin sıfırlandı
          }}
        >
          <img src={logo} alt="Cheapest Logo" style={{ height: 40 }} />
          <span style={{ fontWeight: 700 }}>Cheapest</span>
          <span
            style={{
              fontWeight: 400,
              fontSize: 20,
              opacity: 0.7,
              marginLeft: 4,
              letterSpacing: 1,
            }}
          >
            Global
          </span>
        </h1>
        {/* Para Birimi Seçici */}
        <div style={{ textAlign: 'right' }}>
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
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", marginTop: 24 }}>
        <img
          src={product.image ? product.image : logo}
          alt={product.name}
          style={{ height: 220, objectFit: "contain", background: "#222", borderRadius: 12, padding: 12 }}
        />
        <div>
          <h1 style={{ marginBottom: 12 }}>{product.name}</h1>
          <h3>Prices by Country</h3>
          <table style={{ color: "white", background: "#222", borderRadius: 8, padding: 8 }}>
            <thead>
              <tr>
                <th style={{ padding: 8 }}>Country</th>
                <th style={{ padding: 8 }}>Price ({selectedCurrency})</th> {/* Başlık güncellendi */}
                <th style={{ padding: 8 }}>Original Currency</th> {/* Yeni sütun başlığı */}
                <th style={{ padding: 8 }}>Website</th>
              </tr>
            </thead>
            <tbody>
              {product.prices.map((price, idx) => (
                <tr key={idx}>
                  <td style={{ padding: 8 }}>{price.country}</td>
                  <td style={{ padding: 8 }}>{convertPrice(price.price_usd)} {selectedCurrency}</td> {/* Dönüştürülmüş fiyat ve para birimi */}
                  <td style={{ padding: 8 }}>{price.price} {price.currency}</td> {/* Orijinal fiyat ve para birimi */}
                  <td style={{ padding: 8, display: "flex", alignItems: "center", gap: 6 }}>
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
  );
}

export default ProductPage;
