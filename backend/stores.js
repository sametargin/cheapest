const stores = [
  {
    id: "store-usa-ny",
    name: "Best Buy - New York",
    location: { lat: 40.7128, lng: -74.0060 }, // Örnek New York koordinatları
    products: [
      { productId: "ps5", price: 499, currency: "USD" },
      { productId: "macbook", price: 1099, currency: "USD" },
    ],
  },
  {
    id: "store-de-berlin",
    name: "MediaMarkt - Berlin",
    location: { lat: 52.5200, lng: 13.4050 }, // Örnek Berlin koordinatları
    products: [
      { productId: "ps5", price: 549, currency: "EUR" },
      { productId: "dyson", price: 799, currency: "EUR" },
    ],
  },
  {
    id: "store-tr-istanbul",
    name: "Teknosa - Istanbul",
    location: { lat: 41.0082, lng: 28.9784 }, // Örnek Istanbul koordinatları
    products: [
      { productId: "ps5", price: 22500, currency: "TRY" },
      { productId: "instapot", price: 3600, currency: "TRY" },
    ],
  },
  {
    id: "store-usa-ma-watertown",
    name: "Best Buy - Watertown, MA",
    location: { lat: 42.3638, lng: -71.1800 }, // Yaklaşık Watertown, MA koordinatları
    products: [
      { productId: "ps5", price: 499, currency: "USD" }, // PS5 fiyatı
      { productId: "macbook", price: 1099, currency: "USD" }, // MacBook Air M2 fiyatı
      { productId: "echo", price: 49.99, currency: "USD" }, // Amazon Echo Dot fiyatı
      { productId: "dyson", price: 749, currency: "USD" }, // Dyson V15 fiyatı
      { productId: "instapot", price: 89, currency: "USD" }, // Instant Pot fiyatı
    ],
  },
  // Daha fazla mağaza eklenebilir
];

module.exports = stores;
