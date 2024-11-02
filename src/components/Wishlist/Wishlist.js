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
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/actions/wishlist";
import { addToCart } from "../redux/actions/cart";
import { toast } from "react-toastify"; // Import toast

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
    // toast.success(`${data.artName} removed from wishlist!`); // Display success toast
  };

  const addToCartHandler = async (data) => {
    const newData = { ...data };
    const result = await dispatch(addToCart(newData));

    if (result?.error) {
      toast.error(result.error); // Notify user if item already exists in cart
    } else {
      setOpenWishlist(false); // Close wishlist on successful addition
      toast.success(`${data.artName} added to cart!`); // Display success toast
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-500 h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[40%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <h5 className="font-montserrat-light text-yankees-blue">
              Wishlist is empty!
            </h5>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-5 border-b">
            <AiOutlineHeart size={25} />
              <h5 className="text-lg font-montserrat-light">{wishlist.length} items</h5>
            </div>

            <div className="w-full border-t">
              {wishlist.map((item, index) => (
                <CartSingle
                  key={index}
                  data={item}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
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
  const totalPrice = data.price;

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <RxCross1
          className="cursor-pointer mb-2 ml-2"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={data.image}
          alt="Artwork"
          className="w-[130px] h-auto ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px] flex-grow">
          <h1>{data.artName}</h1>
          <h4 className="font-[600] pt-3 text-[17px] text-[#d02222] font-Roboto">
            SAR {totalPrice}
          </h4>
        </div>
        <BsCartPlus
          size={20}
          className="cursor-pointer"
          title="Add to cart"
          onClick={() => addToCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Wishlist;