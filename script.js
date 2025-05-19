fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

  

    // En ucuz USD fiyatına göre sırala
    data.sort((a, b) => {
      const minA = Math.min(...a.prices.map(p => p.price_usd));
      const minB = Math.min(...b.prices.map(p => p.price_usd));
      return minA - minB;
    });

    // Grid yapısı (her satırda 2 kart)
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-6 mt-6 px-4';

  
    data.forEach(product => {
      if (!product.prices || product.prices.length === 0) return;

      const cheapest = product.prices.reduce((min, p) =>
        p.price_usd < min.price_usd ? p : min
      );

      const card = document.createElement('div');
      card.className = 'product bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col gap-2 w-full transition-transform hover:scale-105';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full max-h-40 object-contain rounded">
        <h2 class="text-base font-bold mt-1">${product.name}</h2>
        <p class="text-xs text-gray-500 dark:text-gray-300">Ülke: ${cheapest.country}</p>
        <p class="text-green-600 font-semibold text-sm">Fiyat: ${cheapest.price} ${cheapest.currency}</p>
        <p class="text-gray-400 text-xs">USD karşılığı: ${cheapest.price_usd} USD</p>
      `;

      card.addEventListener('click', () => {
        const fiyatlar = product.prices
          .map(p => `• ${p.country}: ${p.price} ${p.currency} (${p.price_usd} USD)`)
          .join('\n');
        alert(`💡 ${product.name}\n\n🌍 Fiyatlar:\n${fiyatlar}`);
      });

      grid.appendChild(card);
    });

    container.appendChild(grid);
  })
  .catch(err => {
    console.error("❌ JSON verisi okunamadı:", err);
  });

// Her zaman gece modu aktif
document.documentElement.setAttribute('data-theme', 'dark');

// Sadece gece modu için gerekli stiller
const style = document.createElement('style');
style.innerHTML = `
  [data-theme='dark'] {
    background-color: #1a202c;
    color: #f7fafc;
  }
  [data-theme='dark'] .bg-white {
    background-color: #2d3748;
  }
  [data-theme='dark'] .bg-gray-800 {
    background-color: #2d3748;
  }
  [data-theme='dark'] .bg-gray-900 {
    background-color: #1a202c;
  }
  [data-theme='dark'] .text-gray-500,
  [data-theme='dark'] .text-gray-300 {
    color: #a0aec0;
  }
  [data-theme='dark'] .text-green-600 {
    color: #68d391;
  }
  [data-theme='dark'] .text-gray-400 {
    color: #cbd5e0;
  }
  [data-theme='dark'] .text-gray-200 {
    color: #edf2f7;
  }
`;
document.head.appendChild(style);