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

//       // Update local storage with the updated orders array
//       localStorage.setItem("latestOrder", JSON.stringify(orderData));
//       navigate("/payment");
//     }
//   };

//   const subTotalPrice = cart.reduce(
//     (acc, item) => acc + item.qty * item.discountPrice,
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

import React, { useState, useEffect } from "react";
import { Country } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createOrder } from "../redux/actions/payment"; // Import your order action

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const shipping = subTotalPrice * 0.1;
  const commissionFee = (subTotalPrice + shipping) * 0.05;
  const totalPrice = (subTotalPrice + shipping + commissionFee).toFixed(2);

  const paymentSubmit = () => {
    if (
      address1 === "" ||
      address2 === "" ||
      zipCode === "" ||
      country === "" ||
      city === ""
    ) {
      toast.error("Please choose your delivery address!");
    } else {
      const shippingAddress = {
        address1,
        address2,
        zipCode,
        country,
        city,
      };

      const orderData = {
        cart,
        totalPrice,
        subTotalPrice,
        shipping,
        commissionFee,
        shippingAddress,
        user,
      };

      // Dispatch the create order action
      dispatch(createOrder(orderData));
      navigate("/payment");
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            user={user}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData
            totalPrice={totalPrice}
            shipping={shipping}
            subTotalPrice={subTotalPrice}
            commissionFee={commissionFee}
          />
        </div>
      </div>
      <div
        className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer w-[150px] 800px:w-[280px] mt-10`}
        onClick={paymentSubmit}
      >
        <h5 className="text-white">Go to Payment</h5>
      </div>
    </div>
  );
};


const ShippingInfo = ({
  user,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  zipCode,
  setZipCode,
}) => {
  return (
    <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
      <h5 className="text-[18px] font-[500]">Shipping Address</h5>
      <br />
      <form>
        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Full Name</label>
            <input
              type="text"
              value={user && user.name}
              required
              className={`w-full border p-1 rounded-[5px] !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Email Address</label>
            <input
              type="email"
              value={user && user.email}
              required
              className={`w-full border p-1 rounded-[5px]`}
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Phone Number</label>
            <input
              type="number"
              required
              value={user && user.phoneNumber}
              className={`w-full border p-1 rounded-[5px] !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Zip Code</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className={`w-full border p-1 rounded-[5px]`}
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Country</label>
            <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="block pb-2" value="">
                Choose your country
              </option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`w-full border p-1 rounded-[5px]`}
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Address1</label>
            <input
              type="text"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className={`w-full border p-1 rounded-[5px] !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Address2</label>
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              className={`w-full border p-1 rounded-[5px]`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const CartData = ({ totalPrice, shipping, subTotalPrice, commissionFee }) => {
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Subtotal:</h3>
        <h5 className="text-[18px] font-[600]">
          SAR {subTotalPrice.toFixed(2)}
        </h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Shipping:</h3>
        <h5 className="text-[18px] font-[600]">SAR {shipping.toFixed(2)}</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">
          Commission Fee:
        </h3>
        <h5 className="text-[18px] font-[600]">
          SAR {commissionFee.toFixed(2)}
        </h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">SAR {totalPrice}</h5>
    </div>
  );
};

export default Checkout;