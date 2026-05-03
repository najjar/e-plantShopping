import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleGetStarted = () => {
    setCurrentPage('products');
  };

  return (
    <div>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <nav className="navbar">
            <h2>Paradise Nursery 🌿</h2>
            <span
              className="cart-icon"
              onClick={() => setCurrentPage('cart')}
              style={{ cursor: 'pointer' }}
            >
              🛒 Cart
            </span>
          </nav>
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Every Plant Finds a Home</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {currentPage === 'products' && (
        <div>
          <nav className="navbar" style={{ position: 'static', background: '#2d6a4f' }}>
            <h2 onClick={() => setCurrentPage('landing')} style={{ cursor: 'pointer' }}>
              Paradise Nursery 🌿
            </h2>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span onClick={() => setCurrentPage('about')} style={{ cursor: 'pointer', color: 'white' }}>About Us</span>
              <span onClick={() => setCurrentPage('cart')} style={{ cursor: 'pointer', color: 'white' }}>🛒 Cart</span>
            </div>
          </nav>
          <ProductList />
        </div>
      )}

      {currentPage === 'cart' && (
        <div>
          <nav className="navbar" style={{ position: 'static', background: '#2d6a4f' }}>
            <h2 onClick={() => setCurrentPage('landing')} style={{ cursor: 'pointer' }}>
              Paradise Nursery 🌿
            </h2>
            <span onClick={() => setCurrentPage('products')} style={{ cursor: 'pointer', color: 'white' }}>
              🌱 Continue Shopping
            </span>
          </nav>
          <CartItem />
        </div>
      )}

      {currentPage === 'about' && (
        <div>
          <nav className="navbar" style={{ position: 'static', background: '#2d6a4f' }}>
            <h2 onClick={() => setCurrentPage('landing')} style={{ cursor: 'pointer' }}>
              Paradise Nursery 🌿
            </h2>
            <span onClick={() => setCurrentPage('products')} style={{ cursor: 'pointer', color: 'white' }}>
              🌱 Shop Now
            </span>
          </nav>
          <AboutUs />
        </div>
      )}
    </div>
  );
}

export default App;
