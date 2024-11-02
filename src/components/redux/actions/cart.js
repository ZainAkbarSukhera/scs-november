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
export const addToCart = (data) => async (dispatch, getState) =>  {
  try {
    const { cart } = getState(); // Destructure cart from state
    const isItemExists = cart.items.find((item) => item.id === data.id); // Check if item exists

    if (isItemExists) {
      return { error: "Item already exists in cart" }; // Return an error indication
    }

    dispatch({
      type: "ADD_TO_CART", // Use uppercase for action types to distinguish them
      payload: data,
    });

    // Update localStorage with the updated cart items
    localStorage.setItem("cartItems", JSON.stringify([...cart.items, data])); // Include new item in localStorage
    return { success: true }; // Indicate success
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { error: error.message }; // Return error if needed
  }
};

// Remove from Cart
export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id, // Using `id` directly for clarity
    });

    // Update localStorage with the updated cart items
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};