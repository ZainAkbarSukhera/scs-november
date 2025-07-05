// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";
// import { RxCross1 } from "react-icons/rx";
//
// const Payment = () => {
//   const [orderData, setOrderData] = useState([]);
//   const [open, setOpen] = useState(false);
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     const orderData = JSON.parse(localStorage.getItem("latestOrder"));
//     setOrderData(orderData);
//   }, []);

//   const createOrder = (data, actions) => {
//     return actions.order
//       .create({
//         purchase_units: [
//           {
//             description: "Sunflower",
//             amount: {
//               currency_code: "USD",
//               value: orderData?.totalPrice,
//             },
//           },
//         ],
//         application_context: {
//           shipping_preference: "NO_SHIPPING",
//         },
//       })
//       .then((orderID) => {
//         return orderID;
//       });
//   };

//   const order = {
//     cart: orderData?.cart,
//     shippingAddress: orderData?.shippingAddress,
//     user: user && user,
//     totalPrice: orderData?.totalPrice,
//   };

//   const onApprove = async (data, actions) => {
//     return actions.order.capture().then(function (details) {
//       const { payer } = details;
//       let paymentInfo = payer;

//       if (paymentInfo !== undefined) {
//         paypalPaymentHandler(paymentInfo);
//       }
//     });
//   };

//   const paypalPaymentHandler = async (paymentInfo) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     order.paymentInfo = {
//       id: paymentInfo.payer_id,
//       status: "succeeded",
//       type: "Paypal",
//     };

//     await axios
//       .post(`${server}/order/create-order`, order, config)
//       .then((res) => {
//         setOpen(false);
//         navigate("/order/success");
//         toast.success("Order successful!");
//         localStorage.setItem("cartItems", JSON.stringify([]));
//         localStorage.setItem("latestOrder", JSON.stringify([]));
//         window.location.reload();
//       });
//   };

//   const paymentData = {
//     amount: Math.round(orderData?.totalPrice * 100),
//   };

//   const paymentHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const { data } = await axios.post(
//         `${server}/payment/process`,
//         paymentData,
//         config
//       );

//       const client_secret = data.client_secret;

//       if (!stripe || !elements) return;
//       const result = await stripe.confirmCardPayment(client_secret, {
//         payment_method: {
//           card: elements.getElement(CardNumberElement),
//         },
//       });

//       if (result.error) {
//         toast.error(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {
//           order.paymentInfo = {
//             id: result.paymentIntent.id,
//             status: result.paymentIntent.status,
//             type: "Credit Card",
//           };

//           await axios
//             .post(`${server}/order/create-order`, order, config)
//             .then((res) => {
//               setOpen(false);
//               navigate("/order/success");
//               toast.success("Order successful!");
//               localStorage.setItem("cartItems", JSON.stringify([]));
//               localStorage.setItem("latestOrder", JSON.stringify([]));
//               window.location.reload();
//             });
//         }
//       }
//     } catch (error) {
//       toast.error(error);
//     }
//   };

//   const cashOnDeliveryHandler = async (e) => {
//     e.preventDefault();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     order.paymentInfo = {
//       type: "Cash On Delivery",
//     };

//     await axios
//       .post(`${server}/order/create-order`, order, config)
//       .then((res) => {
//         setOpen(false);
//         navigate("/order/success");
//         toast.success("Order successful!");
//         localStorage.setItem("cartItems", JSON.stringify([]));
//         localStorage.setItem("latestOrder", JSON.stringify([]));
//         window.location.reload();
//       });
//   };

//   return (
//     <div className="w-full flex flex-col items-center py-8">
//       <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
//         <div className="w-full 800px:w-[65%]">
//           <PaymentInfo
//             user={user}
//             open={open}
//             setOpen={setOpen}
//             onApprove={onApprove}
//             createOrder={createOrder}
//             paymentHandler={paymentHandler}
//             cashOnDeliveryHandler={cashOnDeliveryHandler}
//           />
//         </div>
//         <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
//           <CartData orderData={orderData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// // PaymentInfo Component
// const PaymentInfo = ({
//   user,
//   open,
//   setOpen,
//   onApprove,
//   createOrder,
//   paymentHandler,
//   cashOnDeliveryHandler,
// }) => {
//   const [select, setSelect] = useState(1);

//   return (
//     <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
//       {/* select buttons */}
//       <div>
//         <div className="flex w-full pb-5 border-b mb-2">
//           <div
//             className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
//             onClick={() => setSelect(1)}
//           >
//             {select === 1 ? (
//               <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
//             ) : null}
//           </div>
//           <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
//             Pay with Debit/Credit Card
//           </h4>
//         </div>

//         {/* Pay with card */}
//         {select === 1 ? (
//           <div className="w-full flex border-b">
//             <form className="w-full" onSubmit={paymentHandler}>
//               <div className="w-full flex pb-3">
//                 <div className="w-[50%]">
//                   <label className="block pb-2">Name On Card</label>
//                   <input
//                     required
//                     placeholder={user && user.name}
//                     className={`w-full border p-1 rounded-[5px] !w-[95%] text-[#444]`}
//                     value={user && user.name}
//                   />
//                 </div>
//                 <div className="w-[50%]">
//                   <label className="block pb-2">Exp Date</label>
//                   <CardExpiryElement
//                     className={`w-full border p-1 rounded-[5px]`}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: "19px",
//                           lineHeight: 1.5,
//                           color: "#444",
//                         },
//                         empty: {
//                           color: "#3a120a",
//                           backgroundColor: "transparent",
//                           "::placeholder": {
//                             color: "#444",
//                           },
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>

//               <div className="w-full flex pb-3">
//                 <div className="w-[50%]">
//                   <label className="block pb-2">Card Number</label>
//                   <CardNumberElement
//                     className={`w-full border p-1 rounded-[5px] !h-[35px] !w-[95%]`}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: "19px",
//                           lineHeight: 1.5,
//                           color: "#444",
//                         },
//                         empty: {
//                           color: "#3a120a",
//                           backgroundColor: "transparent",
//                           "::placeholder": {
//                             color: "#444",
//                           },
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//                 <div className="w-[50%]">
//                   <label className="block pb-2">CVV</label>
//                   <CardCvcElement
//                     className={`w-full border p-1 rounded-[5px] !h-[35px]`}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: "19px",
//                           lineHeight: 1.5,
//                           color: "#444",
//                         },
//                         empty: {
//                           color: "#3a120a",
//                           backgroundColor: "transparent",
//                           "::placeholder": {
//                             color: "#444",
//                           },
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>

//               <div className="w-full flex mt-5 justify-center">
//                 <button
//                   type="submit"
//                   className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer !w-[50%] border-none`}
//                 >
//                   Pay
//                 </button>
//               </div>
//             </form>
//           </div>
//         ) : null}

//         <div className="flex w-full py-5 border-b mb-2">
//           <div
//             className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
//             onClick={() => setSelect(2)}
//           >
//             {select === 2 ? (
//               <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
//             ) : null}
//           </div>
//           <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
//             Pay with Paypal
//           </h4>
//         </div>

//         {/* Pay with PayPal */}
//         {select === 2 ? (
//           <div className="flex flex-col py-3">
//             <PayPalScriptProvider
//               options={{
//                 "client-id": "test",
//                 currency: "USD",
//               }}
//             >
//               <PayPalButtons
//                 createOrder={createOrder}
//                 onApprove={onApprove}
//                 style={{
//                   layout: "vertical",
//                   color: "blue",
//                   shape: "rect",
//                   label: "pay",
//                 }}
//               />
//             </PayPalScriptProvider>
//           </div>
//         ) : null}

//         <div className="flex w-full py-5 border-b mb-2">
//           <div
//             className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
//             onClick={() => setSelect(3)}
//           >
//             {select === 3 ? (
//               <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
//             ) : null}
//           </div>
//           <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
//             Cash On Delivery
//           </h4>
//         </div>

//         {/* Cash on delivery */}
//         {select === 3 ? (
//           <div className="flex flex-col py-3">
//             <h4 className="text-lg text-[#222] mb-3">
//               You will pay when the product is delivered.
//             </h4>
//             <div className="flex w-full mt-5 justify-center">
//               <button
//                 onClick={cashOnDeliveryHandler}
//                 className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer !w-[50%] border-none`}
//               >
//                 Pay
//               </button>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// // CartData Component
// const CartData = ({ orderData }) => {
//   return (
//     <div className="bg-[#fff] rounded-md p-5">
//       <h3 className="text-lg font-bold">Cart Items</h3>
//       <div className="mt-4">
//         {orderData?.cart?.map((item, index) => (
//           <div key={index} className="flex justify-between mb-2">
//             <div className="flex">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-16 h-16 object-cover rounded"
//               />
//               <div className="ml-2">
//                 <h4 className="text-md font-semibold">{item.name}</h4>
//                 <p className="text-sm text-gray-600">Price: ${item.price}</p>
//               </div>
//             </div>
//             <p className="text-md font-semibold">${item.price * item.quantity}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between mt-4 border-t pt-2">
//         <h4 className="text-lg font-bold">Total:</h4>
//         <p className="text-lg font-semibold">${orderData?.totalPrice}</p>
//       </div>
//     </div>
//   );
// };

// export default Payment;

// src/components/Payment.js
// src/components/Payment.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { createOrder } from '../redux/actions/payment';
// import { resetPaymentState } from '../redux/actions/payment';
// // import { server } from "../../server";

// const Payment = () => {
//   const [orderData, setOrderData] = useState({});  // Initial state to avoid undefined
//   const { user } = useSelector((state) => state.user);
//   const { loading, success, error } = useSelector((state) => state.payment);
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const order = JSON.parse(localStorage.getItem('latestOrder'));
//     setOrderData(order || {});  // Fallback to empty object if order is not found
//   }, []);

//   useEffect(() => {
//     if (success) {
//       toast.success('Order successful!');
//       localStorage.removeItem('cartItems');
//       localStorage.removeItem('latestOrder');
//       navigate('/order/success');
//       dispatch(resetPaymentState());
//     }
//     if (error) {
//       toast.error(error);
//     }
//   }, [success, error, navigate, dispatch]);

//   // const handleStripePayment = async (e) => {
//   //   e.preventDefault();
//   //   const paymentData = { amount: Math.round(orderData.totalPrice * 100), currency: 'sar' };

//   //   try {
//   //     const { data } = await axios.post(`${server}/payment/process`, paymentData);
//   //     const clientSecret = data.client_secret;
//   //     if (!stripe || !elements) return;

//   //     const result = await stripe.confirmCardPayment(clientSecret, {
//   //       payment_method: { card: elements.getElement(CardNumberElement) },
//   //     });

//   //     if (result.error) {
//   //       toast.error(result.error.message);
//   //     } else if (result.paymentIntent.status === 'succeeded') {
//   //       dispatch(createOrder({ ...orderData, paymentInfo: { id: result.paymentIntent.id, status: result.paymentIntent.status, type: 'Credit Card' } }));
//   //     }
//   //   } catch (error) {
//   //     toast.error('Payment failed.');
//   //   }
//   // };

//   return (
//     <div className="w-full flex flex-col items-center py-8">
//       <div className="w-[90%] 1000px:w-[70%] block">
//         <div className="w-full">
//           <PaymentInfo user={user} handleStripePayment={handleStripePayment} />
//         </div>
//       </div>
//     </div>
//   );
// };

// // PaymentInfo Component
// const PaymentInfo = ({ user, handleStripePayment }) => {
//   return (
//     <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
//       <h4 className="text-[18px] font-[600] text-[#000] mb-5">Pay with Debit/Credit Card</h4>
//       <form onSubmit={handleStripePayment}>
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Card Number</label>
//           <CardNumberElement className="w-full border p-2 rounded-[5px]" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Expiry Date</label>
//           <CardExpiryElement className="w-full border p-2 rounded-[5px]" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm mb-1">CVC</label>
//           <CardCvcElement className="w-full border p-2 rounded-[5px]" />
//         </div>
//         <button type="submit" className="bg-black text-white w-full mt-4 py-2 rounded">Pay</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import styles from "../../styles/styles";
// import { useEffect } from "react";
// import {
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useSelector } from "react-redux";
// import axios from "axios";
// // import { server } from "../../server";
// import { toast } from "react-toastify";
// import { RxCross1 } from "react-icons/rx";

// const Payment = () => {
//   const [orderData, setOrderData] = useState([]);
//   const [open, setOpen] = useState(false);
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     const orderData = JSON.parse(localStorage.getItem("latestOrder"));
//     setOrderData(orderData);
//   }, []);

//   const createOrder = (data, actions) => {
//     return actions.order
//       .create({
//         purchase_units: [
//           {
//             description: "Sunflower",
//             amount: {
//               currency_code: "SAR",  // Change currency code to SAR
//               value: orderData?.totalPrice,
//             },
//           },
//         ],
//         // not needed if a shipping address is actually needed
//         application_context: {
//           shipping_preference: "NO_SHIPPING",
//         },
//       })
//       .then((orderID) => {
//         return orderID;
//       });
//   };

//   const order = {
//     cart: orderData?.cart,
//     shippingAddress: orderData?.shippingAddress,
//     user: user && user,
//     totalPrice: orderData?.totalPrice,
//   };

//   // const onApprove = async (data, actions) => {
//   //   return actions.order.capture().then(function (details) {
//   //     const { payer } = details;

//   //     let paymentInfo = payer;

//   //     if (paymentInfo !== undefined) {
//   //       paypalPaymentHandler(paymentInfo);
//   //     }
//   //   });
//   // };

//   // const paypalPaymentHandler = async (paymentInfo) => {
//   //   const config = {
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //   };

//   //   order.paymentInfo = {
//   //     id: paymentInfo.payer_id,
//   //     status: "succeeded",
//   //     type: "Paypal",
//   //   };

//   //   await axios
//   //     .post(`${server}/order/create-order`, order, config)
//   //     .then((res) => {
//   //       setOpen(false);
//   //       navigate("/order/success");
//   //       toast.success("Order successful!");
//   //       localStorage.setItem("cartItems", JSON.stringify([]));
//   //       localStorage.setItem("latestOrder", JSON.stringify([]));
//   //       window.location.reload();
//   //     });
//   // };

//   const paymentData = {
//     amount: Math.round(orderData?.totalPrice * 100),
//   };

//   // const paymentHandler = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const config = {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     };

//   //     const { data } = await axios.post(
//   //       `${server}/payment/process`,
//   //       paymentData,
//   //       config
//   //     );

//   //     const client_secret = data.client_secret;

//   //     if (!stripe || !elements) return;
//   //     const result = await stripe.confirmCardPayment(client_secret, {
//   //       payment_method: {
//   //         card: elements.getElement(CardNumberElement),
//   //       },
//   //     });

//   //     if (result.error) {
//   //       toast.error(result.error.message);
//   //     } else {
//   //       if (result.paymentIntent.status === "succeeded") {
//   //         order.paymnentInfo = {
//   //           id: result.paymentIntent.id,
//   //           status: result.paymentIntent.status,
//   //           type: "Credit Card",
//   //         };

//   //         await axios
//   //           .post(`${server}/order/create-order`, order, config)
//   //           .then((res) => {
//   //             setOpen(false);
//   //             navigate("/order/success");
//   //             toast.success("Order successful!");
//   //             localStorage.setItem("cartItems", JSON.stringify([]));
//   //             localStorage.setItem("latestOrder", JSON.stringify([]));
//   //             window.location.reload();
//   //           });
//   //       }
//   //     }
//   //   } catch (error) {
//   //     toast.error(error);
//   //   }
//   // };

//   // const cashOnDeliveryHandler = async (e) => {
//   //   e.preventDefault();

//   //   const config = {
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //   };

//   //   order.paymentInfo = {
//   //     type: "Cash On Delivery",
//   //   };

//   //   await axios
//   //   .post(`${server}/order/create-order`, order, config)
//   //   .then((res) => {
//   //     setOpen(false);
//   //     navigate("/order/success");
//   //     toast.success("Order successful!");
//   //     localStorage.setItem("cartItems", JSON.stringify([]));
//   //     localStorage.setItem("latestOrder", JSON.stringify([]));
//   //     window.location.reload();
//   //   });
//   // };

//   return (
//     <div className="w-full flex flex-col items-center py-8">
//       <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
//         <div className="w-full 800px:w-[65%]">
//           <PaymentInfo
//             user={user}
//             open={open}
//             setOpen={setOpen}
//             // onApprove={onApprove}
//             createOrder={createOrder}
//             // paymentHandler={paymentHandler}
//             // cashOnDeliveryHandler={cashOnDeliveryHandler}
//           />
//         </div>
//         <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
//           <CartData orderData={orderData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const PaymentInfo = ({
//   user,
//   open,
//   setOpen,
//   onApprove,
//   createOrder,
//   paymentHandler,
//   cashOnDeliveryHandler,
// }) => {
//   const [select, setSelect] = useState(1);

//   return (
//     <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
//       {/* select buttons */}
//       <div>
//         <div className="flex w-full pb-5 border-b mb-2">
//           <div
//             className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
//             onClick={() => setSelect(1)}
//           >
//             {select === 1 ? (
//               <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
//             ) : null}
//           </div>
//           <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
//             Pay with Debit/credit card
//           </h4>
//         </div>

//         {/* pay with card */}
//         {select === 1 ? (
//           <div className="w-full flex border-b">
//             <form className="w-full" onSubmit={paymentHandler}>
//               <div className="w-full flex pb-3">
//                 <div className="w-[50%]">
//                   <label className="block pb-2">Name On Card</label>
//                   <input
//                     required
//                     placeholder={user && user.name}
//                     className={`w-full border p-1 rounded-[5px] !w-[95%] text-[#444]`}
//                     value={user && user.name}
//                   />
//                 </div>
//                 <div className="w-[50%]">
//                   <label className="block pb-2">Exp Date</label>
//                   <CardExpiryElement
//                     className={`w-full border p-1 rounded-[5px]`}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: "19px",
//                           lineHeight: 1.5,
//                           color: "#444",
//                         },
//                         empty: {
//                           color: "#3a120a",
//                           backgroundColor: "transparent",
//                           "::placeholder": {
//                             color: "#444",
//                           },
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>

//               <div className="w-full flex pb-3">
//                 <div className="w-[50%]">
//                   <label className="block pb-2">Card Number</label>
//                   <CardNumberElement
//                     className={`w-full border p-1 rounded-[5px] !h-[35px] !w-[95%]`}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: "19px",
//                           lineHeight: 1.5,
//                           color: "#444",
//                         },
//                         empty: {
//                           color: "#3a120a",
//                           backgroundColor: "transparent",
//                           "::placeholder": {
//                             color: "#444",
//                           },
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//                 <div className="w-[50%]">
//                   <label className="block pb-2">CVV</label>
//                   <CardCvcElement
//                     className={`w-full border p-1 rounded-[5px] !h-[35px]`}
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: "19px",
//                           lineHeight: 1.5,
//                           color: "#444",
//                         },
//                         empty: {
//                           color: "#3a120a",
//                           backgroundColor: "transparent",
//                           "::placeholder": {
//                             color: "#444",
//                           },
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>
//               <input
//                 type="submit"
//                 value="Submit"
//                 className={`w-full border p-1 rounded-[5px] !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
//               />
//             </form>
//           </div>
//         ) : null}
//       </div>

//       <br />
//       {/* paypal payment */}
//       <div>
//         <div className="flex w-full pb-5 border-b mb-2">
//           <div
//             className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
//             onClick={() => setSelect(2)}
//           >
//             {select === 2 ? (
//               <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
//             ) : null}
//           </div>
//           <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
//             Pay with Paypal
//           </h4>
//         </div>

//         {/* pay with payement */}
//         {select === 2 ? (
//           <div className="w-full flex border-b">
//             <div
//               className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer !bg-[#f63b60] text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
//               onClick={() => setOpen(true)}
//             >
//               Pay Now
//             </div>
//             {open && (
//               <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
//                 <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
//                   <div className="w-full flex justify-end p-3">
//                     <RxCross1
//                       size={30}
//                       className="cursor-pointer absolute top-3 right-3"
//                       onClick={() => setOpen(false)}
//                     />
//                   </div>
//                     <PayPalScriptProvider
//                       options={{
//                         "client-id":
//                           "Aczac4Ry9_QA1t4c7TKH9UusH3RTe6onyICPoCToHG10kjlNdI-qwobbW9JAHzaRQwFMn2-k660853jn",
//                       }}
//                     >
//                       <PayPalButtons
//                         style={{ layout: "vertical" }}
//                         onApprove={onApprove}
//                         createOrder={createOrder}
//                       />
//                     </PayPalScriptProvider>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : null}
//       </div>

//       <br />
//       {/* cash on delivery */}
//       <div>
//         <div className="flex w-full pb-5 border-b mb-2">
//           <div
//             className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
//             onClick={() => setSelect(3)}
//           >
//             {select === 3 ? (
//               <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
//             ) : null}
//           </div>
//           <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
//             Cash on Delivery
//           </h4>
//         </div>

//         {/* cash on delivery */}
//         {select === 3 ? (
//           <div className="w-full flex">
//             <form className="w-full" onSubmit={cashOnDeliveryHandler}>
//               <input
//                 type="submit"
//                 value="Confirm"
//                 className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
//               />
//             </form>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// const CartData = ({ orderData }) => {
//   const shipping = orderData?.shipping?.toFixed(2);
//   return (
//     <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
//       <div className="flex justify-between">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
//         <h5 className="text-[18px] font-[600]">${orderData?.subTotalPrice}</h5>
//       </div>
//       <br />
//       <div className="flex justify-between">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
//         <h5 className="text-[18px] font-[600]">${shipping}</h5>
//       </div>
//       <br />
//       <div className="flex justify-between border-b pb-3">
//         <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
//         <h5 className="text-[18px] font-[600]">{orderData?.discountPrice? "$" + orderData.discountPrice : "-"}</h5>
//       </div>
//       <h5 className="text-[18px] font-[600] text-end pt-3">
//         ${orderData?.totalPrice}
//       </h5>
//       <br />
//     </div>
//   );
// };

// export default Payment;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react"; 
// import {
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// const Payment = () => {
//   const [orderData, setOrderData] = useState([]);
//   // const { user } = useSelector((state) => state.user);
//   // const navigate = useNavigate();
//   // const stripe = useStripe();
//   // const elements = useElements();

//   useEffect(() => {
//     const orderData = JSON.parse(localStorage.getItem("latestOrder"));
//     setOrderData(orderData);
//   }, []);

//   // const paymentData = {
//   //   amount: Math.round(orderData?.totalPrice * 100),
//   // };

//   // const paymentHandler = async (e) => {
//   //   e.preventDefault();
//   //   // Commented out backend calls and Stripe handling to avoid errors
//   //   // try {
//   //   //   const config = {
//   //   //     headers: {
//   //   //       "Content-Type": "application/json",
//   //   //     },
//   //   //   };
//   //   //   const { data } = await axios.post(
//   //   //     `/payment/process`, // Update with your backend server URL
//   //   //     paymentData,
//   //   //     config
//   //   //   );
//   //   //   const client_secret = data.client_secret;
//   //   //   if (!stripe || !elements) return;
//   //   //   const result = await stripe.confirmCardPayment(client_secret, {
//   //   //     payment_method: {
//   //   //       card: elements.getElement(CardNumberElement),
//   //   //     },
//   //   //   });
//   //   //   if (result.error) {
//   //   //     toast.error(result.error.message);
//   //   //   } else if (result.paymentIntent.status === "succeeded") {
//   //   //     const order = {
//   //   //       cart: orderData?.cart,
//   //   //       shippingAddress: orderData?.shippingAddress,
//   //   //       user: user,
//   //   //       totalPrice: orderData?.totalPrice,
//   //   //       paymentInfo: {
//   //   //         id: result.paymentIntent.id,
//   //   //         status: result.paymentIntent.status,
//   //   //         type: "Credit Card",
//   //   //       },
//   //   //     };
//   //   //     await axios.post(`/order/create-order`, order, config);
//   //   //     navigate("/order/success");
//   //   //     toast.success("Order successful!");
//   //   //     localStorage.setItem("cartItems", JSON.stringify([]));
//   //   //     localStorage.setItem("latestOrder", JSON.stringify([]));
//   //   //     window.location.reload();
//   //   //   }
//   //   // } catch (error) {
//   //   //   toast.error(error.message);
//   //   // }
//   // };

//   return (
//     <div className="w-full flex flex-col items-center py-8">
//       <div className="w-[90%] block">
//         <div className="w-full bg-white rounded-md p-5 pb-8">
//           <h4 className="text-[18px] font-[600] text-[#000000b1]">
//             Pay with Debit/Credit Card
//           </h4>
//           {/* <form className="w-full" onSubmit={paymentHandler}> */}
//           <form className="w-full" >
//             <div className="w-full flex pb-3">
//               <div className="w-[50%]">
//                 <label className="block pb-2">Name On Card</label>
//                 <input
//                   required
//                   placeholder="John Doe" // Replaced dynamic placeholder with static text
//                   className="w-full border p-1 rounded-[5px] text-[#444]"
//                   value="John Doe" // Set static value here
//                 />
//               </div>
//               <div className="w-[50%]">
//                 <label className="block pb-2">Exp Date</label>
//                 {/* <CardExpiryElement
//                   className="w-full border p-1 rounded-[5px]"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: "19px",
//                         color: "#444",
//                       },
//                     },
//                   }}
//                 /> */}
//               </div>
//             </div>

//             <div className="w-full flex pb-3">
//               <div className="w-[50%]">
//                 <label className="block pb-2">Card Number</label>
//                 {/* <CardNumberElement
//                   className="w-full border p-1 rounded-[5px] h-[35px]"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: "19px",
//                         color: "#444",
//                       },
//                     },
//                   }}
//                 /> */}
//               </div>
//               <div className="w-[50%]">
//                 <label className="block pb-2">CVV</label>
//                 {/* <CardCvcElement
//                   className="w-full border p-1 rounded-[5px] h-[35px]"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: "19px",
//                         color: "#444",
//                       },
//                     },
//                   }}
//                 /> */}
//               </div>
//             </div>
//             <input
//               type="submit"
//               value="Submit"
//               className="w-full border p-1 rounded-[5px] bg-[#f63b60] text-white h-[45px] cursor-pointer text-[18px] font-[600]"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

// import React from "react";
// import { useLocation } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const total = queryParams.get("total");
//   const subtotal = queryParams.get("subtotal");
//   const shipping = queryParams.get("shipping");
//   const platform = queryParams.get("platform");

//   return (
//     <div className="font-[sans-serif] bg-white p-4 xs:px-4">
//     <div className="md:max-w-5xl max-w-xl mx-auto">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xs:grid-cols-1">
//         <div className="lg:col-span-2 max-md:order-1">
//           <h2 className="text-3xl font-extrabold text-gray-800">Make a payment</h2>
//           <p className="text-gray-800 text-sm mt-4 xs:text-xs">
//             Complete your transaction swiftly and securely with our easy-to-use payment process.
//           </p>
  
//           <form className="mt-8 max-w-lg xs:max-w-xs">
//             <div className="grid gap-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Cardholder's Name"
//                   className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
//                 />
//               </div>
  
//               <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
//                   <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
//                   <path
//                     fill="#fed049"
//                     d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
//                     className="hovered-path"
//                     data-original="#fed049"
//                   />
//                 </svg>
//                 <input
//                   type="number"
//                   placeholder="Card Number"
//                   className="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent"
//                 />
//               </div>
  
//               <div className="grid grid-cols-2 gap-4 xs:grid-cols-1">
//                 <div>
//                   <input
//                     type="number"
//                     placeholder="EXP."
//                     className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="number"
//                     placeholder="CVV"
//                     className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
//                   />
//                 </div>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="mt-8 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
//             >
//               Pay SAR {total}
//             </button>
//           </form>
//         </div>
  
//         {/* Display breakdown of costs */}
//         <div className="bg-gray-100 p-6 rounded-md xs:mt-8">
//           <h2 className="text-3xl font-extrabold text-gray-800">Payment Summary</h2>
//           <ul className="text-gray-800 mt-8 space-y-4 xs:text-xs">
//             <li className="flex justify-between">
//               <span>Subtotal:</span> <span>SAR {subtotal}</span>
//             </li>
//             <li className="flex justify-between">
//               <span>Shipping Fee:</span> <span>SAR {shipping}</span>
//             </li>
//             <li className="flex justify-between">
//               <span>Platform Fee:</span> <span>SAR {platform}</span>
//             </li>
//             <li className="flex justify-between font-bold text-lg">
//               <span>Total:</span> <span>SAR {total}</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Payment;



import React, { useState } from "react"; // Import useState for radio button selection
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify"; // For notifications

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const queryParams = new URLSearchParams(location.search);

  const total = queryParams.get("total");
  const subtotal = queryParams.get("subtotal");
  const shipping = queryParams.get("shipping");
  const platform = queryParams.get("platform");

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card"); // State for payment method

  const handlePayment = () => {
    if (selectedPaymentMethod === "card") {
      // For actual integration, you'd send card details to a payment gateway
      toast.success("Processing card payment...");
      setTimeout(() => {
        toast.success("Payment successful!");
        navigate("/"); // Navigate to a success page
      }, 2000);
    } else if (selectedPaymentMethod === "cod") {
      toast.success("Order placed with Cash on Delivery!");
      setTimeout(() => {
        navigate("/"); // Navigate to a success page
      }, 2000);
    } else {
      toast.error("Please select a payment method.");
    }
  };

  return (
    <div className="flex justify-center items-start w-full min-h-screen p-4 sm:p-6 lg:p-8 font-montserrat-light">
      <div className="flex max-lg:flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-7xl">
        {/* Payment Form Section */}
        <div className="flex-1 w-full bg-white rounded-lg shadow-lg px-8 py-10 sm:px-10 sm:py-12">
          <h2 className="text-3xl font-montserrat-regular text-yankees-blue text-center mb-10">Choose Payment Method</h2>

          {/* Payment Method Selection */}
          <div className="mb-10 space-y-6">
            <h3 className="text-lg font-montserrat-medium text-yankees-blue mb-4 border-b pb-2">Select an Option</h3>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="cardPayment"
                name="paymentMethod"
                value="card"
                checked={selectedPaymentMethod === "card"}
                onChange={() => setSelectedPaymentMethod("card")}
                className="form-radio text-madder-lake h-5 w-5"
              />
              <label htmlFor="cardPayment" className="text-yankees-blue text-lg font-montserrat-regular cursor-pointer">Credit/Debit Card</label>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={selectedPaymentMethod === "cod"}
                onChange={() => setSelectedPaymentMethod("cod")}
                className="form-radio text-madder-lake h-5 w-5"
              />
              <label htmlFor="cod" className="text-yankees-blue text-lg font-montserrat-regular cursor-pointer">Cash on Delivery (COD)</label>
            </div>
          </div>

          {/* Card Payment Form (Conditionally Rendered) */}
          {selectedPaymentMethod === "card" && (
            <form className="space-y-6">
              <h3 className="text-lg font-montserrat-medium text-yankees-blue mb-6 border-b pb-2">Card Details</h3>
              <div>
                <input
                  type="text"
                  placeholder="Cardholder's Name"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg w-full text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-yankees-blue focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg focus-within:border-yankees-blue focus-within:ring-2 focus-within:ring-yankees-blue transition-all duration-200 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-4 text-gray-400 shrink-0" viewBox="0 0 32 20">
                  <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                  <path
                    fill="#fed049"
                    d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                    className="hovered-path"
                  />
                </svg>
                <input
                  type="number"
                  placeholder="Card Number"
                  className="px-4 py-3.5 text-gray-800 w-full text-base outline-none bg-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="number"
                    placeholder="MM/YY" // Changed to reflect month/year
                    className="p-4 bg-gray-50 border border-gray-200 rounded-lg w-full text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-yankees-blue focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="CVV"
                    className="p-4 bg-gray-50 border border-gray-200 rounded-lg w-full text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-yankees-blue focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </form>
          )}

          {/* Payment Button */}
          <div className="flex gap-4 max-md:flex-col mt-10">
            <button
              type="button"
              className={`text-white p-4 rounded-lg w-full text-base font-montserrat-medium shadow-md hover:shadow-lg transition-colors duration-200 
                ${selectedPaymentMethod === "card" ? "bg-madder-lake hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"}`}
              onClick={handlePayment}
              disabled={selectedPaymentMethod !== "card"}
            >
              Pay with Card (SAR {total})
            </button>
            <button
              type="button"
              className={`text-white p-4 rounded-lg w-full text-base font-montserrat-medium shadow-md hover:shadow-lg transition-colors duration-200 
                ${selectedPaymentMethod === "cod" ? "bg-fire-opal hover:bg-orange-400" : "bg-gray-400 cursor-not-allowed"}`}
              onClick={handlePayment}
              disabled={selectedPaymentMethod !== "cod"}
            >
              Pay Cash on Delivery
            </button>
          </div>
        </div>

        {/* Display breakdown of costs */}
        {/* Consistent styling with Cart Summary in Checkout */}
        <div className="bg-[#C2373D] bg-opacity-80 rounded-lg shadow-lg overflow-hidden lg:max-w-[400px] lg:min-w-[350px] max-lg:w-full">
          <div className="relative h-full w-full flex flex-col p-6 space-y-4"> {/* Adjusted padding and space-y */}
            <h2 className="text-3xl font-montserrat-regular text-white mb-4 text-center">Order Summary</h2> {/* Adjusted font size and color */}
            <ul className="text-white space-y-3"> {/* Adjusted text color and space-y */}
              <li className="flex justify-between text-lg font-montserrat-light">
                <span>Subtotal:</span> <span className="font-montserrat-regular">SAR {parseFloat(subtotal).toFixed(2)}</span>
              </li>
              <li className="flex justify-between text-lg font-montserrat-light">
                <span>Shipping Fee:</span> <span className="font-montserrat-regular">SAR {parseFloat(shipping).toFixed(2)}</span>
              </li>
              <li className="flex justify-between text-lg font-montserrat-light">
                <span>Platform Fee:</span> <span className="font-montserrat-regular">SAR {parseFloat(platform).toFixed(2)}</span>
              </li>
              <li className="border-t border-gray-700 pt-4 mt-4"> {/* Separator line for total */}
                <h4 className="flex justify-between text-2xl text-white font-montserrat-bold">Total: <span className="font-montserrat-bold">SAR {parseFloat(total).toFixed(2)}</span></h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;