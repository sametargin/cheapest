fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');

    // Eski kartları sil
    document.querySelectorAll('.product').forEach(el => el.remove());

    // En ucuz fiyata göre sırala
    data.sort((a, b) => {
      const minA = Math.min(...a.prices.map(p => p.price_usd));
      const minB = Math.min(...b.prices.map(p => p.price_usd));
      return minA - minB;
    });

    // Grid oluştur
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6';

    data.forEach(item => {
      if (!item.prices || item.prices.length === 0) return;

      const cheapest = item.prices.reduce((min, p) =>
        (p.price_usd !== undefined && p.price_usd < min.price_usd) ? p : min,
        item.prices[0]
      );

      const card = document.createElement('div');
      card.className = 'product bg-white rounded-xl shadow p-4 flex flex-col gap-2 w-full';

      card.innerHTML = `
        <img src="${item.image || ''}" class="w-full rounded-md aspect-square object-cover" alt="${item.name}">
        <h2 class="text-xl font-bold text-gray-800">${item.name}</h2>
        <p class="text-sm text-gray-600">Ülke: ${cheapest.country || '—'}</p>
        <p class="text-green-600 font-semibold text-lg">Fiyat: ${cheapest.price ?? '—'} ${cheapest.currency ?? ''}</p>
        <p class="text-gray-500 text-sm">USD karşılığı: ${cheapest.price_usd ?? '—'} USD</p>
      `;

      grid.appendChild(card);
    });

    container.appendChild(grid);
  })
  .catch(err => {
    console.error("❌ JSON verisi okunamadı:", err);
  });
