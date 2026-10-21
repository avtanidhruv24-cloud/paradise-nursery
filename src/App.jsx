import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDown, ArrowLeft, ArrowRight, Leaf, Menu, ShoppingBag, X } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { clearCart, selectCartCount, selectCartItems, selectCartTotal } from './CartSlice.jsx';

const money = (value) => `$${value.toFixed(2)}`;

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const showShop = () => { setPage('shop'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const showCart = () => { setPage('cart'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const showHome = () => { setPage('home'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return <>
    <header className="site-header">
      <a href="#home" className="brand" onClick={(event) => { event.preventDefault(); showHome(); }}><span className="brand-mark"><Leaf size={20} /></span><span>paradise<span className="brand-light">nursery</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
        <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={showHome}>Home</button>
        <button className={page === 'shop' ? 'nav-link active' : 'nav-link'} onClick={showShop}>Our plants</button>
        <a className="nav-link" href={page === 'home' ? '#about' : '#about'} onClick={() => setMenuOpen(false)}>Our story</a>
        <button className={`cart-link${page === 'cart' ? ' active' : ''}`} onClick={showCart} aria-label={`Shopping bag, ${cartCount} items`}><ShoppingBag size={19} /><span>Bag</span><span className="cart-count">{cartCount}</span></button>
      </nav>
    </header>

    {page === 'home' && <main id="home">
      <section className="hero">
        <div className="hero-content"><span className="eyebrow hero-eyebrow"><span /> A little more green, every day</span>
          <h1>Make room<br />for <em>good things</em><br />to grow.</h1>
          <p>Thoughtful plants for a home that feels a little more like you. Start small, grow at your own pace.</p>
          <button className="primary-button" onClick={showShop}>Get started <ArrowRight size={17} /></button>
          <div className="hero-note"><span className="note-line" /> Grown with care. Delivered with love.</div>
        </div>
        <div className="hero-decoration"><span>GROW AT YOUR OWN PACE</span><ArrowDown size={15} /></div>
      </section>
      <div className="promise-strip"><span><Leaf size={17} /> Thoughtfully sourced</span><i /><span>Easy-care favorites</span><i /><span>Here for your growing journey</span></div>
      <AboutUs />
      <section className="home-shop"><div><span className="eyebrow">Your next little joy</span><h2>Find the one that <em>feels like you.</em></h2></div><button className="text-button" onClick={showShop}>Explore our plants <ArrowRight size={17} /></button></section>
      <ProductList />
    </main>}

    {page === 'shop' && <main className="page-shell"><div className="page-intro"><button className="back-link" onClick={showHome}><ArrowLeft size={16} /> Back home</button><span className="eyebrow">The plant edit</span><h1>A greener kind of <em>everyday.</em></h1><p>Choose a new leafy companion for your space. Every plant comes with care tips to help it feel at home.</p></div><ProductList /></main>}

    {page === 'cart' && <main className="page-shell cart-page"><div className="page-intro cart-intro"><button className="back-link" onClick={showShop}><ArrowLeft size={16} /> Continue shopping</button><span className="eyebrow">Your little garden</span><h1>Your bag<span className="bag-total-count">{cartCount} {cartCount === 1 ? 'plant' : 'plants'}</span></h1></div>
      {items.length === 0 ? <section className="empty-cart"><span className="empty-icon"><ShoppingBag size={25} /></span><h2>Room for one more?</h2><p>Your bag is taking a little breather. Find a plant that feels like home.</p><button className="primary-button" onClick={showShop}>Explore plants <ArrowRight size={17} /></button></section> : <div className="cart-layout">
        <section className="cart-list"><div className="cart-column-head"><span>Plant</span><span>Subtotal</span></div>{items.map((item) => <CartItem key={item.id} item={item} />)}<button className="continue-link" onClick={showShop}><ArrowLeft size={15} /> Keep exploring</button></section>
        <aside className="order-summary"><span className="eyebrow">A little summary</span><h2>Order total</h2><div className="summary-line"><span>Subtotal</span><strong>{money(total)}</strong></div><div className="summary-line"><span>Shipping</span><strong className="shipping-free">On us</strong></div><div className="summary-divider" /><div className="summary-line summary-total"><span>Total</span><strong>{money(total)}</strong></div><button className="checkout-button" onClick={() => window.alert('Checkout is coming soon. Your plants will be ready when we are!')}>Checkout <ArrowRight size={17} /></button><p className="checkout-note">Checkout is coming soon. Your plants are safe in your bag.</p><button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear your bag</button></aside>
      </div>}
    </main>}

    <footer className="site-footer"><div className="footer-brand"><a href="#home" className="brand" onClick={(event) => { event.preventDefault(); showHome(); }}><span className="brand-mark"><Leaf size={19} /></span><span>paradise<span className="brand-light">nursery</span></span></a><p>A little more green, every day.</p></div><span className="footer-note">Made for growing at your own pace <span>✳</span></span><small>© 2025 Paradise Nursery</small></footer>
  </>;
}
