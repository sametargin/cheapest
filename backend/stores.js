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
  // Daha fazla mağaza eklenebilir
];

module.exports = stores;
