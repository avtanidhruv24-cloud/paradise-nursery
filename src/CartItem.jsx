import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './CartSlice.jsx';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return <article className="cart-item">
    <img src={item.image} alt={item.name} />
    <div className="cart-item-main"><div><h3>{item.name}</h3><p>${item.price.toFixed(2)} each</p></div>
      <div className="cart-controls"><div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
        <button aria-label="Decrease quantity" onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={15} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={15} /></button>
      </div><button className="remove-button" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={17} /><span>Remove</span></button></div>
    </div>
    <strong className="cart-subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
  </article>;
}
