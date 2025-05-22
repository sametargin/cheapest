import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Footer bileşenini import edin

function HelpPage() {
  return (
    <div style={{ padding: 30, color: "white", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: 20 }}>Help</h1>
      <p style={{ marginBottom: 15 }}>
        Welcome to the Help page. Here you can find information about how to use Cheapest Global.
      </p>
      <p style={{ marginBottom: 15 }}>
        Our goal is to help you find the cheapest prices for products across different countries.
      </p>
      <p>
        If you have any specific questions, please feel free to contact us (contact information is not available on this demo).
      </p>
      <Link to="/" style={{ color: "#ffdb08", marginTop: 20, display: 'inline-block' }}>← Back to Home</Link>

      {/* Footer bileşenini ekleyin */}
      <Footer />
    </div>
  );
}

export default HelpPage;