import React from "react";
import { Link } from "react-router-dom";
import products from "./products";
import logo from "./logoCHPST.png";
import { FiSettings, FiUser, FiHelpCircle } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

const infoText = `
  This site helps you shop globally and find products that may be cheaper in other countries you visit.
  Prices are updated daily but may contain errors or delays. Always check the official website before purchasing.
`;

function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      {isMobile ? (
        // Mobil görünüm
        <div style={{ padding: 16 }}>
          <h1>Cheapest (Mobile)</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Daha küçük kartlar
              gap: 16,
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div
                  className="card"
                  style={{
                    height: 300, // Daha kısa kartlar
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
                    style={{ height: 120, objectFit: "contain", marginBottom: 8 }} // Daha küçük resim
                  />
                  <h3 style={{ fontSize: 14 }}>{product.name}</h3> {/* Daha küçük başlık */}
                  <p style={{ fontSize: 12 }}>
                    Cheapest: {product.prices[0].country} - {product.prices[0].price} {product.prices[0].currency}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        // Masaüstü görünüm
        <div style={{ padding: 30 }}>
          {/* Kayan bilgi çubuğu */}
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              background: "#222",
              color: "#ffdb08",
              fontWeight: 500,
              fontSize: 12,
              padding: "8px 0",
              marginBottom: 18,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                animation: "scroll-left 30s linear infinite",
                minWidth: "100%",
              }}
            >
              {infoText}
            </div>
            {/* Animasyon tanımı */}
            <style>
              {`
                @keyframes scroll-left {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-100%); }
                }
              `}
            </style>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              background: "#181818",
              padding: "16px 0",
              gap: 16,
            }}
          >
            {/* Sol: Logo ve Başlık */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
              <img
                src={logo}
                alt="Cheapest Logo"
                style={{ height: 48, display: "block" }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 40,
                  lineHeight: 1,
                  letterSpacing: 1,
                }}
              >
                Cheapest
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 32,
                  opacity: 0.6,
                  marginLeft: 1,
                  lineHeight: 1,
                }}
              >
                Global
              </span>
            </div>
            {/* Sağ: İkon Butonlar */}
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffdb08",
                  fontSize: 32,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                title="Account"
              >
                <FiUser />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffdb08",
                  fontSize: 32,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                title="Settings"
              >
                <FiSettings />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffdb08",
                  fontSize: 32,
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
                title="Help"
              >
                <FiHelpCircle />
              </button>
            </div>
          </div>
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
                      Cheapest: {cheapest.country} – {cheapest.price}{" "}
                      {cheapest.currency}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
