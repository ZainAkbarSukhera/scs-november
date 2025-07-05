// // add to cart
// export const addTocart = (data) => async (dispatch, getState) => {
//   dispatch({
//     type: "addToCart",
//     payload: data,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
//   return data;
// };

// // remove from cart
// export const removeFromCart = (data) => async (dispatch, getState) => {
//   dispatch({
//     type: "removeFromCart",
//     payload: data._id,
//   });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
//   return data;
// };

// Add to Cart
// export const addToCart = (data) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: "ADD_TO_CART", // Use uppercase for action types to distinguish them
//       payload: data,
//     });

//     // Update localStorage with the updated cart items
//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//   }
// };

// // Remove from Cart
// export const removeFromCart = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: id, // Using `id` directly for clarity
//     });

//     // Update localStorage with the updated cart items
//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
//   } catch (error) {
//     console.error("Error removing from cart:", error);
//   }
// };

// Add to Cart
// Add to Cart
// export const addToCart = (data) => async (dispatch, getState) =>  {
//   try {
//     const { cart } = getState(); // Destructure cart from state
//     const isItemExists = cart.items.find((item) => item.id === data.id); // Check if item exists

//     if (isItemExists) {
//       return { error: "Item already exists in cart" }; // Return an error indication
//     }

//     dispatch({
//       type: "ADD_TO_CART", // Use uppercase for action types to distinguish them
//       payload: data,
//     });

//     // Update localStorage with the updated cart items
//     localStorage.setItem("cartItems", JSON.stringify([...cart.items, data])); // Include new item in localStorage
//     return { success: true }; // Indicate success
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     return { error: error.message }; // Return error if needed
//   }
// };

// // Remove from Cart
// export const removeFromCart = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: id, // Using `id` directly for clarity
//     });

//     // Update localStorage with the updated cart items
//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
//   } catch (error) {
//     console.error("Error removing from cart:", error);
//   }
// };

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_CART_QUANTITY, // Import new action type
  DECREASE_CART_QUANTITY, // Import new action type
} from '../actionTypes';

// Assuming data is the full artwork object
export const addToCart = (data) => async (dispatch) => {
  try {
    // When adding to cart, initialize quantity to 1 if it's a new item instance
    // Or if you manage quantity through separate updates, just pass data.
    // For this implementation, we'll assume the reducer sets qty for new adds.
    dispatch({
      type: ADD_TO_CART,
      payload: { ...data, qty: 1 }, // Initialize quantity for new items
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { error: error.message || "Failed to add to cart." };
  }
};

export const removeFromCart = (itemIdentifier) => async (dispatch) => {
  try {
    // itemIdentifier can be either the full item object or just its _id
    dispatch({
      type: REMOVE_FROM_CART,
      payload: itemIdentifier,
    });
    return { success: true };
  } catch (error) {
    console.error("Error removing from cart:", error);
    return { error: error.message || "Failed to remove from cart." };
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CART,
    });
    return { success: true };
  } catch (error) {
    console.error("Error clearing cart:", error);
    return { error: error.message || "Failed to clear cart." };
  }
};

// --- NEW ACTION CREATORS FOR QUANTITY ---

export const increaseCartQuantity = (itemId) => async (dispatch) => {
  try {
    dispatch({
      type: INCREASE_CART_QUANTITY,
      payload: itemId, // Pass the ID of the item to increase
    });
    return { success: true };
  } catch (error) {
    console.error("Error increasing cart quantity:", error);
    return { error: error.message || "Failed to increase quantity." };
  }
};

export const decreaseCartQuantity = (itemId) => async (dispatch) => {
  try {
    dispatch({
      type: DECREASE_CART_QUANTITY,
      payload: itemId, // Pass the ID of the item to decrease
    });
    return { success: true };
  } catch (error) {
    console.error("Error decreasing cart quantity:", error);
    return { error: error.message || "Failed to decrease quantity." };
  }
};