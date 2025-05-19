fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    // Örnek bir kart ekle
    data.push({
      name: "Örnek Ürün",
      image: "https://via.placeholder.com/150",
      prices: [
        { country: "TR", price: 100, currency: "TRY", price_usd: 3.1 },
        { country: "US", price: 5, currency: "USD", price_usd: 5 }
      ]
    });

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
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6';

    // Her ürünü 3 kez göstermek için dış döngü ekleyelim
    for (let repeat = 0; repeat < 3; repeat++) {
      data.forEach(product => {
        // Geçerli fiyat verisi varsa işleme al
        if (!product.prices || product.prices.length === 0) return;

        const cheapest = product.prices.reduce(
          (min, p) => (p.price_usd < min.price_usd ? p : min),
          product.prices[0]
        );

        // Kartı oluştur
        const card = document.createElement('div');
        card.className = 'product bg-white rounded-lg shadow p-2 flex flex-col gap-1 w-full max-w-xs mx-auto dark:bg-gray-800'; // küçültüldü
        card.style.cursor = "pointer";

        card.innerHTML = `
          <img src="${product.image}" class="w-full rounded-md aspect-square object-cover" alt="${product.name}" style="max-height:120px;">
          <h2 class="text-base font-semibold text-gray-800 dark:text-white">${product.name}</h2>
          <p class="text-xs text-gray-600 dark:text-gray-300">Ülke: ${cheapest.country}</p>
          <p class="text-green-600 font-semibold text-sm">Fiyat: ${cheapest.price} ${cheapest.currency}</p>
          <p class="text-gray-500 dark:text-gray-400 text-xs">USD karşılığı: ${cheapest.price_usd} USD</p>
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
    }

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
