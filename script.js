fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // önceki içerikleri sil

    // Fiyatlara göre sırala (en ucuz USD bazlı)
    data.sort((a, b) => {
      const minA = Math.min(...a.prices.map(p => p.price_usd));
      const minB = Math.min(...b.prices.map(p => p.price_usd));
      return minA - minB;
    });

    // Grid container oluştur
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

    data.forEach(product => {
      // Geçerli fiyat verisi varsa işleme al
      if (!product.prices || product.prices.length === 0) return;

      const cheapest = product.prices.reduce(
        (min, p) => (p.price_usd < min.price_usd ? p : min),
        product.prices[0]
      );

      // Kartı oluştur
      const card = document.createElement('div');
      card.className = 'product bg-white rounded-xl shadow p-4 flex flex-col gap-2 w-full dark:bg-gray-800';
      card.style.cursor = "pointer";

      card.innerHTML = `
        <img src="${product.image}" class="w-full rounded-md aspect-square object-cover" alt="${product.name}">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">${product.name}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300">Ülke: ${cheapest.country}</p>
        <p class="text-green-600 font-semibold text-lg">Fiyat: ${cheapest.price} ${cheapest.currency}</p>
        <p class="text-gray-500 dark:text-gray-400 text-sm">USD karşılığı: ${cheapest.price_usd} USD</p>
      `;

      // ✅ Tıklanınca detaylı fiyatları alert ile göster
      card.addEventListener('click', () => {
        const fiyatlar = product.prices.map(p =>
          `• ${p.country}: ${p.price} ${p.currency} (${p.price_usd} USD)`
        ).join('\n');

        alert(`📦 ${product.name}\n\n🌍 Fiyatlar:\n${fiyatlar}`);
      });

      grid.appendChild(card);
    });

    container.appendChild(grid);
  })
  .catch(err => {
    console.error("❌ JSON verisi okunamadı:", err);
    alert("Veri yüklenirken bir hata oluştu.");
  });

// 🌙 Gece modu toggle
document.getElementById('dark-toggle')?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
