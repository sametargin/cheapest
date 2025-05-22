import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{
      marginTop: 'auto', // İçeriği yukarı iter
      paddingTop: 20,
      borderTop: '1px solid #333',
      textAlign: 'center',
      fontSize: 14,
      color: '#aaa'
    }}>
      <Link to="/help" style={{ color: '#ffdb08', textDecoration: 'none', marginRight: 15 }}>Help</Link>
      <Link to="/about" style={{ color: '#ffdb08', textDecoration: 'none', marginRight: 15 }}>About Us</Link>
      <span>&copy; 2025 Cheapest Global</span>
    </div>
  );
}

export default Footer;