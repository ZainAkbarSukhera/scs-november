// Add to wishlist
export const addToWishlist = (data) => (dispatch, getState) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: data,
  });

  // Update localStorage after state has updated
  const { wishlist } = getState().wishlist;
  localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  return data;
};

// Remove from wishlist
export const removeFromWishlist = (data) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_WISHLIST",
    payload: data._id,  // Assuming `data._id` is the unique identifier for the item
  });

  // Update localStorage after state has updated
  const { wishlist } = getState().wishlist;
  localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  return data;
};