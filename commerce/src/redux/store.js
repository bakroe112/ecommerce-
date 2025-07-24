import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./slide/favoriteSlice";
import cartSlice from "./slide/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
