// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: localStorage.getItem("wishlistItems")
//     ? JSON.parse(localStorage.getItem("wishlistItems"))
//     : [],
// };

// export const wishlistReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase("ADD_TO_WISHLIST", (state, action) => {
//       const item = action.payload;
//       const isItemExist = state.wishlist.find((i) => i._id === item._id);

//       if (isItemExist) {
//         // Update the existing item in the wishlist
//         state.wishlist = state.wishlist.map((i) =>
//           i._id === isItemExist._id ? item : i
//         );
//       } else {
//         // Add new item to the wishlist
//         state.wishlist.push(item);
//       }
//     })
//     .addCase("REMOVE_FROM_WISHLIST", (state, action) => {
//       // Remove item by filtering out the one with the matching ID
//       state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
//     });
// });

// // src/reducers/wishlistSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: localStorage.getItem("wishlistItems")
//     ? JSON.parse(localStorage.getItem("wishlistItems"))
//     : [],
// };

// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       const item = action.payload;
//       const isItemExist = state.wishlist.find((i) => i._id === item._id);

//       if (isItemExist) {
//         state.wishlist = state.wishlist.map((i) =>
//           i._id === isItemExist._id ? item : i
//         );
//       } else {
//         state.wishlist.push(item);
//       }

//       localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
//     },
//     removeFromWishlist: (state, action) => {
//       state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
//       localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;


// src/redux/reducers/wishlist.js
// import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actionTypes';

// const initialState = {
//   wishlist: [],
// };

// export const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       return {
//         ...state,
//         wishlist: [...state.wishlist, action.payload],
//       };
//     case REMOVE_FROM_WISHLIST:
//       return {
//         ...state,
//         wishlist: state.wishlist.filter(item => item._id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actionTypes';

const initialState = {
  wishlist: [],
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // This part remains the same as it correctly adds the full artwork object
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      // This is the modified section for robust removal:
      // It checks if action.payload is an object and extracts its _id,
      // otherwise, it assumes action.payload is already the _id.
      { const idToRemove = action.payload && typeof action.payload === 'object'
                         ? action.payload._id
                         : action.payload;

      return {
        ...state,
        // Filter out the item whose _id matches the idToRemove
        wishlist: state.wishlist.filter(item => item._id !== idToRemove),
      }; }

    default:
      return state;
  }
};