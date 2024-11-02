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


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cart"; 
import { toast } from "react-toastify";

const MainArtworkProfile = ({ artworkDetails }) => {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = async (id) => {
    // Dispatch addToCart and await the result
    const result = await dispatch(addToCart({ ...artworkDetails, id }));

    if (result?.error) {
        toast.error(result.error); // Show error toast if item already exists
    } else {
        toast.success("Item added to cart successfully!"); // Show success toast
    }
};


  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {/* Left Column: Text */}
      <div className="lg:w-1/2 text-yankees-blue font-montserrat-light text-base text-justify">
        <p>{artworkDetails.artworkDescription}</p>
      </div>

      {/* Right Column: Image and Buttons */}
      <div className="lg:w-1/2 flex flex-col items-center">
        <img
          src={artworkDetails.image}
          alt="Artwork"
          className="w-full h-auto max-w-lg object-contain mb-2"
        />

        {/* Centered Buttons Section */}
        <div className="flex gap-4 mt-4 font-montserrat-light">
          <button
            onClick={() => addToCartHandler(artworkDetails.id)}
            className="bg-madder-lake text-white py-2 px-8 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Add to Cart
          </button>
          <button className="bg-fire-opal text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArtworkProfile;
