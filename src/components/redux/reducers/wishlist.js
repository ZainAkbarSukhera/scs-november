import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("ADD_TO_WISHLIST", (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);

      if (isItemExist) {
        // Update the existing item in the wishlist
        state.wishlist = state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        // Add new item to the wishlist
        state.wishlist.push(item);
      }
    })
    .addCase("REMOVE_FROM_WISHLIST", (state, action) => {
      // Remove item by filtering out the one with the matching ID
      state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
    });
});