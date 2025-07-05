// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { addTocart } from "../redux/actions/cart";
// import { toast } from "react-toastify";
// import axios from "axios";




// const MainArtworkProfile = ({artworkDetails}) => {
//   const { cart } = useSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i.id === id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       // if (artworkDetails.stock < 1) {
//       //   toast.error("Product stock limited!");
//       // } else {
//         const cartData = { ...artworkDetails };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
    
//   };

//   return(
// <div className="flex flex-col lg:flex-row gap-4 p-4">
//   {/* Left Column: Text */}
//   <div className="lg:w-1/2 text-yankees-blue font-montserrat-light text-base text-justify">
//     <p>{artworkDetails.artworkDescription}</p>
//   </div>

//   {/* Right Column: Image and Buttons */}
//   <div className="lg:w-1/2 flex flex-col items-center">
//     <img src={artworkDetails.image} alt="Artwork" className="w-full h-auto max-w-lg object-contain mb-2" />

//     {/* Centered Buttons Section */}
//     <div className="flex gap-4 mt-4 font-montserrat-light">
//       <button  onClick={() => addToCartHandler(artworkDetails.id)} className="bg-madder-lake text-white py-2 px-8 rounded-lg hover:bg-red-700 transition duration-300">
//         Add to Cart
//       </button>
//       <button className="bg-fire-opal text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300">
//         Add to Wishlist
//       </button>
//     </div>
//   </div>
// </div>
//   );
  

// };

// export default MainArtworkProfile;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { addTocart } from "../redux/actions/cart";// Ensure the import matches your action's name
// import { toast } from "react-toastify";

// const MainArtworkProfile = ({ artworkDetails }) => {
//   const { cart } = useSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i.id === id);
//     if (isItemExists) {
//       console.log("Item already exists");
//       toast.error("Item already in cart!");
//     } else {
//       console.log("Adding item to cart");
//       const cartData = { ...artworkDetails };
//       dispatch(addTocart(cartData));
//       toast.success("Item added to cart successfully!");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 p-4">
//       {/* Left Column: Text */}
//       <div className="lg:w-1/2 text-yankees-blue font-montserrat-light text-base text-justify">
//         <p>{artworkDetails.artworkDescription}</p>
//       </div>

//       {/* Right Column: Image and Buttons */}
//       <div className="lg:w-1/2 flex flex-col items-center">
//         <img
//           src={artworkDetails.image}
//           alt="Artwork"
//           className="w-full h-auto max-w-lg object-contain mb-2"
//         />

//         {/* Centered Buttons Section */}
//         <div className="flex gap-4 mt-4 font-montserrat-light">
//           <button
//             onClick={() => addToCartHandler(artworkDetails.id)}
//             className="bg-madder-lake text-white py-2 px-8 rounded-lg hover:bg-red-700 transition duration-300"
//           >
//             Add to Cart
//           </button>
//           <button className="bg-fire-opal text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300">
//             Add to Wishlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainArtworkProfile;

///////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { addToCart } from "../redux/actions/cart";
// import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlist";

// const MainArtworkProfile = ({ artworkDetails }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [click, setClick] = useState(false);

//   const removeFromWishlistHandler = (data) => {
//     setClick(false);
//     dispatch(removeFromWishlist(data));
//     toast.success(`${data.artName} removed from wishlist!`); 
//   };

//   const addToWishlistHandler = (data) => {
//     setClick(true);
//     dispatch(addToWishlist(data));
//     toast.success(`${data.artName} added to wishlist!`); 
//   };

//   const addToCartHandler = async (id) => {
//     const result = await dispatch(addToCart({ ...artworkDetails, id }));
//     if (result?.error) {
//       toast.error(result.error); // Show error toast if item already exists
//     } else {
//       toast.success("Item added to cart successfully!"); // Show success toast
//     }
//   };

//   return (
//         <div className="flex flex-col lg:flex-row gap-4 p-4">
//        {/* Left Column: Text */}
//        <div className="lg:w-1/2 text-yankees-blue font-montserrat-light text-base text-justify">
//          <p>{artworkDetails.artworkDescription}</p>
//        </div>

//        {/* Right Column: Image and Buttons */}
//        <div className="lg:w-1/2 flex flex-col items-center">
//          <img
//            src={artworkDetails.image}
//            alt="Artwork"
//            className="w-full h-auto max-w-lg object-contain mb-2"
//          />

//          {/* Centered Buttons Section */}
//          <div className="flex gap-4 mt-4 font-montserrat-light">
//            <button
//              onClick={() => addToCartHandler(artworkDetails.id)}
//              className="bg-madder-lake text-white py-2 px-8 rounded-lg hover:bg-red-700 transition duration-300"
//            >
//              Add to Cart
//            </button>
          
//            {/* Wishlist Toggle Button */}
//            <button
//              onClick={() =>
//                click ? removeFromWishlistHandler(artworkDetails) : addToWishlistHandler(artworkDetails)
//              }
//              className={`py-2 px-6 rounded-lg transition duration-300 text-white ${
//                click ? "bg-red-500 hover:bg-red-700" : "bg-fire-opal hover:bg-orange-500"
//              }`}
//            >
//              {click ? "Remove from Wishlist" : "Add to Wishlist"}
//            </button>
//          </div>
//        </div>
//      </div>
//   );
// };

// export default MainArtworkProfile;


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/actions/cart";
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlist"; // Ensure addToWishlist is imported

const MainArtworkProfile = ({ artworkDetails, initialImageIndex, onImageChange }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0); // This is the state we need!

  // Effect to synchronize displayedImageIndex with initialImageIndex prop
  useEffect(() => {
    if (artworkDetails && artworkDetails.images) {
      if (initialImageIndex >= 0 && initialImageIndex < artworkDetails.images.length) {
        setDisplayedImageIndex(initialImageIndex);
      } else {
        setDisplayedImageIndex(0);
      }
    }
  }, [initialImageIndex, artworkDetails]);

  // Effect to check if the artwork is already in the wishlist
  useEffect(() => {
    if (artworkDetails && wishlist) {
      const isInWishlist = wishlist.some(item => item._id === artworkDetails._id);
      setClick(isInWishlist);
    }
  }, [artworkDetails, wishlist]);

  if (!artworkDetails) {
    return null;
  }

  const removeFromWishlistHandler = (data) => {
    setClick(false);
    dispatch(removeFromWishlist(data));
    toast.success(`${data.title || 'Item'} removed from wishlist!`);
  };

  const addToWishlistHandler = (data) => {
    setClick(true);
    // --- MODIFIED: Pass the current displayedImageIndex to the action creator ---
    dispatch(addToWishlist(data, displayedImageIndex));
    toast.success(`${data.title || 'Item'} added to wishlist!`);
  };

  const addToCartHandler = async () => {
    const isItemInCart = cart.some(item => item._id === artworkDetails._id);
    if (isItemInCart) {
      toast.error(`${artworkDetails.title || 'Item'} is already in your cart!`);
      return;
    }

    const result = dispatch(addToCart(artworkDetails));

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Item added to cart successfully!");
    }
  };

  const goToNextImage = () => {
    if (!artworkDetails || !artworkDetails.images || artworkDetails.images.length === 0) return;
    const nextIndex = (displayedImageIndex + 1) % artworkDetails.images.length;
    setDisplayedImageIndex(nextIndex);
    if (onImageChange) {
      onImageChange(nextIndex);
    }
  };

  const goToPreviousImage = () => {
    if (!artworkDetails || !artworkDetails.images || artworkDetails.images.length === 0) return;
    const prevIndex = (displayedImageIndex - 1 + artworkDetails.images.length) % artworkDetails.images.length;
    setDisplayedImageIndex(prevIndex);
    if (onImageChange) {
      onImageChange(prevIndex);
    }
  };

  const currentImageUrl = artworkDetails.images?.[displayedImageIndex]?.url || '';

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="lg:w-1/2 text-yankees-blue font-montserrat-light text-base text-justify">
        <p>{artworkDetails.description}</p>
      </div>

      <div className="lg:w-1/2 flex flex-col items-center">
        {artworkDetails.images && artworkDetails.images.length > 0 ? (
          <>
            <img
              src={currentImageUrl}
              alt={artworkDetails.title || "Artwork"}
              className="w-full h-auto max-w-lg object-contain mb-2"
            />

            {artworkDetails.images.length > 1 && (
              <div className="flex justify-between w-full max-w-lg mt-2">
                <button
                  onClick={goToPreviousImage}
                  className="bg-palatinate-purple text-white py-1 px-6 rounded-lg hover:bg-fuchsia-800 transition duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={goToNextImage}
                  className="bg-palatinate-purple text-white py-1 px-6 rounded-lg hover:bg-fuchsia-800 transition duration-300"
                >
                  Next
                </button>
              </div>
            )}

            {artworkDetails.images.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-lg overflow-x-auto">
                {artworkDetails.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover cursor-pointer rounded-md ${
                      index === displayedImageIndex ? "border-2 border-yankees-blue" : "border border-gray-300"
                    }`}
                    onClick={() => {
                      setDisplayedImageIndex(index);
                      if (onImageChange) {
                        onImageChange(index);
                      }
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg">
            No image available
          </div>
        )}

        <div className="flex gap-4 mt-6 font-montserrat-light">
          <button
            onClick={addToCartHandler}
            className="bg-madder-lake text-white py-2 px-8 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              click ? removeFromWishlistHandler(artworkDetails) : addToWishlistHandler(artworkDetails)
            }
            className={`py-2 px-6 rounded-lg transition duration-300 text-white ${
              click ? "bg-red-500 hover:bg-red-700" : "bg-fire-opal hover:bg-orange-500"
            }`}
          >
            {click ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArtworkProfile;