import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../logoCHPST.png";
import { useCurrency } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';
import { useMediaQuery } from "react-responsive";
import Footer from '../components/Footer';
import axios from 'axios';
import ReactCountryFlag from "react-country-flag";

function ProductPage() {
  const { id } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isDarkMode } = useTheme();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { selectedCurrency, setSelectedCurrency, exchangeRates, loadingRates, convertPrice } = useCurrency();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ nickname: '', comment: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Tam URL kullanıldığından emin olun
        const response = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch product data.");
        setProduct(null);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    const storedComments = localStorage.getItem(`comments_${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      setComments([]);
    }

  }, [id]);

  useEffect(() => {
    localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
  }, [comments, id]);


  const handleAddComment = (e) => {
    e.preventDefault();

    if (newComment.nickname.trim() === '' || newComment.comment.trim() === '') {
      alert('Please enter both nickname and comment.');
      return;
    }

    const commentToAdd = {
      nickname: newComment.nickname,
      comment: newComment.comment,
      timestamp: new Date().toLocaleString()
    };

    setComments([commentToAdd, ...comments]);

    setNewComment({ nickname: '', comment: '' });
  };

  if (loading) {
    return <div style={{ color: "white", padding: 30 }}>Loading product...</div>;
  }

  if (error) {
    return <div style={{ color: "red", padding: 30 }}>{error}</div>;
  }

  if (!product) {
    return (
      <div style={{ color: "white", padding: 30 }}>
        <h2>Product not found</h2>
        <Link to="/" style={{ color: "#ffdb08" }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: isMobile ? 16 : 30, 
      color: isDarkMode ? "white" : "#333",
      backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      {/* Başlık ve Para Birimi Seçici */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        marginBottom: isMobile ? 16 : 24,
        gap: isMobile ? 16 : 0
      }}>
        {/* Logo ve Başlık Link ile Sarmalandı */}
        <Link to="/"
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 8 : 10,
            margin: 0,
            textDecoration: 'none'
          }}
        >
          <img src={logo} alt="Cheapest Logo" style={{ height: isMobile ? 32 : 40 }} />
          <span style={{ fontWeight: 700, fontSize: isMobile ? 24 : 28 }}>Cheapest</span>
          <span
            style={{
              fontWeight: 400,
              fontSize: isMobile ? 16 : 20,
              opacity: 0.7,
              marginLeft: isMobile ? 0 : 4,
              letterSpacing: 1,
            }}
          >
            Global
          </span>
        </Link>
        {/* Para Birimi Seçici */}
        <div style={{ textAlign: isMobile ? 'left' : 'right', width: isMobile ? '100%' : 'auto' }}>
          <label htmlFor="currency-select" style={{ color: '#fff', marginRight: 8 }}>Para Birimi:</label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              backgroundColor: '#333',
              color: '#ffdb08',
              border: '1px solid #555',
              fontSize: 16,
              width: isMobile ? 'auto' : 'auto'
            }}
            disabled={loadingRates}
          >
            {loadingRates ? (
              <option>Loading...</option>
            ) : (
              Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            )}
          </select>
        </div>
      </div>


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
      {/* Ürün Resmi ve Detayları */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 24 : 32,
        alignItems: "flex-start",
        marginTop: 24,
        flexGrow: 1
      }}>
        <img
          src={product.image ? product.image : logo}
          alt={product.name}
          style={{
            height: isMobile ? 180 : 220,
            objectFit: "contain",
            background: "#222",
            borderRadius: 12,
            padding: 12,
            maxWidth: isMobile ? '100%' : 'auto',
            transition: "transform 0.2s ease-in-out",
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
        <div style={{ width: isMobile ? '100%' : 'auto' }}>
          <h1 style={{ marginBottom: 12, fontSize: isMobile ? 20 : 24 }}>{product.name}</h1>
          <h3 style={{ fontSize: isMobile ? 16 : 18 }}>Prices by Country</h3>
          {/* Fiyat Tablosu */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              color: "white",
              background: "#222",
              borderRadius: 8,
              padding: 8,
              width: isMobile ? 'max-content' : '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Country</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Price ({selectedCurrency})</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Original Price</th>
                  <th style={{ padding: 8, textAlign: 'left', border: '1px solid #444' }}>Website</th>
                </tr>
              </thead>
              <tbody>
                {product.prices.map((price, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#222' : '#2a2a2a'
                    }}
                  >
                    <td style={{ padding: 8, border: '1px solid #444' }}>{price.country}</td>
                    <td style={{ padding: 8, border: '1px solid #444' }}>{convertPrice(price.price_usd)} {selectedCurrency}</td>
                    <td style={{ padding: 8, border: '1px solid #444', fontSize: 12, opacity: 0.8 }}>
                      {price.price} {price.currency}
                    </td>
                    <td style={{ padding: 8, border: '1px solid #444', display: "flex", alignItems: "center", gap: 6 }}>
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

      {/* Yorum Bölümü */}
      <div style={{ marginTop: 40, width: '100%' }}>
        <h3 style={{ marginBottom: 15 }}>Comments</h3>

        {/* Yorum Ekle Formu */}
        <form onSubmit={handleAddComment} style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Your Nickname"
            value={newComment.nickname}
            onChange={(e) => setNewComment({ ...newComment, nickname: e.target.value })}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #555',
              backgroundColor: '#333',
              color: 'white',
              fontSize: 16,
            }}
          />
          <textarea
            placeholder="Your Comment"
            value={newComment.comment}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
            rows="4"
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #555',
              backgroundColor: '#333',
              color: 'white',
              fontSize: 16,
              resize: 'vertical',
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#ffdb08',
              color: '#222',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: 16,
              alignSelf: 'flex-start'
            }}
          >
            Add Comment
          </button>
        </form>

        {/* Mevcut Yorumları Listele */}
        <div style={{ marginTop: 20 }}>
          {comments.length === 0 ? (
            <p style={{ opacity: 0.8 }}>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} style={{ background: '#2a2a2a', borderRadius: 8, padding: 15, marginBottom: 15 }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#ffdb08' }}>{comment.nickname}</p>
                <p style={{ margin: '5px 0 10px 0', opacity: 0.9 }}>{comment.comment}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#aaa' }}>{comment.timestamp}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
