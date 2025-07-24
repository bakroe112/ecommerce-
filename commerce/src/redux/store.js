import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slide/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
