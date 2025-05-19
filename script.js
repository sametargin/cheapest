fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // önceki içerikleri sil

    // En ucuz USD fiyatına göre sırala
    data.sort((a, b) => {
      const minA = Math.min(...a.prices.map(p => p.price_usd));
      const minB = Math.min(...b.prices.map(p => p.price_usd));
      return minA - minB;
    });

    // Grid yapısı
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4';

    data.forEach(product => {
      if (!product.prices || product.prices.length === 0) return;

      const cheapest = product.prices.reduce((min, p) =>
        p.price_usd < min.price_usd ? p : min
      );

      const card = document.createElement('div');
      card.className = 'product bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col gap-2 w-full transition-transform hover:scale-105';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full max-h-64 object-contain rounded">
        <h2 class="text-xl font-bold mt-2">${product.name}</h2>
        <p class="text-sm text-gray-500 dark:text-gray-300">Ülke: ${cheapest.country}</p>
        <p class="text-green-600 font-semibold text-lg">Fiyat: ${cheapest.price} ${cheapest.currency}</p>
        <p class="text-gray-400 text-sm">USD karşılığı: ${cheapest.price_usd} USD</p>
      `;

      // Kart tıklanınca detayları göster
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
// Tema değişimi
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.addEventListener('click', () => {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
// Tema değişimi için CSS sınıflarını ekleyin
const style = document.createElement('style');
style.innerHTML = `
  [data-theme='dark'] {
    background-color: #1a202c;
    color: #f7fafc;
  }
  [data-theme='light'] {
    background-color: #f7fafc;
    color: #1a202c;
  }
`;
document.head.appendChild(style);
// Tema değişimi için Tailwind CSS sınıflarını ekleyin
const tailwindStyle = document.createElement('style');
tailwindStyle.innerHTML = `
  [data-theme='dark'] .bg-white {
    background-color: #2d3748;
  }
  [data-theme='dark'] .text-gray-500 {
    color: #a0aec0;
  }
  [data-theme='dark'] .text-green-600 {
    color: #68d391;
  }
  [data-theme='dark'] .text-gray-400 {
    color: #cbd5e0;
  }
`;
document.head.appendChild(tailwindStyle);
// Tema değişimi için Tailwind CSS sınıflarını ekleyin
const tailwindStyle2 = document.createElement('style');
tailwindStyle2.innerHTML = `
  [data-theme='dark'] .bg-gray-800 {
    background-color: #2d3748;
  }
  [data-theme='dark'] .text-gray-300 {
    color: #a0aec0;
  }
  [data-theme='dark'] .text-gray-500 {
    color: #a0aec0;
  }
`;
document.head.appendChild(tailwindStyle2);
// Tema değişimi için Tailwind CSS sınıflarını ekleyin
const tailwindStyle3 = document.createElement('style');
tailwindStyle3.innerHTML = `
  [data-theme='dark'] .bg-gray-900 {
    background-color: #1a202c;
  }
  [data-theme='dark'] .text-gray-200 {
    color: #edf2f7;
  }
  [data-theme='dark'] .text-gray-400 {
    color: #cbd5e0;
  }
`;
document.head.appendChild(tailwindStyle3);