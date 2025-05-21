const products = [
  {
    id: "ps5",
    name: "PlayStation 5 Console",
    image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg",
    prices: [
      {
        country: "USA",
        price: 499,
        currency: "USD",
        price_usd: 499,
        company: "Amazon",
        company_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        website: "https://www.amazon.com"
      },
      {
        country: "Germany",
        price: 549,
        currency: "EUR",
        price_usd: 586,
        company: "Amazon DE",
        company_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        website: "https://www.amazon.de"
      },
      {
        country: "Turkey",
        price: 21999,
        currency: "TRY",
        price_usd: 684,
        company: "Hepsiburada",
        company_logo: "https://images.hepsiburada.net/assets/sfstatic/Content/images/favicon-32x32-new.png",
        website: "https://www.hepsiburada.com"
      },
    ],
  },
  {
    id: "macbook",
    name: "MacBook Air M2",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
    prices: [
      { country: "USA", price: 1099, currency: "USD", price_usd: 1099, website: "https://www.apple.com" },
      { country: "Germany", price: 1299, currency: "EUR", price_usd: 1387, website: "https://www.apple.com/de" },
      { country: "Turkey", price: 45999, currency: "TRY", price_usd: 1431, website: "https://www.apple.com/tr" },
    ],
  },
  {
    id: "echo",
    name: "Amazon Echo Dot (5th Gen)",
    image: "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_SL1000_.jpg",
    prices: [
      { country: "USA", price: 49.99, currency: "USD", price_usd: 49.99, website: "https://www.amazon.com" },
      { country: "Germany", price: 59.99, currency: "EUR", price_usd: 63, website: "https://www.amazon.de" },
      { country: "Turkey", price: 1999, currency: "TRY", price_usd: 62, website: "https://www.trendyol.com" },
    ],
  },
  {
    id: "dyson",
    name: "Dyson V15 Detect Vacuum",
    image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/447930-01.png",
    prices: [
      { country: "USA", price: 749, currency: "USD", price_usd: 749, website: "https://www.dyson.com" },
      { country: "Germany", price: 799, currency: "EUR", price_usd: 853, website: "https://www.dyson.de" },
      { country: "Turkey", price: 27999, currency: "TRY", price_usd: 871, website: "https://www.dyson.com.tr" },
    ],
  },
  {
    id: "instapot",
    name: "Instant Pot Duo 7-in-1",
    image: "https://i5.walmartimages.com/asr/f6802916-991c-426b-a0cb-de0081b09938.c10a4d8c8d8b7d0b7ebcfe961cdc3b06.jpeg",
    prices: [
      { country: "USA", price: 89, currency: "USD", price_usd: 89, website: "https://www.walmart.com" },
      { country: "Germany", price: 99, currency: "EUR", price_usd: 105, website: "https://www.amazon.de" },
      { country: "Turkey", price: 3499, currency: "TRY", price_usd: 109, website: "https://www.trendyol.com" },
    ],
  },
];

export default products;
// This is a list of products with their prices in different countries.