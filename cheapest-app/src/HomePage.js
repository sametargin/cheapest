import React from "react";
import { Link } from "react-router-dom";
import products from "./products";

function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Ürünler</h1>
      <div style={{ display: "flex", gap: 20 }}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 10,
                width: 200
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                width="100%"
                style={{ borderRadius: 4 }}
              />
              <h3>{product.name}</h3>
              <p>Türkiye: {product.prices.find(p => p.country === "Türkiye")?.price} TRY</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
