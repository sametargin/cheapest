const products = require('./products'); // Yol güncellendi

app.get('/api/products', (req, res) => {
  res.json(products);
});

// ... geri kalan kod
