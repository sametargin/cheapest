fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const title = document.querySelector('h1');

    // Önceki ürün kartlarını sil
    const oldCards = document.querySelectorAll('.product');
    oldCards.forEach(el => el.remove());

    // USD fiyatına göre sırala
    data.sort((a, b) => a.price_usd - b.price_usd);

    // Grid container
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6';

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product bg-white rounded-xl shadow p-4 flex flex-col gap-2 w-full';

      const imageURL = item.image || `https://via.placeholder.com/300x300?text=${encodeURIComponent(item.name)}`;
      const shopURL = item.url || '#';

      card.innerHTML = `
        <img src="${imageURL}" class="w-full rounded-md aspect-square object-cover" alt="Ürün görseli">
        <h2 class="text-xl font-bold text-gray-800">${item.name}</h2>
        <p class="text-sm text-gray-600">Ülke: ${item.country}</p>
        <p class="text-green-600 font-semibold text-lg">Fiyat: ${item.price} ${item.currency}</p>
        <p class="text-gray-500 text-sm">USD karşılığı: ${item.price_usd ? item.price_usd + ' USD' : '—'}</p>
        <a href="${shopURL}" target="_blank" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">
          Mağazaya Git
        </a>
      `;

      grid.appendChild(card);
    });

    title.after(grid);
  })
  .catch(err => {
    console.error("❌ JSON verisi okunamadı:", err);
  });
