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
// import { createReducer } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   // totalQuantity: 0,
// };

// const cartReducer = createReducer(initialState, (builder) =>  {
//   builder
//     .addCase('ADD_TO_CART', (state, action) => {
//       state.items.push(action.payload);
//       // state.totalQuantity += 1;
//     })
//     .addCase('REMOVE_FROM_CART', (state, action) => {
//       // Remove item by id (action.payload is assumed to be an id)
//       state.items = state.items.filter(item => item.id !== action.payload);
//       // state.totalQuantity -= 1;
//     });
// });

// export default cartReducer;

// src/redux/reducers/cart.js
// import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actionTypes';

// const initialState = {
//   cart: [],
// };

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, action.payload], // Add new item
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter(item => item._id !== action.payload), // Remove item by ID
//       };
//     case CLEAR_CART:
//       return {
//         ...state,
//         cart: [], // Empty the cart
//       };
//     default:
//       return state;
//   }
// };

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_CART_QUANTITY, // Import new action type
  DECREASE_CART_QUANTITY, // Import new action type
} from '../actionTypes';

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      { const itemToAdd = action.payload; // This payload should already have qty: 1 from the action creator
      const existingItem = state.cart.find(item => item._id === itemToAdd._id);

      if (existingItem) {
        // If item already exists, increase its quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item._id === itemToAdd._id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        // If it's a new item, add it with qty 1 (already set in action creator)
        return {
          ...state,
          cart: [...state.cart, { ...itemToAdd, qty: 1 }], // Ensure qty is set here too, in case action creator doesn't
        };
      } }

    case REMOVE_FROM_CART:
      { const idToRemove = action.payload && typeof action.payload === 'object'
                         ? action.payload._id
                         : action.payload;
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== idToRemove),
      }; }

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case INCREASE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case DECREASE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item._id === action.payload
            ? { ...item, qty: Math.max(1, item.qty - 1) } // Ensure quantity doesn't go below 1
            : item
        ).filter(item => item.qty > 0), // Optionally remove item if quantity becomes 0
      };

    default:
      return state;
  }
};