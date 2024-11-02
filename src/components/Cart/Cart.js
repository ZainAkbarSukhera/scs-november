// import React from "react";
// import { RxCross1 } from "react-icons/rx";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../../redux/actions/cart";

// const Cart = ({ setOpenCart }) => {
//   const { cart } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const removeFromCartHandler = (data) => {
//     dispatch(removeFromCart(data));
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

//   return (
//     <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 h-screen z-10 flex justify-end">
//       <div className="w-[80%] 800px:w-[25%] bg-white flex flex-col h-full shadow-lg">
//         {cart && cart.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-full">
//             <RxCross1
//               size={25}
//               className="cursor-pointer absolute top-5 right-5"
//               onClick={() => setOpenCart(false)}
//             />
//             <h5 className="text-xl font-medium">Your cart is empty!</h5>
//           </div>
//         ) : (
//           <>
//             <div className="flex justify-between items-center p-5 border-b">
//               <IoBagHandleOutline size={25} />
//               <h5 className="text-lg font-semibold">
//                 {cart && cart.length} items
//               </h5>
//               <RxCross1
//                 size={25}
//                 className="cursor-pointer"
//                 onClick={() => setOpenCart(false)}
//               />
//             </div>

//             <div className="flex-grow overflow-y-auto p-4">
//               {cart.map((item, index) => (
//                 <CartSingle
//                   key={index}
//                   data={item}
//                   removeFromCartHandler={removeFromCartHandler}
//                 />
//               ))}
//             </div>

//             <div className="p-5 border-t">
//               <Link to="/checkout">
//                 <button className="w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700">
//                   Checkout Now (SAR {totalPrice})
//                 </button>
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartSingle = ({ data, removeFromCartHandler }) => {
//   const totalPrice = data.price * data.qty;

//   return (
//     <div className="flex items-center p-4 border-b">
//       <img
//         src={data.images[0].url}
//         alt={data.name}
//         className="w-16 h-16 mx-4 rounded-md"
//       />
//       <div className="flex-1">
//         <h1 className="text-sm font-semibold">{data.name}</h1>
//         <h4 className="text-gray-500 text-sm">SAR {data.price} x {data.qty}</h4>
//         <h4 className="font-semibold text-lg text-red-500">
//           SAR {totalPrice}
//         </h4>
//       </div>
//       <RxCross1
//         size={20}
//         className="cursor-pointer text-gray-600"
//         onClick={() => removeFromCartHandler(data)}
//       />
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import { RxCross1 } from "react-icons/rx";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../redux/actions/cart"; // Ensure your path is correct here

// const Cart = ({ setOpenCart }) => {
//   const cart = useSelector((state) => state.cart.items); // accessing cart items directly from state
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

//   return (
//     <div className="fixed top-0 left-0  w-full bg-black bg-opacity-50 h-screen z-10 flex justify-end">
//       <div className="w-[40%] 800px:w-[25%] bg-white flex flex-col h-full shadow-lg">
//         {/* Empty Cart State */}
//         {cart.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-full">
//             <RxCross1
//               size={25}
//               className="cursor-pointer absolute top-5 right-5"
//               onClick={() => setOpenCart(false)}
//             />
//             <h5 className="text-xl font-medium">Your cart is empty!</h5>
//           </div>
//         ) : (
//           <>
//             {/* Cart Header */}
//             <div className="flex justify-between items-center p-5 border-b">
//               <IoBagHandleOutline size={25} />
//               <h5 className="text-lg font-semibold">{cart.length} items</h5>
//               <RxCross1
//                 size={25}
//                 className="cursor-pointer"
//                 onClick={() => setOpenCart(false)}
//               />
//             </div>

//             {/* Cart Items */}
//             <div className="flex-grow overflow-y-auto p-4">
//               {cart.map((item, index) => (
//                 <CartItem
//                   key={index}
//                   item={item}
//                   onRemove={() => handleRemoveFromCart(item.id)}
//                 />
//               ))}
//             </div>

//             {/* Checkout Button */}
//             <div className="p-5 border-t">
//               <Link to="/checkout">
//                 <button className="w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700">
//                   Checkout Now (SAR {totalPrice.toFixed(2)})
//                 </button>
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // Individual Cart Item Component

// const CartItem = ({ item, onRemove }) => {
//   // Default totalPrice to 0 if item or price is undefined
//   const totalPrice = item?.price || 0; // Only get the price for total calculation

//   return (
//     <div className="flex items-center p-4 border-b">
//       {/* Ensure image URL is valid, and provide a fallback image if needed */}
//       <img
//         src={item?.images[0]?.url || "fallback-image-url.jpg"} // Replace with an actual fallback image URL
//         alt={item?.name || "Item"}
//         className="w-16 h-16 mx-4 rounded-md"
//       />
//       <div className="flex-1">
//         <h1 className="text-sm font-semibold">{item?.name || "Unknown Item"}</h1>
//         <h4 className="text-gray-500 text-sm">
//           SAR {totalPrice} {/* Displaying price without quantity */}
//         </h4>
//         <h4 className="font-semibold text-lg text-red-500">SAR {totalPrice.toFixed(2)}</h4>
//       </div>
//       <RxCross1
//         size={20}
//         className="cursor-pointer text-gray-600"
//         onClick={onRemove}
//       />
//     </div>
//   );
// };



// const CartItem = ({ item, onRemove }) => {
//   const totalPrice = item.price * item.qty;

//   return (
//     <div className="flex items-center p-4 border-b">
//       <img
//         src={item.images[0]?.url || ""}
//         alt={item.name}
//         className="w-16 h-16 mx-4 rounded-md"
//       />
//       <div className="flex-1">
//         <h1 className="text-sm font-semibold">{item.name}</h1>
//         <h4 className="text-gray-500 text-sm">SAR {item.price} x {item.qty}</h4>
//         <h4 className="font-semibold text-lg text-red-500">SAR {totalPrice.toFixed(2)}</h4>
//       </div>
//       <RxCross1
//         size={20}
//         className="cursor-pointer text-gray-600"
//         onClick={onRemove}
//       />
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cart"; 

const Cart = ({ setOpenCart }) => {
  const cart = useSelector((state) => state.cart.items); // accessing cart items directly from state
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.qty || 1) * item.price, 0);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-500 bg-opacity-50 h-screen z-10 flex justify-end">
      <div className="w-[40%] 800px:w-[25%] bg-white flex flex-col h-full shadow-lg">
        {/* Empty Cart State */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <RxCross1
              size={25}
              className="cursor-pointer absolute top-5 right-5"
              onClick={() => setOpenCart(false)}
            />
            <h5 className="text-xl font-montserrat-light text-yankees-blue">Your cart is empty!</h5>
          </div>
        ) : (
          <>
            {/* Cart Header */}
            <div className="flex justify-between items-center p-5 border-b">
              <IoBagHandleOutline size={25} />
              <h5 className="text-lg font-montserrat-light text-yankees-blue">{cart.length} items</h5>
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-4">
              {cart.map((item, index) => (
                <CartItem
                  key={item.id} // Use item.id for better uniqueness
                  item={item}
                  onRemove={() => handleRemoveFromCart(item.id)}
                />
              ))}
            </div>

            {/* Checkout Button */}
            <div className="p-5 border-t">
              <Link to="/checkout">
                <button className="w-full py-3 bg-madder-lake text-white text-lg font-montserrat-light rounded-md hover:bg-red-600">
                  Checkout Now (SAR {totalPrice.toFixed(2)})
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Individual Cart Item Component
const CartItem = ({ item, onRemove }) => {
  const totalPrice = (item.qty || 1) * item.price; // Calculate total price based on quantity

  return (
    <div className="flex items-center p-4 border-b">
      <img
      src={item.image}
        // src={item.images?.length > 0 ? item.images[0].url : "fallback-image-url.jpg"} // Ensure fallback image is used if no images are available
        alt={item.name || "Item Image"}
        className="w-16 h-16 mx-4 rounded-md"
      />
      <div className="flex-1">
        <h1 className="text-sm font-montserrat-regular text-yankees-blue">{item.artName || "Unknown Item"}</h1>
        <h4 className="text-yankees-blue text-regular">
          SAR {item.price} {/* Displaying price */}
        </h4>
        {/* <h4 className="font-montserrat-light text-sm text-madder-lake">SAR {totalPrice}</h4> */}
      </div>
      <RxCross1
        size={20}
        className="cursor-pointer text-yankees-blue"
        onClick={onRemove}
      />
    </div>
  );
};

export default Cart;
