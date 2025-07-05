// import React from 'react';
// import logo from '../assets/SCS Logo.png';

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
//         <div>
//           <img src={logo} alt="Saudi Creative Streams Logo" className="h-24 w-full mb-6 object-contain" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 text-center">Login to your account</h2>
//         <form className="max-w-sm mx-auto">
//           {/* Email Field */}
//           <div className="mb-5">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               Your email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="name@flowbite.com"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-5">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               Your password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Register new account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export default LoginPage;

// import { React, useState } from "react";
// import logo from '../assets/SCS Logo.png';
// // import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Use dispatch from Redux
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     navigate("/");
//     // Dispatch the login action
//     // dispatch(loginUser(email, password));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 xs:p-2">
//     <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
//       <div>
//         <img src={logo} alt="Saudi Creative Streams Logo" className="h-24 w-full mb-6 object-contain" />
//       </div>
//       <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">Login to your account</h2>

//       <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
//         {/* Email Field */}
//         <div className="mb-5">
//           <label htmlFor="email" className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             autoComplete="email"
//             value={email}
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yankees-blue focus:border-yankees-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder=""
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         {/* Password Field */}
//         <div className="mb-5">
//           <div className="flex justify-between">
//             <label htmlFor="password" className="block mb-2 text-sm font-montserrat-light text-gray-900 dark:text-white">
//               Password
//             </label>
//             <a href="" className="text-xs font-montserrat-extralight text-blue-600 dark:text-blue-400">Forgot Password?</a>
//           </div>
//           <input
//             type={visible ? "text" : "password"}
//             name="password"
//             autoComplete="current-password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="password"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yankees-blue focus:border-yankees-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           />
//           {/* {visible ? (
//             <AiOutlineEye
//               className="absolute right-2 top-2 cursor-pointer"
//               size={25}
//               onClick={() => setVisible(false)}
//             />
//           ) : (
//             <AiOutlineEyeInvisible
//               className="absolute right-2 top-2 cursor-pointer"
//               size={25}
//               onClick={() => setVisible(true)}
//             />
//           )} */}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full text-white bg-madder-lake hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-montserrat-light rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Login
//         </button>

//         {/* Separator */}
//         <div className="mt-6 flex items-center justify-between">
//           <span className="border-b w-1/5 lg:w-1/4"></span>
//           <span className="text-xs font-montserrat-extralight text-yankees-blue dark:text-white uppercase">DON'T HAVE AN ACCOUNT?</span>
//           <span className="border-b w-1/5 lg:w-1/4"></span>
//         </div>

//         {/* Sign up link */}
//         <div className="mt-6 flex items-center justify-center">
//           <Link to="/signup" className="text-sm font-montserrat-extralight text-yankees-blue dark:text-blue-400">SignUp Here</Link>
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default LoginPage;

import { React, useState } from "react";
import logo from '../assets/SCS Logo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../components/redux/actions/user";
import {login} from '../api/user';
import { toast } from "react-toastify";


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible] = useState(false);
  const [Error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //       // console.log("Dispatching user");
  //       //   dispatch(setUser(data));
  //       try {
  //         console.log("Sending data");
  //         console.log("PP Location",location);
  //         const response = await login({email,password});
  //         console.log("response",response);
  //         console.log("response Status",response.status);
  //         console.log("Going to navigate");
  //             toast.success("Login Success");
  //           navigate("/");
    
  //       } catch (error) {
  //         if (error.response && error.response.data && error.response.data.message) {
  //           setError(error.response.data.message);
  //         } else {
  //           setError("An unexpected error occurred.");
  //         }
  //       }


  //   // navigate("/");
  //   // Dispatch the login action
  //   // dispatch(loginUser(email, password));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });
      // console.log("response structure:", response);
      // console.log("The profilePicture url is: ",response.data.user.profilePicture);
      // console.log("The artistLicense url is: ",response.data.user.artistLicense);
       

      if (response.status === 200) {
        // const { user } = response.data;

        dispatch(setUser({ ...response.data.user, auth: true })); // ✅ Dispatching with `auth: true`

          // // Extract the token from response
          const token = response.data.token;

          // // ✅ Save token to localStorage
          localStorage.setItem("token", token);
          console.log("token is: ", token);
        
        toast.success("Login Success");
        navigate("/");
      }else{
        toast.error("Incorrect username or password");
      }
    } catch (error) {
      
      setError(
       
        error?.response?.data?.message || "An unexpected error occurred."
      );
       
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 xs:p-2">
    <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div>
        <img src={logo} alt="Saudi Creative Streams Logo" className="h-24 w-full mb-6 object-contain" />
      </div>
      <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">Login to your account</h2>

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yankees-blue focus:border-yankees-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-5">
          <div className="flex justify-between">
            <label htmlFor="password" className="block mb-2 text-sm font-montserrat-light text-gray-900 dark:text-white">
              Password
            </label>
            <a href="" className="text-xs font-montserrat-extralight text-blue-600 dark:text-blue-400">Forgot Password?</a>
          </div>
          <input
            type={visible ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yankees-blue focus:border-yankees-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {/* {visible ? (
            <AiOutlineEye
              className="absolute right-2 top-2 cursor-pointer"
              size={25}
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-2 top-2 cursor-pointer"
              size={25}
              onClick={() => setVisible(true)}
            />
          )} */}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-madder-lake hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-montserrat-light rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>

        {/* Separator */}
        <div className="mt-6 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs font-montserrat-extralight text-yankees-blue dark:text-white uppercase">DON'T HAVE AN ACCOUNT?</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        {/* Sign up link */}
        <div className="mt-6 flex items-center justify-center">
          <Link to="/signup" className="text-sm font-montserrat-extralight text-yankees-blue dark:text-blue-400">SignUp Here</Link>
        </div>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
