import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { removeItem, selectCartItems, selectCartTotal, updateQuantity } from './CartSlice.jsx';

const money = (amount) => '$' + amount.toFixed(2);

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  const handleIncrement = (item) => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => {
    const nextQuantity = item.quantity - 1;
    if (nextQuantity <= 0) dispatch(removeItem(item.name));
    else dispatch(updateQuantity({ name: item.name, quantity: nextQuantity }));
  };
  const handleDelete = (item) => dispatch(removeItem(item.name));

  return (
    <main className="cart-page">
      <div className="page-intro"><span className="eyebrow">Your little garden</span><h1>Shopping <em>Cart</em></h1><p>Every good thing starts with a little green.</p></div>
      {cart.length === 0 ? (
        <section className="empty-cart"><span className="empty-icon"><ShoppingBag size={24} /></span><h2>Your cart is waiting for a plant.</h2><p>Choose a leafy companion to bring a little more green home.</p><button className="primary-button" onClick={onContinueShopping}>Continue Shopping <ArrowLeft size={16} /></button></section>
      ) : (
        <div className="cart-layout">
          <section className="cart-container">
            <div className="cart-column-head"><span>Plant</span><span>Item total</span></div>
            {cart.map((item) => (
              <article className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-main"><h2>{item.name}</h2><p>{money(item.price)} each</p>
                  <div className="cart-controls"><div className="quantity-control" aria-label={'Quantity for ' + item.name}>
                    <button aria-label={'Decrease ' + item.name} onClick={() => handleDecrement(item)}><Minus size={15} /></button><span>{item.quantity}</span><button aria-label={'Increase ' + item.name} onClick={() => handleIncrement(item)}><Plus size={15} /></button>
                  </div><button className="delete-button" onClick={() => handleDelete(item)}><Trash2 size={14} /> Delete</button></div>
                </div>
                <strong className="item-subtotal">{money(item.price * item.quantity)}</strong>
              </article>
            ))}
            <button className="continue-link" onClick={onContinueShopping}><ArrowLeft size={15} /> Continue Shopping</button>
          </section>
          <aside className="order-summary"><span className="eyebrow">A little summary</span><h2>Total Amount</h2>
            <div className="summary-line"><span>Plants ({cart.reduce((n, item) => n + item.quantity, 0)})</span><strong>{money(totalAmount)}</strong></div>
            <div className="summary-line"><span>Delivery</span><strong className="free-shipping">On us</strong></div><div className="summary-divider" />
            <div className="summary-line summary-total"><span>Total</span><strong>{money(totalAmount)}</strong></div>
            <button className="checkout-button" onClick={() => window.alert('Coming Soon')}>Checkout</button>
          </aside>
        </div>
      )}
    </main>
  );
}
