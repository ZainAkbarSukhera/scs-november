// import React, { useState, useEffect } from "react";
// import { Country, State } from "country-state-city";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// // import { server } from "../../server";
// import { toast } from "react-toastify";

// const Checkout = () => {
//   const { user } = useSelector((state) => state.user);
//   const { cart } = useSelector((state) => state.cart);
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [userInfo, setUserInfo] = useState(false);
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [zipCode, setZipCode] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const paymentSubmit = () => {
//     if (
//       address1 === "" ||
//       address2 === "" ||
//       zipCode === null ||
//       country === "" ||
//       city === ""
//     ) {
//       toast.error("Please Enter your Delivery Address!");
//     } else {
//       const shippingAddress = {
//         address1,
//         address2,
//         zipCode,
//         country,
//         city,
//       };

//       const orderData = {
//         cart,
//         totalPrice,
//         subTotalPrice,
//         shipping,
//         commissionFee,
//         shippingAddress,
//         user,
//       };

//       // Update local storage with the updated orders array
//       localStorage.setItem("latestOrder", JSON.stringify(orderData));
//       navigate("/payment");
//     }
//   };

//   const subTotalPrice = cart.reduce(
//     (acc, item) => acc + item.qty * item.price,
//     0
//   );

//   // This is the shipping cost variable
//   const shipping = subTotalPrice * 0.1;

//   // Commission fee (fees charged by the platform for each transaction)
//   const commissionFee = (subTotalPrice + shipping) * 0.05; // Assuming a 5% commission fee

//   const totalPrice = (subTotalPrice + shipping + commissionFee).toFixed(2);

//   return (
//     <div className="w-full flex flex-col items-center py-8">
//       <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
//         <div className="w-full 800px:w-[65%]">
//           <ShippingInfo
//             user={user}
//             country={country}
//             setCountry={setCountry}
//             city={city}
//             setCity={setCity}
//             userInfo={userInfo}
//             setUserInfo={setUserInfo}
//             address1={address1}
//             setAddress1={setAddress1}
//             address2={address2}
//             setAddress2={setAddress2}
//             zipCode={zipCode}
//             setZipCode={setZipCode}
//           />
//         </div>
//         <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
//           <CartData
//             totalPrice={totalPrice}
//             shipping={shipping}
//             subTotalPrice={subTotalPrice}
//             commissionFee={commissionFee}
//           />
//         </div>
//       </div>
//       <div
//         className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer w-[150px] 800px:w-[280px] mt-10`}
//         onClick={paymentSubmit}
//       >
//         <h5 className="text-white">Go to Payment</h5>
//       </div>
//     </div>
//   );
// };

// const ShippingInfo = ({
//   user,
//   country,
//   setCountry,
//   city,
//   setCity,
//   userInfo,
//   setUserInfo,
//   address1,
//   setAddress1,
//   address2,
//   setAddress2,
//   zipCode,
//   setZipCode,
// }) => {
//   return (
//     <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
//       <h5 className="text-[18px] font-[500]">Shipping Address</h5>
//       <br />
//       <form>
//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Full Name</label>
//             <input
//               type="text"
//               value={user && user.name}
//               required
//               className={`w-full border p-1 rounded-[5px] !w-[95%]`}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">Email Address</label>
//             <input
//               type="email"
//               value={user && user.email}
//               required
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>

//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Phone Number</label>
//             <input
//               type="number"
//               required
//               value={user && user.phoneNumber}
//               className={`w-full border p-1 rounded-[5px] !w-[95%]`}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">Zip Code</label>
//             <input
//               type="number"
//               value={zipCode}
//               onChange={(e) => setZipCode(e.target.value)}
//               required
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>

//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Country</label>
//             <select
//               className="w-[95%] border h-[40px] rounded-[5px]"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             >
//               <option className="block pb-2" value="">
//                 Choose your country
//               </option>
//               {Country &&
//                 Country.getAllCountries().map((item) => (
//                   <option key={item.isoCode} value={item.isoCode}>
//                     {item.name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">City</label>
//             <input
//               type="text"
//               required
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>

//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Address1</label>
//             <input
//               type="text"
//               required
//               value={address1}
//               onChange={(e) => setAddress1(e.target.value)}
//               className={`w-full border p-1 rounded-[5px] !w-[95%]`}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">Address2</label>
//             <input
//               type="text"
//               value={address2}
//               onChange={(e) => setAddress2(e.target.value)}
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// const CartData = ({ totalPrice, shipping, subTotalPrice, commissionFee }) => {
//   return (
//     <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
//       <div className="flex justify-between">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">Subtotal:</h3>
//         <h5 className="text-[18px] font-[600]">
//           SAR {subTotalPrice.toFixed(2)}
//         </h5>
//       </div>
//       <br />
//       <div className="flex justify-between">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">Shipping:</h3>
//         <h5 className="text-[18px] font-[600]">SAR {shipping.toFixed(2)}</h5>
//       </div>
//       <br />
//       <div className="flex justify-between border-b pb-3">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">
//           Commission Fee:
//         </h3>
//         <h5 className="text-[18px] font-[600]">
//           SAR {commissionFee.toFixed(2)}
//         </h5>
//       </div>
//       <h5 className="text-[18px] font-[600] text-end pt-3">SAR {totalPrice}</h5>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { Country } from "country-state-city";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { createOrder } from "../redux/actions/payment"; // Import your order action

// const Checkout = () => {
//   const { user } = useSelector((state) => state.user);
//   const { cart } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
  
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const subTotalPrice = cart.reduce(
//     (acc, item) => acc + item.qty * item.discountPrice,
//     0
//   );

//   const shipping = subTotalPrice * 0.1;
//   const commissionFee = (subTotalPrice + shipping) * 0.05;
//   const totalPrice = (subTotalPrice + shipping + commissionFee).toFixed(2);

//   const paymentSubmit = () => {
//     if (
//       address1 === "" ||
//       address2 === "" ||
//       zipCode === "" ||
//       country === "" ||
//       city === ""
//     ) {
//       toast.error("Please choose your delivery address!");
//     } else {
//       const shippingAddress = {
//         address1,
//         address2,
//         zipCode,
//         country,
//         city,
//       };

//       const orderData = {
//         cart,
//         totalPrice,
//         subTotalPrice,
//         shipping,
//         commissionFee,
//         shippingAddress,
//         user,
//       };

//       // Dispatch the create order action
//       dispatch(createOrder(orderData));
//       navigate("/payment");
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center py-8">
//       <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
//         <div className="w-full 800px:w-[65%]">
//           <ShippingInfo
//             user={user}
//             country={country}
//             setCountry={setCountry}
//             city={city}
//             setCity={setCity}
//             address1={address1}
//             setAddress1={setAddress1}
//             address2={address2}
//             setAddress2={setAddress2}
//             zipCode={zipCode}
//             setZipCode={setZipCode}
//           />
//         </div>
//         <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
//           <CartData
//             totalPrice={totalPrice}
//             shipping={shipping}
//             subTotalPrice={subTotalPrice}
//             commissionFee={commissionFee}
//           />
//         </div>
//       </div>
//       <div
//         className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer w-[150px] 800px:w-[280px] mt-10`}
//         onClick={paymentSubmit}
//       >
//         <h5 className="text-white">Go to Payment</h5>
//       </div>
//     </div>
//   );
// };


// const ShippingInfo = ({
//   user,
//   country,
//   setCountry,
//   city,
//   setCity,
//   userInfo,
//   setUserInfo,
//   address1,
//   setAddress1,
//   address2,
//   setAddress2,
//   zipCode,
//   setZipCode,
// }) => {
//   return (
//     <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
//       <h5 className="text-[18px] font-[500]">Shipping Address</h5>
//       <br />
//       <form>
//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Full Name</label>
//             <input
//               type="text"
//               value={user && user.name}
//               required
//               className={`w-full border p-1 rounded-[5px] !w-[95%]`}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">Email Address</label>
//             <input
//               type="email"
//               value={user && user.email}
//               required
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>

//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Phone Number</label>
//             <input
//               type="number"
//               required
//               value={user && user.phoneNumber}
//               className={`w-full border p-1 rounded-[5px] !w-[95%]`}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">Zip Code</label>
//             <input
//               type="number"
//               value={zipCode}
//               onChange={(e) => setZipCode(e.target.value)}
//               required
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>

//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Country</label>
//             <select
//               className="w-[95%] border h-[40px] rounded-[5px]"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             >
//               <option className="block pb-2" value="">
//                 Choose your country
//               </option>
//               {Country &&
//                 Country.getAllCountries().map((item) => (
//                   <option key={item.isoCode} value={item.isoCode}>
//                     {item.name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">City</label>
//             <input
//               type="text"
//               required
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>

//         <div className="w-full flex pb-3">
//           <div className="w-[50%]">
//             <label className="block pb-2">Address1</label>
//             <input
//               type="text"
//               required
//               value={address1}
//               onChange={(e) => setAddress1(e.target.value)}
//               className={`w-full border p-1 rounded-[5px] !w-[95%]`}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="block pb-2">Address2</label>
//             <input
//               type="text"
//               value={address2}
//               onChange={(e) => setAddress2(e.target.value)}
//               className={`w-full border p-1 rounded-[5px]`}
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// const CartData = ({ totalPrice, shipping, subTotalPrice, commissionFee }) => {
//   return (
//     <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
//       <div className="flex justify-between">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">Subtotal:</h3>
//         <h5 className="text-[18px] font-[600]">
//           SAR {subTotalPrice.toFixed(2)}
//         </h5>
//       </div>
//       <br />
//       <div className="flex justify-between">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">Shipping:</h3>
//         <h5 className="text-[18px] font-[600]">SAR {shipping.toFixed(2)}</h5>
//       </div>
//       <br />
//       <div className="flex justify-between border-b pb-3">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">
//           Commission Fee:
//         </h3>
//         <h5 className="text-[18px] font-[600]">
//           SAR {commissionFee.toFixed(2)}
//         </h5>
//       </div>
//       <h5 className="text-[18px] font-[600] text-end pt-3">SAR {totalPrice}</h5>
//     </div>
//   );
// };

// export default Checkout;

////////////////////////////////////////////////////////////////////////////////////Working piece of code

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Checkout = () => {
//   const cart = useSelector((state) => state.cart.items) || []; // Get cart items from Redux store, default to an empty array
//   const [shippingInfo, setShippingInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   // Calculate total prices
//   const totalPrice = cart.reduce((acc, item) => acc + (item.qty || 1) * item.price, 0);
//   const shipping = 20; // Example shipping fee
//   const commissionFee = 5; // Example commission fee
//   const finalTotal = totalPrice + shipping + commissionFee;

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle checkout process
//   const handleCheckout = () => {
//     const { name, email, phone, address } = shippingInfo;
//     if (!name || !email || !phone || !address) {
//       toast.error("Please fill in all shipping information.");
//       return;
//     }
//     // Proceed to payment or any other logic
//     toast.success("Checkout successful!"); // Placeholder for success message
//   };

//   return (
//     <div className="checkout-container mx-auto p-4 max-w-md">
//       <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
//       <div className="shipping-info mb-6">
//         <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           className="border p-2 w-full mb-2"
//           onChange={handleInputChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="border p-2 w-full mb-2"
//           onChange={handleInputChange}
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           className="border p-2 w-full mb-2"
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Shipping Address"
//           className="border p-2 w-full mb-2"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="order-summary mb-6">
//         <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
//         <p>Total Price: SAR {totalPrice.toFixed(2)}</p>
//         <p>Shipping: SAR {shipping.toFixed(2)}</p>
//         <p>Commission Fee: SAR {commissionFee.toFixed(2)}</p>
//         <h3 className="text-lg font-semibold mt-2">
//           Final Total: SAR {finalTotal.toFixed(2)}
//         </h3>
//       </div>
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-4"
//         onClick={handleCheckout}
//       >
//         Proceed to Payment
//       </button>
//       <Link to="/" className="text-blue-500 hover:underline">
//         Go Back
//       </Link>
//     </div>
//   );
// };

// export default Checkout;


///////////////////////////////////////////////////////////////////////////////////////////My styling for checkout

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { removeFromCart } from "../redux/actions/cart"; // Import removeFromCart if needed

const Checkout = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux state
  const totalPrice = cart.reduce((acc, item) => acc + (item.qty || 1) * item.price, 0); // Calculate total price

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch action to remove item from cart
  };

  return (
    <div className="flex justify-center items-start w-full min-h-screen p-4">
      <div className="flex max-lg:flex-col gap-12  w-full max-w-6xl">
        <div className="bg-madder-lake bg-opacity-80 h-auto sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px] rounded-md">
          <div className="relative h-full w-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <h5 className="text-xl font-montserrat-light text-white">Your cart is empty!</h5>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-100 rounded-md">
                        <img src={item.image} alt={item.artName || "Item Image"} className="w-full object-cover" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-white">{item.artName || "Unknown Item"}</h3>
                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                          <li className="flex flex-wrap gap-4">Size <span className="ml-auto">{item.size || "N/A"}</span></li>
                          <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">{item.qty || 1}</span></li>
                          <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">SAR {((item.qty || 1) * item.price).toFixed(2)}</span></li>
                        </ul>
                      </div>
                      <button onClick={() => handleRemoveFromCart(item.id)} className="text-gray-400 hover:text-gray-700">
                        <RxCross1 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">Total <span className="ml-auto">SAR {totalPrice.toFixed(2)}</span></h4>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full h-max rounded-md px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Complete your order</h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>

                <div>
                  <input type="text" placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>

                <div>
                  <input type="email" placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>

                <div>
                  <input type="number" placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Address"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
                <div>
                  <input type="text" placeholder="City"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
                <div>
                  <input type="text" placeholder="Country"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
                <div>
                  <input type="text" placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Proceed to Payment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;