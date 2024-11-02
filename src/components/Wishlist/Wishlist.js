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

import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlistActions"; // Ensure path correctness
import { addToCart } from "../../redux/actions/cartActions"; // Ensure path correctness

const Wishlist = ({ setOpenWishlist }) => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  const handleAddToCart = (item) => {
    const itemWithQty = { ...item, qty: 1 }; // Ensure quantity is set to 1 for cart
    dispatch(addToCart(itemWithQty));
    setOpenWishlist(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-30 h-screen z-10 flex justify-end">
      <div className="w-[80%] 800px:w-[25%] bg-white flex flex-col h-full shadow-lg">
        {/* Empty Wishlist Message */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <RxCross1
              size={25}
              className="cursor-pointer absolute top-5 right-5"
              onClick={() => setOpenWishlist(false)}
            />
            <h5 className="text-xl font-medium">Your wishlist is empty!</h5>
          </div>
        ) : (
          <>
            {/* Wishlist Header */}
            <div className="flex justify-between items-center p-5 border-b">
              <AiOutlineHeart size={25} />
              <h5 className="text-lg font-semibold">{wishlist.length} items</h5>
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>

            {/* Wishlist Items */}
            <div className="p-4 overflow-y-auto">
              {wishlist.map((item, index) => (
                <WishlistItem
                  key={index}
                  item={item}
                  onRemove={() => handleRemoveFromWishlist(item.id)}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Individual Wishlist Item Component
const WishlistItem = ({ item, onRemove, onAddToCart }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <RxCross1
        size={20}
        className="cursor-pointer text-gray-600 mr-4"
        onClick={onRemove}
      />
      <img
        src={item.images[0]?.url || ""}
        alt={item.name}
        className="w-16 h-16 mr-4 rounded-md"
      />
      <div className="flex-1">
        <h1 className="text-sm font-semibold">{item.name}</h1>
        <h4 className="font-semibold text-lg text-red-500">
          SAR {item.discountPrice}
        </h4>
      </div>
      <BsCartPlus
        size={20}
        className="cursor-pointer text-gray-700"
        title="Add to cart"
        onClick={onAddToCart}
      />
    </div>
  );
};

export default Wishlist;
