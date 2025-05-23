import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <div style={{
      marginTop: 'auto', // İçeriği yukarı iter
      paddingTop: 20,
      borderTop: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
      textAlign: 'center',
      fontSize: 14,
      color: isDarkMode ? '#aaa' : '#666'
    }}>
      <Link to="/help" style={{ color: '#ffdb08', textDecoration: 'none', marginRight: 15 }}>Help</Link>
      <Link to="/about" style={{ color: '#ffdb08', textDecoration: 'none', marginRight: 15 }}>About Us</Link>
      <span>&copy; 2025 Cheapest Global</span>
    </div>
  );
}

export default Footer;