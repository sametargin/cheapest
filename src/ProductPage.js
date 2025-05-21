import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div style={{ color: "white", padding: 30 }}>
        <h2>Product not found</h2>
        <Link to="/" style={{ color: "#ffdb08" }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 30, color: "white" }}>
      {/* Başlık */}
      <h1
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 24,
        }}
      >
        <img src={logo} alt="Cheapest Logo" style={{ height: 40 }} />
        <span style={{ fontWeight: 700 }}>Cheapest</span>
        <span
          style={{
            fontWeight: 400,
            fontSize: 20,
            opacity: 0.7,
            marginLeft: 4,
            letterSpacing: 1,
          }}
        >
          Global
        </span>
      </h1>

      <Link
        to="/"
        style={{
          background: "#ffdb08",
          color: "#222",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "8px 18px",
          borderRadius: 8,
          display: "inline-block",
          marginBottom: 18,
        }}
      >
        ← Back
      </Link>
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", marginTop: 24 }}>
        <img
          src={product.image ? product.image : logo}
          alt={product.name}
          style={{ height: 220, objectFit: "contain", background: "#222", borderRadius: 12, padding: 12 }}
        />
        <div>
          <h1 style={{ marginBottom: 12 }}>{product.name}</h1>
          <h3>Prices by Country</h3>
          <table style={{ color: "white", background: "#222", borderRadius: 8, padding: 8 }}>
            <thead>
              <tr>
                <th style={{ padding: 8 }}>Country</th>
                <th style={{ padding: 8 }}>Price</th>
                <th style={{ padding: 8 }}>Currency</th>
                <th style={{ padding: 8 }}>Website</th>
              </tr>
            </thead>
            <tbody>
              {product.prices.map((price, idx) => (
                <tr key={idx}>
                  <td style={{ padding: 8 }}>{price.country}</td>
                  <td style={{ padding: 8 }}>{price.price}</td>
                  <td style={{ padding: 8 }}>{price.currency}</td>
                  <td style={{ padding: 8, display: "flex", alignItems: "center", gap: 6 }}>
                    {price.company_logo && (
                      <img
                        src={price.company_logo}
                        alt={price.company}
                        style={{ width: 20, height: 20, borderRadius: 4, marginRight: 4 }}
                      />
                    )}
                    <span>{price.company}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
