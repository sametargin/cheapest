fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // önceki içerikleri sil

    // sırala
    data.sort((a, b) => {
      const minA = Math.min(...a.prices.map(p => p.price_usd));
      const minB = Math.min(...b.prices.map(p => p.price_usd));
      return minA - minB;
    });

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

    data.forEach(product => {
      const cheapest = product.prices.reduce((min, p) =>
        p.price_usd < min.price_usd ? p : min, product.prices[0]);

      const card = document.createElement('div');
      card.className = 'product bg-white p-4 rounded-lg shadow';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover rounded">
        <h2 class="text-xl font-bold mt-2">${product.name}</h2>
        <p class="text-sm text-gray-500">Ülke: ${cheapest.country}</p>
        <p class="text-green-600 font-semibold">Fiyat: ${cheapest.price} ${cheapest.currency}</p>
        <p class="text-gray-400 text-sm">USD karşılığı: ${cheapest.price_usd} USD</p>
      `;

      grid.appendChild(card);
    });

    container.appendChild(grid);
  })
  .catch(err => {
    console.error("JSON okunamadı:", err);
  });
