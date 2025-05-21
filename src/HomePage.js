import React from "react";
import { Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";

function HomePage() {
  return (
    <div style={{ padding: 30 }}>
      <h1
        style={{
          color: "white",
          display: "flex",
          alignItems: "flex-end",
          gap: 16,
          background: "#181818",
          padding: "16px 0",
        }}
      >
        <img src={logo} alt="Cheapest Logo" style={{ height: 48, display: "block" }} />
        <span
          style={{
            fontWeight: 800,
            fontSize: 48,
            lineHeight: 1,
            letterSpacing: 1,
          }}
        >
          Cheapest
        </span>
        <span
          style={{
            fontWeight: 400,
            fontSize: 40,
            opacity: 0.6,
            marginLeft: 8,
            lineHeight: 1,
          }}
        >
          Global
        </span>
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 25,
        }}
      >
        {products.map((product) => {
          const cheapest = product.prices.reduce((min, curr) =>
            curr.price_usd < min.price_usd ? curr : min
          );
          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                className="card"
                style={{
                  height: 360,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 12,
                  padding: 12,
                  display: "grid",
                  justifyContent: "space-between",
                  boxShadow: "0 0 8px rgba(29, 57, 109, 0.05)",
                }}
              >
                <img
                  src={product.image ? product.image : "logoCHPST.png"}
                  alt={product.name}
                  style={{
                    height: 180,
                    objectFit: "contain",
                    marginBottom: 12,
                  }}
                />
                <h3 style={{ fontSize: 16 }}>{product.name}</h3>
                <p style={{ fontSize: 14 }}>
                  Cheapest: {cheapest.country} – {cheapest.price} {cheapest.currency}
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
