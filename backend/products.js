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
        company_logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
        website: "https://www.amazon.com"
      },
      {
        country: "Germany",
        price: 549,
        currency: "EUR",
        price_usd: 586,
        company: "Amazon DE",
        company_logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
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
      // Yeni ülkeler eklendi
      {
        country: "UK",
        price: 479,
        currency: "GBP",
        price_usd: 608, // Tahmini USD karşılığı
        company: "Argos",
        company_logo: "https://cdn.freebiesupply.com/logos/large/2x/argos-1-logo-png-transparent.png", // Logo URL güncellendi
        website: "https://www.argos.co.uk"
      },
      {
        country: "Canada",
        price: 649,
        currency: "CAD",
        price_usd: 475, // Tahmini USD karşılığı
        company: "Best Buy CA",
        company_logo: "https://www.bestbuy.ca/favicon.ico",
        website: "https://www.bestbuy.ca"
      },
      {
        country: "Australia",
        price: 799,
        currency: "AUD",
        price_usd: 530, // Tahmini USD karşılığı
        company: "EB Games AU",
        company_logo: "https://www.ebgames.com.au/favicon.ico",
        website: "https://www.ebgames.com.au"
      },
    ],
  },
  {
    id: "macbook",
    name: "MacBook Air M2",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
    prices: [
      // Website bilgileri eklendi
      { country: "USA", price: 1099, currency: "USD", price_usd: 1099, company: "Apple US", company_logo: "https://www.apple.com/favicon.ico", website: "https://www.apple.com" },
      { country: "Germany", price: 1299, currency: "EUR", price_usd: 1387, company: "Apple DE", company_logo: "https://www.apple.com/favicon.ico", website: "https://www.apple.com/de" },
      { country: "Turkey", price: 45999, currency: "TRY", price_usd: 1431, company: "Apple TR", company_logo: "https://www.apple.com/favicon.ico", website: "https://www.apple.com/tr" },
      {
        country: "France",
        price: 1349,
        currency: "EUR",
        price_usd: 1440,        company: "Apple FR",
        company_logo: "https://www.apple.com/favicon.ico",
        website: "https://www.apple.com/fr"
      },
      {
        country: "Spain",
        price: 1329,
        currency: "EUR",
        price_usd: 1419,        company: "Apple ES",
        company_logo: "https://www.apple.com/favicon.ico",
        website: "https://www.apple.com/es"
      },
      {
        country: "Italy",
        price: 1359,
        currency: "EUR",
        price_usd: 1451,        company: "Apple IT",
        company_logo: "https://www.apple.com/favicon.ico",
        website: "https://www.apple.com/it"
      },
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
      // Yeni ülkeler eklendi
      {
        country: "Japan",
        price: 7480,
        currency: "JPY",
        price_usd: 48, // Tahmini USD karşılığı
        company: "Amazon JP",
        company_logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
        website: "https://www.amazon.co.jp"
      },
      {
        country: "South Korea",
        price: 75000,
        currency: "KRW",
        price_usd: 55, // Tahmini USD karşılığı
        company: "Coupang",
        company_logo: "https://www.coupang.com/favicon.ico",
        website: "https://www.coupang.com"
      },
      {
        country: "Mexico",
        price: 1299,
        currency: "MXN",
        price_usd: 77, // Tahmini USD karşılığı
        company: "Amazon MX",
        company_logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
        website: "https://www.amazon.com.mx"
      },
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
      // Yeni ülkeler eklendi
      {
        country: "Netherlands",
        price: 829,
        currency: "EUR",
        price_usd: 885, // Tahmini USD karşılığı
        company: "Coolblue",
        company_logo: "https://www.coolblue.nl/favicon.ico",
        website: "https://www.coolblue.nl"
      },
      {
        country: "Sweden",
        price: 9490,
        currency: "SEK",
        price_usd: 880, // Tahmini USD karşılığı
        company: "Elgiganten",
        company_logo: "https://www.elgiganten.se/favicon.ico",
        website: "https://www.elgiganten.se"
      },
      {
        country: "Norway",
        price: 9990,
        currency: "NOK",
        price_usd: 920, // Tahmini USD karşılığı
        company: "Power.no",
        company_logo: "https://www.power.no/favicon.ico",
        website: "https://www.power.no"
      },
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
      // Yeni ülkeler eklendi
      {
        country: "Brazil",
        price: 599,
        currency: "BRL",
        price_usd: 115, // Tahmini USD karşılığı
        company: "Amazon BR",
        company_logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
        website: "https://www.amazon.com.br"
      },
      {
        country: "India",
        price: 7499,
        currency: "INR",
        price_usd: 90, // Tahmini USD karşılığı
        company: "Amazon IN",
        company_logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
        website: "https://www.amazon.in"
      },
      {
        country: "China",
        price: 699,
        currency: "CNY",
        price_usd: 97, // Tahmini USD karşılığı
        company: "JD.com",
        company_logo: "https://www.jd.com/favicon.ico",
        website: "https://www.jd.com"
      },
    ],
  },
];

// export default products; // Bu satırı silin veya yorum satırı yapın
module.exports = products; // Bu satırı kullanın
// This is a list of products with their prices in different countries.