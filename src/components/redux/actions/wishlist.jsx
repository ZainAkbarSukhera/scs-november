// // Add to wishlist
// export const addToWishlist = (data) => (dispatch, getState) => {
//   dispatch({
//     type: "ADD_TO_WISHLIST",
//     payload: data,
//   });

//   // Update localStorage after state has updated
//   const { wishlist } = getState().wishlist;
//   localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
//   return data;
// };

// // Remove from wishlist
// export const removeFromWishlist = (data) => (dispatch, getState) => {
//   dispatch({
//     type: "REMOVE_FROM_WISHLIST",
//     payload: data._id,  // Assuming `data._id` is the unique identifier for the item
//   });

//   // Update localStorage after state has updated
//   const { wishlist } = getState().wishlist;
//   localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
//   return data;
// };

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actionTypes';

// MODIFIED: Accept a second argument for the displayed image index
export const addToWishlist = (artworkData, displayedImageIndex = 0) => async (dispatch) => {
  try {
    // Create a new object for the payload that includes the artwork data
    // and the specific image index to display in the wishlist.
    const payloadData = {
      ...artworkData,
      // Store the index of the image that was displayed when added to wishlist
      wishlistDisplayImageIndex: displayedImageIndex,
    };

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: payloadData, // Payload is the modified artwork object
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return { error: error.message || "Failed to add to wishlist." };
  }
};

export const removeFromWishlist = (data) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: data._id,
    });
    return { success: true };
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    return { error: error.message || "Failed to remove from wishlist." };
  }
};