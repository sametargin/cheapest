fetch('controller_prices_usd.json')
  .then(res => res.json())
  .then(data => {
    const container = document.createElement('div');
    container.style.padding = "40px";
    data.forEach(item => {
      const card = document.createElement('div');
      card.style.background = "#fff";
      card.style.padding = "20px";
      card.style.marginBottom = "20px";
      card.style.borderRadius = "8px";
      card.style.boxShadow = "0 0 10px #ccc";
      card.innerHTML = `
        <h2>${item.name}</h2>
        <p><strong>${item.country}</strong>: ${item.price} ${item.currency} ${
        item.price_usd ? `→ ${item.price_usd} USD` : ''
      }</p>
      `;
      container.appendChild(card);
    });
    document.body.appendChild(container);
  });
