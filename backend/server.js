const express = require('express');
const cors = require('cors'); // CORS middleware'ini import et
const products = require('./products'); // products.js dosyasını import et (server.js ile aynı dizinde olduğunu varsayarak)

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


// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
