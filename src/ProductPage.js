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
        <Link to="/" style={{ color: "#bb86fc" }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 30, color: "white" }}>
      <Link to="/" style={{ color: "#bb86fc", textDecoration: "none" }}>← Back</Link>
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
                  <td style={{ padding: 8 }}>
                    {price.website ? (
                      <a href={price.website} target="_blank" rel="noopener noreferrer" style={{ color: "#bb86fc" }}>
                        {price.website.replace(/^https?:\/\//, "").split("/")[0]}
                      </a>
                    ) : (
                      "N/A"
                    )}
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
