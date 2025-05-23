import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

function AboutPage() {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ 
      padding: 30, 
      color: isDarkMode ? "white" : "#333",
      backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <h1 style={{ marginBottom: 20 }}>About Us</h1>
      <p style={{ marginBottom: 15 }}>
        Cheapest Global is a project aimed at comparing product prices from various online retailers around the world.
      </p>
      <p style={{ marginBottom: 15 }}>
        We strive to provide up-to-date price information to help consumers make informed purchasing decisions.
      </p>
      <p>
        This project is currently a demonstration and the data may not be real-time.
      </p>
       <Link to="/" style={{ color: "#ffdb08", marginTop: 20, display: 'inline-block' }}>← Back to Home</Link>

      {/* Footer bileşenini ekleyin */}
      <Footer />
    </div>
  );
}

export default AboutPage;