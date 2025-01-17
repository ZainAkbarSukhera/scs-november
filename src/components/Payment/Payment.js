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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "../../styles/styles";
import { useEffect } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import axios from "axios";
// import { server } from "../../server";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "SAR",  // Change currency code to SAR
              value: orderData?.totalPrice,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user && user,
    totalPrice: orderData?.totalPrice,
  };

  // const onApprove = async (data, actions) => {
  //   return actions.order.capture().then(function (details) {
  //     const { payer } = details;

  //     let paymentInfo = payer;

  //     if (paymentInfo !== undefined) {
  //       paypalPaymentHandler(paymentInfo);
  //     }
  //   });
  // };

  // const paypalPaymentHandler = async (paymentInfo) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   order.paymentInfo = {
  //     id: paymentInfo.payer_id,
  //     status: "succeeded",
  //     type: "Paypal",
  //   };

  //   await axios
  //     .post(`${server}/order/create-order`, order, config)
  //     .then((res) => {
  //       setOpen(false);
  //       navigate("/order/success");
  //       toast.success("Order successful!");
  //       localStorage.setItem("cartItems", JSON.stringify([]));
  //       localStorage.setItem("latestOrder", JSON.stringify([]));
  //       window.location.reload();
  //     });
  // };

  const paymentData = {
    amount: Math.round(orderData?.totalPrice * 100),
  };

  // const paymentHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     const { data } = await axios.post(
  //       `${server}/payment/process`,
  //       paymentData,
  //       config
  //     );

  //     const client_secret = data.client_secret;

  //     if (!stripe || !elements) return;
  //     const result = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardNumberElement),
  //       },
  //     });

  //     if (result.error) {
  //       toast.error(result.error.message);
  //     } else {
  //       if (result.paymentIntent.status === "succeeded") {
  //         order.paymnentInfo = {
  //           id: result.paymentIntent.id,
  //           status: result.paymentIntent.status,
  //           type: "Credit Card",
  //         };

  //         await axios
  //           .post(`${server}/order/create-order`, order, config)
  //           .then((res) => {
  //             setOpen(false);
  //             navigate("/order/success");
  //             toast.success("Order successful!");
  //             localStorage.setItem("cartItems", JSON.stringify([]));
  //             localStorage.setItem("latestOrder", JSON.stringify([]));
  //             window.location.reload();
  //           });
  //       }
  //     }
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  // const cashOnDeliveryHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   order.paymentInfo = {
  //     type: "Cash On Delivery",
  //   };

  //   await axios
  //   .post(`${server}/order/create-order`, order, config)
  //   .then((res) => {
  //     setOpen(false);
  //     navigate("/order/success");
  //     toast.success("Order successful!");
  //     localStorage.setItem("cartItems", JSON.stringify([]));
  //     localStorage.setItem("latestOrder", JSON.stringify([]));
  //     window.location.reload();
  //   });
  // };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo
            user={user}
            open={open}
            setOpen={setOpen}
            // onApprove={onApprove}
            createOrder={createOrder}
            // paymentHandler={paymentHandler}
            // cashOnDeliveryHandler={cashOnDeliveryHandler}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = ({
  user,
  open,
  setOpen,
  onApprove,
  createOrder,
  paymentHandler,
  cashOnDeliveryHandler,
}) => {
  const [select, setSelect] = useState(1);

  return (
    <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
      {/* select buttons */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(1)}
          >
            {select === 1 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Pay with Debit/credit card
          </h4>
        </div>

        {/* pay with card */}
        {select === 1 ? (
          <div className="w-full flex border-b">
            <form className="w-full" onSubmit={paymentHandler}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Name On Card</label>
                  <input
                    required
                    placeholder={user && user.name}
                    className={`w-full border p-1 rounded-[5px] !w-[95%] text-[#444]`}
                    value={user && user.name}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Exp Date</label>
                  <CardExpiryElement
                    className={`w-full border p-1 rounded-[5px]`}
                    options={{
                      style: {
                        base: {
                          fontSize: "19px",
                          lineHeight: 1.5,
                          color: "#444",
                        },
                        empty: {
                          color: "#3a120a",
                          backgroundColor: "transparent",
                          "::placeholder": {
                            color: "#444",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Card Number</label>
                  <CardNumberElement
                    className={`w-full border p-1 rounded-[5px] !h-[35px] !w-[95%]`}
                    options={{
                      style: {
                        base: {
                          fontSize: "19px",
                          lineHeight: 1.5,
                          color: "#444",
                        },
                        empty: {
                          color: "#3a120a",
                          backgroundColor: "transparent",
                          "::placeholder": {
                            color: "#444",
                          },
                        },
                      },
                    }}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">CVV</label>
                  <CardCvcElement
                    className={`w-full border p-1 rounded-[5px] !h-[35px]`}
                    options={{
                      style: {
                        base: {
                          fontSize: "19px",
                          lineHeight: 1.5,
                          color: "#444",
                        },
                        empty: {
                          color: "#3a120a",
                          backgroundColor: "transparent",
                          "::placeholder": {
                            color: "#444",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className={`w-full border p-1 rounded-[5px] !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </div>
        ) : null}
      </div>

      <br />
      {/* paypal payment */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(2)}
          >
            {select === 2 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Pay with Paypal
          </h4>
        </div>

        {/* pay with payement */}
        {select === 2 ? (
          <div className="w-full flex border-b">
            <div
              className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer !bg-[#f63b60] text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              onClick={() => setOpen(true)}
            >
              Pay Now
            </div>
            {open && (
              <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
                <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                  <div className="w-full flex justify-end p-3">
                    <RxCross1
                      size={30}
                      className="cursor-pointer absolute top-3 right-3"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "Aczac4Ry9_QA1t4c7TKH9UusH3RTe6onyICPoCToHG10kjlNdI-qwobbW9JAHzaRQwFMn2-k660853jn",
                      }}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        onApprove={onApprove}
                        createOrder={createOrder}
                      />
                    </PayPalScriptProvider>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <br />
      {/* cash on delivery */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(3)}
          >
            {select === 3 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Cash on Delivery
          </h4>
        </div>

        {/* cash on delivery */}
        {select === 3 ? (
          <div className="w-full flex">
            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
              <input
                type="submit"
                value="Confirm"
                className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const CartData = ({ orderData }) => {
  const shipping = orderData?.shipping?.toFixed(2);
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">${orderData?.subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">${shipping}</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">{orderData?.discountPrice? "$" + orderData.discountPrice : "-"}</h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">
        ${orderData?.totalPrice}
      </h5>
      <br />
    </div>
  );
};

export default Payment;