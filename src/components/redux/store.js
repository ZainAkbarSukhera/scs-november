// import { configureStore } from "@reduxjs/toolkit";
// // import { userReducer } from "./reducers/user";
// // import { sellerReducer } from "./reducers/seller";
// // import { productReducer } from "./reducers/product";
// // import { eventReducer } from "./reducers/event";
// import { cartReducer } from "./reducers/cart";
// // import { wishlistReducer } from "./reducers/wishlist";
// // import { orderReducer } from "./reducers/order";


// const Store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     // user: userReducer,
//     // seller: sellerReducer,
//     // products: productReducer,
//     // events: eventReducer,
  
//     // wishlist: wishlistReducer,
//     // order: orderReducer,
//   },
// });

// export default Store;

// ./src/components/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './reducers/cart';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";

const store = configureStore({
  reducer:  {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default store;