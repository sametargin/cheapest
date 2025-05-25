const express = require('express');
const cors = require('cors'); // CORS middleware'ini import et
const products = require('./products'); // products.js dosyasını import et (server.js ile aynı dizinde olduğunu varsayarak)
const stores = require('./stores'); // stores.js dosyasını import et

const app = express();
const port = 3001; // Backend'in çalışacağı port

// CORS middleware'ini kullan
// Bu, frontend'in (genellikle 3000 portunda çalışır) backend'e istek yapmasına izin verir
app.use(cors());

// JSON body'leri parse etmek için middleware (eğer POST istekleri olacaksa gerekli)
app.use(express.json());

// Tüm ürünleri döndüren endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Belirli bir ürünü ID'ye göre döndüren endpoint
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Kullanıcının konumuna göre en yakın mağazayı bulan endpoint
app.get('/api/stores/nearest', (req, res) => {
  const userLat = parseFloat(req.query.lat);
  const userLng = parseFloat(req.query.lng);
  const productId = req.query.productId;

  if (isNaN(userLat) || isNaN(userLng) || !productId) {
    return res.status(400).send('Missing location or product ID');
  }

  let nearestStore = null;
  let minDistance = Infinity;

  // Basit bir mesafe hesaplama fonksiyonu (Haversine formülü daha doğru olurdu)
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Dünya'nın yarıçapı (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  stores.forEach(store => {
    const productInStore = store.products.find(p => p.productId === productId);
    if (productInStore) {
      const distance = calculateDistance(userLat, userLng, store.location.lat, store.location.lng);
      if (distance < minDistance) {
        minDistance = distance;
        nearestStore = { ...store, productPrice: productInStore.price, productCurrency: productInStore.currency };
      }
    }
  });

  if (nearestStore) {
    res.json(nearestStore);
  } else {
    res.status(404).send('No nearby store found for this product');
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
