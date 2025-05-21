import React from "react";
import { Link } from "react-router-dom";
import products from "./products";

function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((product) => {
          // Turkey veya Türkiye kontrolü
          const turkishPriceObj = product.prices.find(
            (p) => p.country === "Turkey" || p.country === "Türkiye"
          );

          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card" style={{ width: 200 }}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                  Turkey:{" "}
                  {turkishPriceObj
                    ? `${turkishPriceObj.price} ${turkishPriceObj.currency}`
                    : "N/A"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
