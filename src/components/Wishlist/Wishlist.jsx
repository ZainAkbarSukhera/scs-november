// import React from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsCartPlus } from "react-icons/bs";

// import { AiOutlineHeart } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromWishlist } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";

// const Wishlist = ({ setOpenWishlist }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();
//
//   const removeFromWishlistHandler = (data) => {
//     dispatch(removeFromWishlist(data));
//   };

//   const addToCartHandler = (data) => {
//     const newData = { ...data, qty: 1 };
//     dispatch(addTocart(newData));
//     setOpenWishlist(false);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-black bg-opacity-30 h-screen z-10">
//       <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col shadow-lg overflow-y-auto">
//         {wishlist && wishlist.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-full">
//             <RxCross1
//               size={25}
//               className="cursor-pointer absolute top-5 right-5"
//               onClick={() => setOpenWishlist(false)}
//             />
//             <h5 className="text-xl font-medium">Your wishlist is empty!</h5>
//           </div>
//         ) : (
//           <>
//             <div className="flex justify-between items-center p-5 border-b">
//               <AiOutlineHeart size={25} />
//               <h5 className="text-lg font-semibold">
//                 {wishlist && wishlist.length} items
//               </h5>
//               <RxCross1
//                 size={25}
//                 className="cursor-pointer"
//                 onClick={() => setOpenWishlist(false)}
//               />
//             </div>

//             <div className="p-4">
//               {wishlist &&
//                 wishlist.map((item, index) => (
//                   <WishlistItem
//                     key={index}
//                     data={item}
//                     removeFromWishlistHandler={removeFromWishlistHandler}
//                     addToCartHandler={addToCartHandler}
//                   />
//                 ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const WishlistItem = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
//   return (
//     <div className="flex items-center p-4 border-b">
//       <RxCross1
//         size={20}
//         className="cursor-pointer text-gray-600 mr-4"
//         onClick={() => removeFromWishlistHandler(data)}
//       />
//       <img
//         src={data?.images[0]?.url}
//         alt={data.name}
//         className="w-16 h-16 mr-4 rounded-md"
//       />
//       <div className="flex-1">
//         <h1 className="text-sm font-semibold">{data.name}</h1>
//         <h4 className="font-semibold text-lg text-red-500">
//           SAR ${data.discountPrice}
//         </h4>
//       </div>
//       <BsCartPlus
//         size={20}
//         className="cursor-pointer text-gray-700"
//         title="Add to cart"
//         onClick={() => addToCartHandler(data)}
//       />
//     </div>
//   );
// };

// export default Wishlist;

////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsCartPlus } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromWishlist } from "../redux/actions/wishlist";
// import { addToCart } from "../redux/actions/cart";

// const Wishlist = ({ setOpenWishlist }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();

//   const removeFromWishlistHandler = (data) => {
//     dispatch(removeFromWishlist(data));
//   };

//   const addToCartHandler = (data) => {
//     const newData = { ...data };
//     dispatch(addToCart(newData));
//     setOpenWishlist(false);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-gray-500 h-screen z-10">
//       <div className="fixed top-0 right-0 h-full w-[40%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col shadow-sm">
//         <div className="flex w-full justify-end pt-5 pr-5">
//           <RxCross1
//             size={25}
//             className="cursor-pointer"
//             onClick={() => setOpenWishlist(false)}
//           />
//         </div>
//         {wishlist && wishlist.length === 0 ? (
//           <div className="w-full h-screen flex items-center justify-center">
//             <h5 className="font-montserrat-light text-yankees-blue">
//               Wishlist is empty!
//             </h5>
//           </div>
//         ) : (
//           <>
//             <div className="flex items-center p-4">
//               <AiOutlineHeart size={25} />
//               <h5 className="pl-2 text-[20px] font-[500]">
//                 {wishlist.length} items
//               </h5>
//             </div>

//             <div className="w-full border-t">
//               {wishlist.map((item, index) => (
//                 <CartSingle
//                   key={index}
//                   data={item}
//                   removeFromWishlistHandler={removeFromWishlistHandler}
//                   addToCartHandler={addToCartHandler}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
//   const [value, setValue] = useState(1);
//   const totalPrice = data.price;

//   return (
//     <div className="border-b p-4">
//       <div className="w-full 800px:flex items-center">
//         <RxCross1
//           className="cursor-pointer mb-2 ml-2"
//           onClick={() => removeFromWishlistHandler(data)}
//         />
//         <img
//           src={data?.images[0]?.url || ""}
//           alt="Artwork"
//           className="w-[130px] h-auto ml-2 mr-2 rounded-[5px]"
//         />

//         <div className="pl-[5px] flex-grow">
//           <h1>{data.artName}</h1>
//           <h4 className="font-[600] pt-3 text-[17px] text-[#d02222] font-Roboto">
//             SAR {totalPrice}
//           </h4>
//         </div>
//         <BsCartPlus
//           size={20}
//           className="cursor-pointer"
//           title="Add to cart"
//           onClick={() => addToCartHandler(data)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

///////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsCartPlus } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromWishlist } from "../redux/actions/wishlist";
// import { addToCart } from "../redux/actions/cart";
// import { toast } from "react-toastify"; // Import toast

// const Wishlist = ({ setOpenWishlist }) => { 
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();

//   const removeFromWishlistHandler = (data) => {
//     dispatch(removeFromWishlist(data));
//     // toast.success(`${data.artName} removed from wishlist!`); // Display success toast
//   };

//   const addToCartHandler = async (data) => {
//     const newData = { ...data };
//     const result = await dispatch(addToCart(newData));

//     if (result?.error) {
//       toast.error(result.error); // Notify user if item already exists in cart
//     } else {
//       setOpenWishlist(false); // Close wishlist on successful addition
//       toast.success(`${data.artName} added to cart!`); // Display success toast
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-gray-500 h-screen z-10">
//       <div className="fixed top-0 right-0 h-full w-[40%] overflow-y-scroll bg-white flex flex-col shadow-sm xs:w-full xs:p-2 xs:top-[10%] xs:right-[5%] xs:h-[80%] xs:rounded-lg">
//         <div className="flex w-full justify-end pt-5 pr-5 xs:pr-2">
//           <RxCross1
//             size={25}
//             className="cursor-pointer xs:w-6 xs:h-6"
//             onClick={() => setOpenWishlist(false)}
//           />
//         </div>
//         {wishlist && wishlist.length === 0 ? (
//           <div className="w-full h-full flex items-center justify-center">
//             <h5 className="font-montserrat-light text-yankees-blue text-center text-sm xs:text-xs">
//               Wishlist is empty!
//             </h5>
//           </div>
//         ) : (
//           <>
//             <div className="flex justify-between items-center p-5 border-b xs:p-3 xs:text-sm">
//               <AiOutlineHeart size={25} className="xs:w-5 xs:h-5" />
//               <h5 className="text-lg font-montserrat-light xs:text-base">{wishlist.length} items</h5>
//             </div>

//             <div className="w-full border-t">
//               {wishlist.map((item, index) => (
//                 <CartSingle
//                   key={index}
//                   data={item}
//                   removeFromWishlistHandler={removeFromWishlistHandler}
//                   addToCartHandler={addToCartHandler}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
//   const totalPrice = data.price;

//   return (
//     <div className="border-b p-4 xs:p-2">
//       <div className="w-full flex items-center xs:flex-col xs:items-start">
//         <RxCross1
//           className="cursor-pointer mb-2 ml-2 xs:mb-1 xs:ml-0"
//           onClick={() => removeFromWishlistHandler(data)}
//         />
//         <img
//           src={data.image}
//           alt="Artwork"
//           className="w-[130px] h-auto ml-2 mr-2 rounded-[5px] xs:w-20 xs:ml-0 xs:mr-0"
//         />
//         <div className="pl-2 flex-grow xs:pl-0 xs:mt-2">
//           <h1 className="text-base xs:text-sm">{data.artName}</h1>
//           <h4 className="font-semibold pt-2 text-[17px] text-[#d02222] font-Roboto xs:text-[15px]">
//             SAR {totalPrice}
//           </h4>
//         </div>
//         <BsCartPlus
//           size={20}
//           className="cursor-pointer xs:w-5 xs:h-5"
//           title="Add to cart"
//           onClick={() => addToCartHandler(data)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

// import React from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsCartPlus } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromWishlist } from "../redux/actions/wishlist";
// import { addToCart } from "../redux/actions/cart";
// import { toast } from "react-toastify";

// const Wishlist = ({ setOpenWishlist }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();
//   const { cart } = useSelector((state) => state.cart); // Get cart state here for addToCartHandler

//   const removeFromWishlistHandler = (data) => {
//     dispatch(removeFromWishlist(data));
//     toast.success(`${data.title || 'Item'} removed from wishlist!`);
//   };

//   const addToCartHandler = async (data, currentCart) => { // currentCart received as argument
//     const isItemInCart = currentCart.some(item => item._id === data._id);

//     if (isItemInCart) {
//       toast.error(`${data.title || 'Item'} is already in your cart!`);
//       return;
//     }

//     const result = await dispatch(addToCart(data));

//     if (result && result.error) {
//       toast.error(result.error);
//     } else {
//       setOpenWishlist(false);
//       toast.success(`${data.title || 'Item'} added to cart!`);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-gray-500 bg-opacity-50 h-screen z-10">
//       <div className="fixed top-0 right-0 h-full w-[40%] overflow-y-scroll bg-white flex flex-col shadow-sm xs:w-full xs:p-2 xs:top-[10%] xs:right-[5%] xs:h-[80%] xs:rounded-lg">
//         <div className="flex w-full justify-end pt-5 pr-5 xs:pr-2">
//           <RxCross1
//             size={25}
//             className="cursor-pointer xs:w-6 xs:h-6"
//             onClick={() => setOpenWishlist(false)}
//           />
//         </div>
//         {wishlist && wishlist.length === 0 ? (
//           <div className="w-full h-full flex items-center justify-center">
//             <h5 className="font-montserrat-light text-yankees-blue text-center text-sm xs:text-xs">
//               Wishlist is empty!
//             </h5>
//           </div>
//         ) : (
//           <>
//             <div className="flex justify-between items-center p-5 border-b xs:p-3 xs:text-sm">
//               <AiOutlineHeart size={25} className="xs:w-5 xs:h-5" />
//               <h5 className="text-lg font-montserrat-light xs:text-base">{wishlist.length} items</h5>
//             </div>

//             <div className="w-full border-t">
//               {wishlist.map((item, index) => (
//                 <CartSingle
//                   key={item._id || index}
//                   data={item}
//                   removeFromWishlistHandler={removeFromWishlistHandler}
//                   // Pass the cart state to the handler
//                   addToCartHandler={(itemData) => addToCartHandler(itemData, cart)}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
//   // --- MODIFIED: Use the stored wishlistDisplayImageIndex if available, otherwise default to 0 ---
//   const imageIndexToDisplay = typeof data.wishlistDisplayImageIndex === 'number'
//                               ? data.wishlistDisplayImageIndex
//                               : 0;

//   // Now, use this index to get the image URL from the artwork's images array
//   const imageUrl = data.images?.[imageIndexToDisplay]?.url || '';
//   const artworkTitle = data.title || 'Untitled Artwork';
//   const artworkPrice = data.price || 'N/A';

//   return (
//     <div className="border-b p-4 xs:p-2">
//       <div className="w-full flex items-center xs:flex-col xs:items-start">
//         <RxCross1
//           className="cursor-pointer mb-2 ml-2 xs:mb-1 xs:ml-0"
//           onClick={() => removeFromWishlistHandler(data)}
//         />
//         <img
//           src={imageUrl}
//           alt={artworkTitle}
//           className="w-[130px] h-auto ml-2 mr-2 rounded-[5px] xs:w-20 xs:ml-0 xs:mr-0"
//         />
//         <div className="pl-2 flex-grow xs:pl-0 xs:mt-2">
//           <h1 className="text-base xs:text-sm">{artworkTitle}</h1>
//           <h4 className="font-semibold pt-2 text-[17px] text-[#d02222] font-Roboto xs:text-[15px]">
//             SAR {artworkPrice}
//           </h4>
//         </div>
//         <BsCartPlus
//           size={20}
//           className="cursor-pointer xs:w-5 xs:h-5"
//           title="Add to cart"
//           onClick={() => addToCartHandler(data)} // Pass data to the handler
//         />
//       </div>
//     </div>
//   );
// };

// export default Wishlist;



import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/actions/wishlist";
import { addToCart } from "../redux/actions/cart";
import { toast } from "react-toastify";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
    toast.success(`${data.title || 'Item'} removed from wishlist!`);
  };

  const addToCartHandler = async (data, currentCart) => {
    const isItemInCart = currentCart.some(item => item._id === data._id);

    if (isItemInCart) {
      toast.error(`${data.title || 'Item'} is already in your cart!`);
      return;
    }

    const result = await dispatch(addToCart(data));

    if (result && result.error) {
      toast.error(result.error);
    } else {
      setOpenWishlist(false);
      toast.success(`${data.title || 'Item'} added to cart!`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-500 bg-opacity-50 h-screen z-40 flex justify-end">
      <div className="fixed top-0 right-0 h-full w-[40%] overflow-y-scroll bg-white flex flex-col shadow-sm
                  sm:w-[40%] xs:w-full">
        <div className="flex w-full justify-end pt-5 pr-5 xs:pr-2">
          <RxCross1
            size={25}
            className="cursor-pointer xs:w-6 xs:h-6 text-gray-700 hover:text-gray-900 transition-colors" // Added hover effect
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <h5 className="font-montserrat-light text-yankees-blue text-center text-sm xs:text-xs">
              Wishlist is empty!
            </h5>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-5 border-b border-gray-200 xs:p-3"> {/* Added border-gray-200 */}
              <div className="flex items-center gap-2"> {/* Group icon and text */}
                 <AiOutlineHeart size={24} className="text-pink-500" /> {/* Adjusted size and color for professional look */}
                 <h5 className="text-lg font-montserrat-medium text-gray-800 xs:text-base">{wishlist.length} items</h5> {/* Adjusted font and color */}
              </div>
            </div>

            <div className="w-full"> {/* Removed border-t as it's not needed here */}
              {wishlist.map((item, index) => (
                <CartSingle
                  key={item._id || index}
                  data={item}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={(itemData) => addToCartHandler(itemData, cart)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const imageIndexToDisplay = typeof data.wishlistDisplayImageIndex === 'number'
                              ? data.wishlistDisplayImageIndex
                              : 0;

  const imageUrl = data.images?.[imageIndexToDisplay]?.url || '';
  const artworkTitle = data.title || 'Untitled Artwork';
  const artworkPrice = data.price || 'N/A';

  return (
    <div className="border-b border-gray-200 p-4 xs:p-3"> {/* Added border-gray-200, adjusted padding */}
      <div className="w-full flex items-center justify-between gap-4"> {/* Used justify-between to push cart button to right */}
        {/* Left section: Cross, Image, Text */}
        <div className="flex items-center gap-3"> {/* Use gap for spacing between these elements */}
          <RxCross1
            className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors flex-shrink-0" // More professional colors
            size={20} // Smaller size for balance
            onClick={() => removeFromWishlistHandler(data)}
          />
          <img
            src={imageUrl}
            alt={artworkTitle}
            className="w-24 h-24 object-cover rounded-md flex-shrink-0" // Fixed size, object-cover, more rounded corners
          />
          <div className="flex flex-col"> {/* Use flex-col for title and price */}
            <h1 className="text-base font-medium text-gray-800 line-clamp-2"> {/* Adjusted font, color, line-clamp for long titles */}
              {artworkTitle}
            </h1>
            <h4 className="font-semibold text-lg text-madder-lake mt-1"> {/* Adjusted font, color, size */}
              SAR {artworkPrice}
            </h4>
          </div>
        </div>

        {/* Right section: Cart Button */}
        <BsCartPlus
          size={24} // Slightly larger for better visibility
          className="cursor-pointer text-yankees-blue hover:text-blue-800 transition-colors flex-shrink-0" // Professional color, hover
          title="Add to cart"
          onClick={() => addToCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Wishlist;