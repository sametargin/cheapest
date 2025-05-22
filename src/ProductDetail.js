import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products'; // Ürün verileriniz
import { useCurrency } from './context/CurrencyContext'; // useCurrency hook'unu import edin

function ProductDetail() {
  const { id } = useParams(); // URL'den ürün ID'sini alın
  const product = products.find(p => p.id === parseInt(id)); // Ürünü bulun

  const { selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice } = useCurrency(); // Context'ten state ve fonksiyonları alın

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div style={{ padding: 30, color: 'white' }}>
      {/* Para Birimi Seçici */}
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

      <h2>{product.name}</h2>
      <img
        src={product.image ? product.image : "logoCHPST.png"}
        alt={product.name}
        style={{ height: 200, objectFit: 'contain', marginBottom: 20 }}
      />
      <p>{product.description}</p>

      <h3>Fiyatlar:</h3>
      <ul>
        {product.prices.map((priceInfo, index) => (
          <li key={index}>
            {priceInfo.country}: {convertPrice(priceInfo.price_usd)}{" "} {/* Dönüştürülmüş fiyat */}
            {selectedCurrency} ({priceInfo.price} {priceInfo.currency})
          </li>
        ))}
      </ul>

      {/* Diğer ürün detayları */}
    </div>
  );
}

export default ProductDetail;