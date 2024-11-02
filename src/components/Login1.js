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

import React from 'react';
import logo from '../assets/SCS Logo.png';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div>
          <img src={logo} alt="Saudi Creative Streams Logo" className="h-24 w-full mb-6 object-contain" />
        </div>
        <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">Login to your account</h2>
        
        <form className="max-w-sm mx-auto">
          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yankees-blue focus:border-yankees-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <div className="flex justify-between">
              <label htmlFor="password" className="block mb-2 text-sm font-montserrat-light text-gray-900 dark:text-white">
                Your Password
              </label>
              <a href="" className="text-xs font-montserrat-extralight text-blue-600 dark:text-blue-400">Forgot Password?</a>
            </div>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yankees-blue focus:border-yankees-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
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
            <a href="/signup" className="text-sm font-montserrat-extralight text-yankees-blue dark:text-blue-400">SignUp Here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
