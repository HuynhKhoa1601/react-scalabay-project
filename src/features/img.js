import { createSlice } from "@reduxjs/toolkit";

const initialState = { productName: "BlackTShirt" };

const imgSlice = createSlice({
  name: "img",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      return { productName: action.payload };
    },
  },
});

export const { update } = imgSlice.actions;
export const imgSelector = (state) => state.img.productName;

export default imgSlice.reducer;
