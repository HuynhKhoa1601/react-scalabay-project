import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  items: {
    BlackTShirt: 0,
    BlueTShirt: 0,
    PinkTShirt: 0,
    WhiteTShirt: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    add: (state, action) => {
      state.items[action.payload]++;
      return state;
    },
    minus: (state, action) => {
      if (state.items[action.payload] > 0) {
        state.items[action.payload]--;
      }
      return state;
    },
    remove: (state, action) => {
      state.items[action.payload] = 0;
      return state;
    },
  },
});

export const { add, minus, remove } = cartSlice.actions;
export const cartSelector = (state) => state.cart.items;

export default cartSlice.reducer;
