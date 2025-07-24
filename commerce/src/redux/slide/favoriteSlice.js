import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = { favoritesItemList: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addToFavorites(state, action) {
      // * state những thứ trong initialState
      const newItem = action.payload; // * những thứ mình truyền vào bằng dispatch

      const existingItemIndex = state.favoritesItemList.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state.favoritesItemList[existingItemIndex].quantity++;
      } else {
        state.favoritesItemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.images,
        });
      }
    },

    removeFromFavorites(state, action) {
      const idToRemove = action.payload;
      state.favoritesItemList = state.favoritesItemList.filter(
        (item) => item.id !== idToRemove
      );
    },

    clearFavorites(state) {
      state.favoritesItemList = [];
    },
  },
});

export const favoritesAction = favoritesSlice.actions; // * Xuất các hàm reducer trong favoritesSlice 

export const { clearFavorites } = favoritesSlice.actions;

export const selectedTotalFavorites = createSelector(
  (state) => state.favorites.favoritesItemList,
  (favoritesItemList) => favoritesItemList.length
);

export default favoritesSlice;
