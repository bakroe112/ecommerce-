import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = { itemList: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      // * state những thứ trong initialState
      const newItem = action.payload; // * những thứ mình truyền vào bằng dispatch

      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.images,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id); // ! Nếu item có quantity = 1 thì -> Giữ lại những item không trùng ID.
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    removeFromAllCart(state, action) {
      const id = action.payload;
      state.itemList = state.itemList.filter((item) => item.id !== id);
      state.totalQuantity -= state.itemList.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    clearCart(state) {
      state.itemList = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartAction = cartSlice.actions; // * Xuất các hàm reducer trong cartSlice vd: addToCart

export const { clearCart } = cartSlice.actions;
export const selectedTotalQuantity = createSelector(
  (state) => state.cart.itemList,
  (itemList) => itemList.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectedTotalPrice = createSelector(
  (state) => state.cart.itemList,
  (itemList) => itemList.reduce((acc, item) => acc + item.totalPrice, 0)
);
export default cartSlice;
