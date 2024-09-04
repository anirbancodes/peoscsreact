import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.qty += newItem.qty;
      } else {
        state.cart.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
