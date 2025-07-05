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

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./reducers/cart";
// import { wishlistReducer } from "./reducers/wishlist";

// const store = configureStore({
//   reducer:  {
//     cart: cartReducer,
//     wishlist:wishlistReducer,
//     // Add other reducers here if needed
//   },
// });

// export default store;

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

// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import userReducer from './reducers/user'; // ✅ Adjust path if needed
import {cartReducer} from './reducers/cart';
import {wishlistReducer} from './reducers/wishlist';
import bidReducer from './reducers/bid';
import marketReducer from './reducers/market';
import workshopReducer from './reducers/workshop';
import patronReducer from './reducers/patron';
// import other reducers if needed, like cartReducer, wishlistReducer

// ✅ Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
   wishlist: wishlistReducer,
   bid:bidReducer,
   market:marketReducer,
   workshops:workshopReducer,
   patrons:patronReducer,
});

// ✅ Configure persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // 👈 only persist user data for now
};

// ✅ Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

// ✅ Create persistor
export const persistor = persistStore(store);
