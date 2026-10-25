import React, { useState } from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';
import ProductList, { Navbar } from './ProductList.jsx';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setCurrentPage('plants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setShowProductList(page === 'plants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' && (
        <main>
          <section className="background-image" id="home">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow"><Leaf size={15} /> A little more green, every day</span>
              <h1>Welcome to Paradise Nursery</h1>
              <p>Thoughtful plants for a home that feels a little more like you. Start small and grow at your own pace.</p>
              <button className="primary-button" onClick={handleGetStartedClick}>Get Started <ArrowRight size={17} /></button>
              <span className="hero-footnote">Grown with care. Delivered with love.</span>
            </div>
          </section>
          <div className="promise-strip"><span>Thoughtfully sourced</span><i /><span>Easy-care favorites</span><i /><span>Here for your growing journey</span></div>
          <AboutUs />
        </main>
      )}
      {showProductList && currentPage === 'plants' && <ProductList />}
      {currentPage === 'cart' && <CartItem onContinueShopping={() => handleNavigate('plants')} />}
      <footer className="site-footer">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); handleNavigate('home'); }}>
          <span className="brand-mark"><Leaf size={17} /></span><span>paradise<span className="brand-light">nursery</span></span>
        </a>
        <span>Made for growing at your own pace · © 2025 Paradise Nursery</span>
      </footer>
    </>
  );
}

