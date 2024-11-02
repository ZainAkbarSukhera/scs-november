// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   cart: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
// };

// export const cartReducer = createReducer(initialState, {
//   addToCart: (state, action) => {
//     const item = action.payload;
//     const isItemExist = state.cart.find((i) => i._id === item._id);
//     if (isItemExist) {
//       return {
//         ...state,
//         cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
//       };
//     } else {
//       return {
//         ...state,
//         cart: [...state.cart, item],
//       };
//     }
//   },

//   removeFromCart: (state, action) => {
//     return {
//       ...state,
//       cart: state.cart.filter((i) => i._id !== action.payload),
//     };
//   },
// });

//////////////////////////////////////////////////////////////////////////////////
// import { createReducer } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   // totalQuantity: 0,
// };

// const cartReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('addItem', (state, action) => {
//       state.items.push(action.payload);
//       // state.totalQuantity += 1;
//     })
//     .addCase('removeItem', (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//       // state.totalQuantity -= 1;
//     });
// });

// export default cartReducer;

/////////////////////////////////////////////////////////////////////////////////////////

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;
///////////////////////////////////////////////////////////////////
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  // totalQuantity: 0,
};

const cartReducer = createReducer(initialState, (builder) =>  {
  builder
    .addCase('ADD_TO_CART', (state, action) => {
      state.items.push(action.payload);
      // state.totalQuantity += 1;
    })
    .addCase('REMOVE_FROM_CART', (state, action) => {
      // Remove item by id (action.payload is assumed to be an id)
      state.items = state.items.filter(item => item.id !== action.payload);
      // state.totalQuantity -= 1;
    });
});

export default cartReducer;