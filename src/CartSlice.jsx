import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], addedToCart: {} };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.name === product.name);
      if (existingItem) existingItem.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
      state.addedToCart[product.name] = true;
    },
    removeItem(state, action) {
      const name = typeof action.payload === 'string' ? action.payload : action.payload.name;
      state.items = state.items.filter((item) => item.name !== name);
      delete state.addedToCart[name];
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.items.find((entry) => entry.name === name);
      if (!item) return;
      if (quantity <= 0) {
        state.items = state.items.filter((entry) => entry.name !== name);
        delete state.addedToCart[name];
      } else {
        item.quantity = quantity;
        state.addedToCart[name] = true;
      }
    },
    clearCart(state) { state.items = []; state.addedToCart = {}; },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectAddedToCart = (state) => state.cart.addedToCart;
export const selectCartQuantity = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer;
