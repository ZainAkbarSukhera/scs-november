// // import React from 'react';
// //
// // const SignUpComponent = () => {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-yankees-blue">
// //       <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
// //         <div className="bg-stone-50 rounded-lg shadow-lg p-8">
// //           <h2 className="text-2xl font-montserrat-regular text-yankees-blue text-center mb-6">Create Your Account</h2>

// //           <form className="space-y-6">
// //             {/* Name Fields */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (English)</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="John Doe"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (Arabic)</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="جون دو"
// //                 />
// //               </div>
// //             </div>

// //             {/* Username & Email */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Username</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="username123"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Email</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="email"
// //                   placeholder="email@example.com"
// //                 />
// //               </div>
// //             </div>

// //             {/* Password & Mobile */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Password</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="password"
// //                   placeholder="********"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Mobile Number</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="tel"
// //                   placeholder="+966 5X XXX XXXX"
// //                 />
// //               </div>
// //             </div>

// //             {/* City & Country */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">City</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="Riyadh"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Country</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="Saudi Arabia"
// //                 />
// //               </div>
// //             </div>

// //             {/* Profile Picture & Role */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Profile Picture</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="file"
// //                   accept="image/*"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Role</label>
// //                 <select
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                 >
// //                   <option value="">Select Role</option>
// //                   <option value="general">General User</option>
// //                   <option value="artist">Artist</option>
// //                   <option value="patron">Patron</option>
// //                   <option value="intermediary">Intermediary</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="mt-8">
// //               <button className="bg-fire-opal rounded text-white font-montserrat-light py-2 px-4 w-full rounded hover:bg-orange-400 transition duration-300">
// //                 Sign Up
// //               </button>
// //             </div>
// //           </form>

// //           {/* Already have an account */}
// //           <div className="mt-6 flex items-center justify-center">
// //             <p className="text-sm text-yankees-blue font-montserrat-light">Already have an account?</p>
// //             <a href="/login" className="text-sm text-red-600 ml-2 font-montserrat-light">Login</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUpComponent;


// // import React, { useState } from 'react';

// // const SignUpComponent = () => {
// //   const [role, setRole] = useState(''); // Track the selected role
// //   const [selectedInterests, setSelectedInterests] = useState([]); // Track selected interests for general user

// //   // Interest categories for General User
// //   const interestCategories = [
// //     'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media', 
// //     'Painting', 'Photography', 'Printmaking', 'Sculpture'
// //   ];

// //   // Function to handle interest selection
// //   const handleInterestClick = (interest) => {
// //     setSelectedInterests((prevInterests) =>
// //       prevInterests.includes(interest)
// //         ? prevInterests.filter((i) => i !== interest) // Deselect
// //         : [...prevInterests, interest] // Select
// //     );
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-yankees-blue">
// //       <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
// //         <div className="bg-stone-50 rounded-lg shadow-lg p-8">
// //           <h2 className="text-2xl font-montserrat-regular text-yankees-blue text-center mb-6">Create Your Account</h2>

// //           <form className="space-y-6">
// //             {/* Name Fields */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (English)</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="John Doe"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (Arabic)</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="جون دو"
// //                 />
// //               </div>
// //             </div>

// //             {/* Username & Email */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Username</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="username123"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Email</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="email"
// //                   placeholder="email@example.com"
// //                 />
// //               </div>
// //             </div>

// //             {/* Password & Mobile */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Password</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="password"
// //                   placeholder="********"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Mobile Number</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="tel"
// //                   placeholder="+966 5X XXX XXXX"
// //                 />
// //               </div>
// //             </div>

// //              {/* City & Country */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                <div>
// //                  <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">City</label>
// //              <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="Riyadh"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Country</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="text"
// //                   placeholder="Saudi Arabia"
// //                 />
// //               </div>
// //             </div>

// //             {/* Profile Picture & Role */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Profile Picture</label>
// //                 <input
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   type="file"
// //                   accept="image/*"
// //                 />
// //               </div>
// //               </div>


// //             {/* Role Selection */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Role</label>
// //                 <select
// //                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                   value={role}
// //                   onChange={(e) => setRole(e.target.value)}
// //                 >
// //                   <option value="">Select Role</option>
// //                   <option value="general">General User</option>
// //                   <option value="artist">Artist</option>
// //                   <option value="patron">Patron</option>
// //                   <option value="intermediary">Intermediary</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Additional Fields Based on Role */}
// //             {role === 'general' && (
// //               <div className="mt-4">
// //                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Select Interests</label>
// //                 <div className="flex flex-wrap gap-2">
// //                   {interestCategories.map((interest) => (
// //                     <button
// //                       key={interest}
// //                       type="button"
// //                       className={`py-1 px-4 border rounded-full ${
// //                         selectedInterests.includes(interest)
// //                           ? 'bg-red-600 text-white'
// //                           : 'bg-gray-200 text-gray-700'
// //                       }`}
// //                       onClick={() => handleInterestClick(interest)}
// //                     >
// //                       {interest}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             {role === 'artist' && (
// //               <div className="mt-4 space-y-4">
// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Biography (English)</label>
// //                   <textarea
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     placeholder="Enter your biography in English"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Biography (Arabic)</label>
// //                   <textarea
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     placeholder="Enter your biography in Arabic"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">National ID</label>
// //                   <input
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     type="text"
// //                     placeholder="Enter your National ID"
// //                   />
// //                 </div>

// //                 {/* Portfolio Upload */}
// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Upload Portfolio</label>
// //                   <input
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     type="file"
// //                     accept="image/*"
// //                     multiple
// //                   />
// //                 </div>
// //               </div>
// //             )}

// //             {role === 'patron' && (
// //               <div className="mt-4 space-y-4">
// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Organization Name (English)</label>
// //                   <input
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     type="text"
// //                     placeholder="Organization Name in English"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Authorized Representative Full Name</label>
// //                   <input
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     type="text"
// //                     placeholder="Full Name of Authorized Representative"
// //                   />
// //                 </div>

// //                 {/* Other patron profile fields can be added here similarly */}
// //               </div>
// //             )}

// //             {role === 'intermediary' && (
// //               <div className="mt-4 space-y-4">
// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Organization Name (English)</label>
// //                   <input
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     type="text"
// //                     placeholder="Organization Name in English"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Authorized Representative Full Name</label>
// //                   <input
// //                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
// //                     type="text"
// //                     placeholder="Full Name of Authorized Representative"
// //                   />
// //                 </div>

// //                 {/* Other intermediary profile fields can be added here similarly */}
// //               </div>
// //             )}

// //             {/* Submit Button */}
// //             <div className="flex justify-end">
// //               <button
// //                 type="submit"
// //                 className="bg-madder-lake text-white py-2 px-6 rounded-full hover:bg-red-600"
// //               >
// //                 Create Account
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUpComponent;

// import React, { useState } from 'react';
// import logo from '../assets/SCS Logo.png'; // Ensure you provide the correct path for the logo
// import { useNavigate } from 'react-router-dom';

// const SignUpComponent = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState(''); // Track the selected role
//   const [selectedInterests, setSelectedInterests] = useState([]); // Track selected interests for general user
//   const [formData, setFormData] = useState({
//     fullNameEnglish: '',
//     fullNameArabic: '',
//     username: '',
//     email: '',
//     password: '',
//     mobileNumber: '',
//     city: '',
//     country: '',
//   });

//   // Interest categories for General User
//   const interestCategories = [
//     'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media',
//     'Painting', 'Photography', 'Printmaking', 'Sculpture'
//   ];

//   // Function to handle interest selection
//   const handleInterestClick = (interest) => {
//     setSelectedInterests((prevInterests) =>
//       prevInterests.includes(interest)
//         ? prevInterests.filter((i) => i !== interest) // Deselect
//         : [...prevInterests, interest] // Select
//     );
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/");
//     // console.log('Form submitted:', formData, selectedInterests);
//     // Handle form submission logic (e.g., API call or validation)
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
//       <div className="max-w-screen-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-28">
//         <div>
//           <img
//             src={logo}
//             alt="Saudi Creative Streams Logo"
//             className="h-24 w-full mb-6 object-contain"
//           />
//         </div>
//         <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">
//           Create Your Account
//         </h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Name Fields */}
//           <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Full Name (English)
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="text"
//                 name="fullNameEnglish"
//                 value={formData.fullNameEnglish}
//                 onChange={handleInputChange}
//                 placeholder="John Doe"
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Full Name (Arabic)
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="text"
//                 name="fullNameArabic"
//                 value={formData.fullNameArabic}
//                 onChange={handleInputChange}
//                 placeholder="جون دو"
//               />
//             </div>
//           </div>

//           {/* Username & Email */}
//           <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Username
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 placeholder=""
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Email
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="email@example.com"
//               />
//             </div>
//           </div>

//           {/* Password & Mobile */}
//           <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Password
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder=""
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Mobile Number
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="tel"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleInputChange}
//                 placeholder="+966 5X XXX XXXX"
//               />
//             </div>
//           </div>

//           {/* City & Country */}
//           <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 City
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 placeholder="Riyadh"
//               />
//             </div>
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Country
//               </label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option value="" >Select a Country</option>
//                 <option>Afghanistan</option>
//                 <option>Albania</option>
//                 <option>Algeria</option>
//                 <option>Andorra</option>
//                 <option>Angola</option>
//                 <option>Antigua and Barbuda</option>
//                 <option>Argentina</option>
//                 <option>Armenia</option>
//                 <option>Australia</option>
//                 <option>Austria</option>
//                 <option>Azerbaijan</option>
//                 <option>Bahamas</option>
//                 <option>Bahrain</option>
//                 <option>Bangladesh</option>
//                 <option>Barbados</option>
//                 <option>Belarus</option>
//                 <option>Belgium</option>
//                 <option>Belize</option>
//                 <option>Benin</option>
//                 <option>Bhutan</option>
//                 <option>Bolivia</option>
//                 <option>Bosnia and Herzegovina</option>
//                 <option>Botswana</option>
//                 <option>Brazil</option>
//                 <option>Brunei</option>
//                 <option>Bulgaria</option>
//                 <option>Burkina Faso</option>
//                 <option>Burundi</option>
//                 <option>Cabo Verde</option>
//                 <option>Cambodia</option>
//                 <option>Cameroon</option>
//                 <option>Canada</option>
//                 <option>Central African Republic</option>
//                 <option>Chad</option>
//                 <option>Chile</option>
//                 <option>China</option>
//                 <option>Colombia</option>
//                 <option>Comoros</option>
//                 <option>Congo (Congo-Brazzaville)</option>
//                 <option>Costa Rica</option>
//                 <option>Croatia</option>
//                 <option>Cuba</option>
//                 <option>Cyprus</option>
//                 <option>Czechia (Czech Republic)</option>
//                 <option>Democratic Republic of the Congo</option>
//                 <option>Denmark</option>
//                 <option>Djibouti</option>
//                 <option>Dominica</option>
//                 <option>Dominican Republic</option>
//                 <option>Ecuador</option>
//                 <option>Egypt</option>
//                 <option>El Salvador</option>
//                 <option>Equatorial Guinea</option>
//                 <option>Eritrea</option>
//                 <option>Estonia</option>
//                 <option>Eswatini (fmr. "Swaziland")</option>
//                 <option>Ethiopia</option>
//                 <option>Fiji</option>
//                 <option>Finland</option>
//                 <option>France</option>
//                 <option>Gabon</option>
//                 <option>Gambia</option>
//                 <option>Georgia</option>
//                 <option>Germany</option>
//                 <option>Ghana</option>
//                 <option>Greece</option>
//                 <option>Grenada</option>
//                 <option>Guatemala</option>
//                 <option>Guinea</option>
//                 <option>Guinea-Bissau</option>
//                 <option>Guyana</option>
//                 <option>Haiti</option>
//                 <option>Honduras</option>
//                 <option>Hungary</option>
//                 <option>Iceland</option>
//                 <option>India</option>
//                 <option>Indonesia</option>
//                 <option>Iran</option>
//                 <option>Iraq</option>
//                 <option>Ireland</option>
//                 <option>Israel</option>
//                 <option>Italy</option>
//                 <option>Jamaica</option>
//                 <option>Japan</option>
//                 <option>Jordan</option>
//                 <option>Kazakhstan</option>
//                 <option>Kenya</option>
//                 <option>Kiribati</option>
//                 <option>Kuwait</option>
//                 <option>Kyrgyzstan</option>
//                 <option>Laos</option>
//                 <option>Latvia</option>
//                 <option>Lebanon</option>
//                 <option>Lesotho</option>
//                 <option>Liberia</option>
//                 <option>Libya</option>
//                 <option>Liechtenstein</option>
//                 <option>Lithuania</option>
//                 <option>Luxembourg</option>
//                 <option>Madagascar</option>
//                 <option>Malawi</option>
//                 <option>Malaysia</option>
//                 <option>Maldives</option>
//                 <option>Mali</option>
//                 <option>Malta</option>
//                 <option>Marshall Islands</option>
//                 <option>Mauritania</option>
//                 <option>Mauritius</option>
//                 <option>Mexico</option>
//                 <option>Micronesia</option>
//                 <option>Moldova</option>
//                 <option>Monaco</option>
//                 <option>Mongolia</option>
//                 <option>Montenegro</option>
//                 <option>Morocco</option>
//                 <option>Mozambique</option>
//                 <option>Myanmar (formerly Burma)</option>
//                 <option>Namibia</option>
//                 <option>Nauru</option>
//                 <option>Nepal</option>
//                 <option>Netherlands</option>
//                 <option>New Zealand</option>
//                 <option>Nicaragua</option>
//                 <option>Niger</option>
//                 <option>Nigeria</option>
//                 <option>North Korea</option>
//                 <option>North Macedonia</option>
//                 <option>Norway</option>
//                 <option>Oman</option>
//                 <option>Pakistan</option>
//                 <option>Palau</option>
//                 <option>Panama</option>
//                 <option>Papua New Guinea</option>
//                 <option>Paraguay</option>
//                 <option>Peru</option>
//                 <option>Philippines</option>
//                 <option>Poland</option>
//                 <option>Portugal</option>
//                 <option>Qatar</option>
//                 <option>Romania</option>
//                 <option>Russia</option>
//                 <option>Rwanda</option>
//                 <option>Saint Kitts and Nevis</option>
//                 <option>Saint Lucia</option>
//                 <option>Saint Vincent and the Grenadines</option>
//                 <option>Samoa</option>
//                 <option>San Marino</option>
//                 <option>Sao Tome and Principe</option>
//                 <option>Saudi Arabia</option>
//                 <option>Senegal</option>
//                 <option>Serbia</option>
//                 <option>Seychelles</option>
//                 <option>Sierra Leone</option>
//                 <option>Singapore</option>
//                 <option>Slovakia</option>
//                 <option>Slovenia</option>
//                 <option>Solomon Islands</option>
//                 <option>Somalia</option>
//                 <option>South Africa</option>
//                 <option>South Korea</option>
//                 <option>South Sudan</option>
//                 <option>Spain</option>
//                 <option>Sri Lanka</option>
//                 <option>Sudan</option>
//                 <option>Suriname</option>
//                 <option>Sweden</option>
//                 <option>Switzerland</option>
//                 <option>Syria</option>
//                 <option>Taiwan</option>
//                 <option>Tajikistan</option>
//                 <option>Tanzania</option>
//                 <option>Thailand</option>
//                 <option>Timor-Leste</option>
//                 <option>Togo</option>
//                 <option>Tonga</option>
//                 <option>Trinidad and Tobago</option>
//                 <option>Tunisia</option>
//                 <option>Turkey</option>
//                 <option>Turkmenistan</option>
//                 <option>Tuvalu</option>
//                 <option>Uganda</option>
//                 <option>Ukraine</option>
//                 <option>United Arab Emirates</option>
//                 <option>United Kingdom</option>
//                 <option>United States</option>
//                 <option>Uruguay</option>
//                 <option>Uzbekistan</option>
//                 <option>Vanuatu</option>
//                 <option>Vatican City</option>
//                 <option>Venezuela</option>
//                 <option>Vietnam</option>
//                 <option>Yemen</option>
//                 <option>Zambia</option>
//                 <option>Zimbabwe</option>
//                 </select>
//             </div>
//           </div>


//           {/* Profile Picture & Role */}
         
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Profile Picture
//               </label>
//               <input
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 type="file"
//                 accept="image/*"
//               />
//             </div> */}
//              <form class="max-w-xl w-full mx-auto ">
//               <label class="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white" for="user_avatar">Upload Profile Picture</label>
//               <input class="block w-full text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
//             </form>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Role
//               </label>
//               <select
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//               >
//                 <option value="">Select Role</option>
//                 <option value="general">General User</option>
//                 <option value="artist">Artist</option>
//                 <option value="patron">Patron</option>
//                 <option value="intermediary">Intermediary</option>
//               </select>
//             </div>

//           </div>

//           {/* Role Selection */}
//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           
//           </div> */}

//         {/* Interests (for General User) */}
//         {role === 'General User' && (
//             <div>
//               <h3 className="text-lg font-semibold mb-3">Select Your Interests</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {interestCategories.map((interest) => (
//                   <button
//                     key={interest}
//                     onClick={() => handleInterestClick(interest)}
//                     className={`p-2 rounded-lg border ${
//                       selectedInterests.includes(interest)
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
//                     }`}
//                   >
//                     {interest}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}


//           {role === 'artist' && (
//             <div className="mt-4 space-y-4">
//               <div>
//                 <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                   Biography (English)
//                 </label>
//                 <textarea
//                   className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                   placeholder="Enter your biography in English"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                   Biography (Arabic)
//                 </label>
//                 <textarea
//                   className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                   placeholder="Enter your biography in Arabic"
//                 />
//               </div>
//             </div>
//           )}

//     {/* Submit Button */}
//     <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full bg-fire-opal text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition"
//             >
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpComponent;

import TextInput from "../components/TextInput/TextInput";
import React, { useState, useMemo  } from 'react';
import logo from '../assets/SCS Logo.png'; // Ensure you provide the correct path for the logo
import { useNavigate } from 'react-router-dom';
import { resetUser, setUser } from "../components/redux/actions/user";
import { useDispatch } from "react-redux";
import { signup } from "../api/user";
import {uploadFileToS3} from "../utils/s3Uploader";
import { toast } from "react-toastify";
import { Country, City } from "country-state-city";

const SignUpComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [role, setRole] = useState('');
  const [Error, setError] = useState("");
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  
  const interestCategories = [
    'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media',
    'Painting', 'Photography', 'Printmaking', 'Sculpture'
  ];
  
  const [formValues, setFormValues] = useState({
    fullNameEnglish: '',
    fullNameArabic: '',
    username: '',
    email: '',
    password: '',
    mobileNumber: '',
    city: '',
    country: '',
    profilePicture: null,
    role: '',
    interests: selectedInterests,
    artistLicense: null,
    biographyEnglish: '',
    biographyArabic: '',
    fieldOfExpertise:'',
  });

  // const handleSignup = async () => {
  //   const { location, base64String } = await uploadFileToS3(formValues.profilePicture, 'profile-images/');
  //   const data = {
  //     fullNameEnglish: formValues.fullNameEnglish,
  //     fullNameArabic: formValues.fullNameArabic,
  //     username: formValues.username,
  //     password: formValues.password,
  //     email: formValues.email,
  //     mobileNumber: formValues.mobileNumber,
  //     country: formValues.country,
  //     city: formValues.city,
  //     interests: formValues.role === 'user' ? formValues.interests : [],
  //     role: formValues.role,
  //     profilePicture: base64String,
  //   };
  //   console.log("Dispatching user");
  //     dispatch(setUser(data));
  //   try {
  //     console.log("Sending data");
  //     console.log("PP Location",location);
  //     const response = await signup(data);
  //     console.log("response",response);
  //     console.log("response Status",response.status);
      

      
  //       // const user = {
  //       //   _id: response.data.user._id,
  //       //   fullNameEnglish: response.data.fullNameEnglish,
  //       //   fullNameArabic: response.data.fullNameArabic,
  //       //   username: response.data.username,
  //       //   password: response.data.password,
  //       //   email: response.data.email,
  //       //   mobileNumber: response.data.mobileNumber,
  //       //   country: response.data.country,
  //       //   city: response.data.city,
  //       //   interests: response.data.role === 'user' ? response.data.interests : [],
  //       //   role: response.data.role,
  //       //   profilePicture: response.data.profilePicture,
  //       // };
  //       // console.log("Dispatching user");
  //       // dispatch(setUser(user));
  //       console.log("Going to navigate");
         

  //   } catch (error) {
  //     if (error.response && error.response.data && error.response.data.message) {
  //       setError(error.response.data.message);
  //     } else {
  //       setError("An unexpected error occurred.");
  //     }
  //   }

  //    toast.success("You have successfully created your accout");
  //     navigate("/login");
  // };

    const handleSignup = async () => {
      var response=[];
      dispatch(resetUser());
    try {
      // let profilePictureString='';
      // const { location} = await uploadFileToS3(formValues.profilePicture, 'profile-images/');
      // profilePictureString=location;
      // console.log("Profie Picture String is ", profilePictureString);

      //  let artistString="";
      // if(formValues.role==='artist'){
      //   console.log("Uploading artist License")
      //   const { location } = await uploadFileToS3(formValues.artistLicense, 'artist-licenses/');
      //   console.log(location);
      //   artistString=location;
      //   console.log("Artist stored as ",artistString);
      // }

      let profilePictureUrl = null; // Will store the S3 URL
      let artistLicenseUrl = null; // Will store the S3 URL

      // Handle Profile Picture upload
      if (formValues.profilePicture instanceof File) {
        console.log("Uploading profile picture...");
        const location = await uploadFileToS3(formValues.profilePicture, 'profile-images/');
        if (location) {
          profilePictureUrl = location;
          console.log("Profile Picture S3 URL:", profilePictureUrl);
        } else {
          toast.error("Failed to upload profile picture to S3.");
          setError("Failed to upload profile picture.");
          return; // Stop signup if image upload fails
        }
      }

      // Handle Artist License upload (only if role is artist)
      if (formValues.role === 'artist' && formValues.artistLicense instanceof File) {
        console.log("Uploading artist license...");
        const location2 = await uploadFileToS3(formValues.artistLicense, 'artist-licenses/');
        if (location2) {
          artistLicenseUrl = location2;
          console.log("Artist License S3 URL:", artistLicenseUrl);
        } else {
          toast.error("Failed to upload artist license to S3.");
          setError("Failed to upload artist license.");
          return; // Stop signup if license upload fails
        }
      }
     

      
       const dataToSend = {
        fullNameEnglish: formValues.fullNameEnglish,
        fullNameArabic: formValues.fullNameArabic,
        username: formValues.username,
        password: formValues.password,
        email: formValues.email,
        mobileNumber: formValues.mobileNumber,
        country: formValues.country,
        city: formValues.city,
        interests: formValues.role === 'user' ? formValues.interests : [],
        role: formValues.role,
        profilePicture: profilePictureUrl, // Send S3 URL to backend
        artistLicense: artistLicenseUrl, // Send S3 URL to backend
        biographyEnglish: formValues.biographyEnglish,
        biographyArabic: formValues.biographyArabic,
        fieldOfExpertise: formValues.fieldOfExpertise,
      };

      // Clean up dataToSend based on role before sending to backend
      if (dataToSend.role === 'user') {
        delete dataToSend.biographyEnglish;
        delete dataToSend.biographyArabic;
        delete dataToSend.artistLicense;
        delete dataToSend.fieldOfExpertise;
      }

      console.log("Dispatching user",dataToSend);
      // dispatch(setUser(dataToSend));

      response = await signup(dataToSend);
      console.log("response", response);

      if (response.status === 200 || response.status === 201) {
        toast.success("You have successfully created your account");
         dispatch(setUser({
          ...dataToSend, // Send the S3 URLs to Redux state
          // Assuming _id and auth might come from response or are handled elsewhere
          _id: response.data?._id || '', // Populate _id if returned by backend
          auth: false, // Assuming auth status is set on successful signup
        }));
        navigate("/login");
      } else {
         console.log("i am here");
        toast.error(response.error);
        throw new Error("Signup failed, please try again");
      }
    } catch (error) {
      console.error("Signup error:", error);
       setError(error.response.data.error);
       toast(error.response.data.error);
        // toast.error(error.response.data.error);
        // console.log("i am here");
        // toast.error(response.error)

    //   if (error.response?.data?.error) {
    //     setError(error.response.data.error);
    //     toast.error(error.response.data.error);
    //   } else {
    //     // setError("A user already exists with the provided credentials");
    //     // toast.error("A user already exists with the provided credentials");
    //     setError(error.response.data.error);
    //     toast.error(error.response.data.error);
    //   }
    }
  };


  const handleInterestClick = (interest) => {
    let updatedInterests;
    if (selectedInterests.includes(interest)) {
      updatedInterests = selectedInterests.filter((i) => i !== interest);
    } else {
      updatedInterests = [...selectedInterests, interest];
    }
    setSelectedInterests(updatedInterests);
    setFormValues(prev => ({ ...prev, interests: updatedInterests }));
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      profilePicture: e.target.files[0],
    
    });
    console.log(formValues.profilePicture); // should be a File object
    console.log(typeof(formValues.profilePicture)); // should be true
  };

   const handleLicenseChange = (e) => {
    setFormValues({
      ...formValues,
    artistLicense: e.target.files[0],
    
    });
    console.log("This is the formValue for artistLicense",formValues.artistLicense); // should be a File object
    console.log(typeof(formValues.artistLicense)); // should be true
  };

  const uniqueCities = useMemo(() => {
    const citiesOfCountry = City.getCitiesOfCountry(formValues.country);

    if (!citiesOfCountry) {
      return []; // Return empty array if no cities are found
    }

    // Use a Set to store unique city names
    const cityNames = new Set();
    citiesOfCountry.forEach(city => {
      cityNames.add(city.name);
    });

    // Convert Set back to an array and sort alphabetically for better UX
    return Array.from(cityNames).sort();
  }, [formValues.country]); // Recalculate only when the selected country changes


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
      <div className="max-w-screen-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-28">
        <div>
          <img
            src={logo}
            alt="Saudi Creative Streams Logo"
            className="h-24 w-full mb-6 object-contain"
          />
        </div>
        <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">
          Create Your Account
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Full Name (English)
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Full Name (English)"
                name="fullNameEnglish"
                value={formValues.fullNameEnglish}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Full Name (Arabic)
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Full Name (Arabic)"
                name="fullNameArabic"
                value={formValues.fullNameArabic}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Username
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Username"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Password
              </label>
               <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                type="password"
                onFocus={() => setShowPasswordHint(true)}
                onBlur={() => setShowPasswordHint(false)}
              />

              {showPasswordHint && (
                <p className="text-sm text-red-600 opacity-60 mt-1">
                  Password must contain at least one uppercase letter.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Email
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                type="email"
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Mobile Number
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Mobile Number"
                name="mobileNumber"
                value={formValues.mobileNumber}
                onChange={handleInputChange}
                type="tel"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Country
              </label>
              <select
                name="country"
                value={formValues.country}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select your Country</option>
                 {Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
              ))}
              </select>
            </div>

            {/* <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                City
              </label>
              <select
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select your City</option>
                 {City.getCitiesOfCountry(formValues.country)?.map((item, index) => (
                  <option key={`${item.name}-${item.stateCode || index}`} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
        <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
          City
        </label>
        <select
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Select your City</option>
          {/* Render options from the uniqueCities array */}
          {uniqueCities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
                Upload Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
                onChange={handleFileChange}
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Role
              </label>
              <select
                name="role"
                value={formValues.role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setFormValues(prev => ({ ...prev, role: e.target.value }));
                  if (e.target.value !== 'user') setSelectedInterests([]);
                }}
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
              >
                <option value="">Select Role</option>
                <option value="user">General User</option>
                <option value="artist">Artist</option>
                {/* <option value="patron">Patron</option>
                <option value="intermediary">Intermediary</option> */}
              </select>
            </div>
          </div>

          {role === 'user' && (
            <div>
              <label className="block text-sm font-montserrat-light text-yankees-blue dark:text-white mb-2">Select Your Interests</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interestCategories.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestClick(interest)}
                    className={`border rounded px-3 py-1 text-sm ${formValues.interests.includes(interest)
                      ? 'bg-fire-opal text-white'
                      : 'bg-white text-yankees-blue border-gray-300 dark:bg-gray-700 dark:text-white'}`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {role === 'artist' && (
            <div className="mt-4 space-y-4">

               <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Field of Expertise
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                label="Field of Expertise"
                name="fieldOfExpertise"
                value={formValues.fieldOfExpertise}
                onChange={handleInputChange}
              />
            </div>

             <div>
              <label className="block text-sm text-yankees-blue dark:text-white mb-2">
                Biography (English)
              </label>
              <textarea
                name="biographyEnglish"
                value={formValues.biographyEnglish || null}
                onChange={handleInputChange}
                rows={4}
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                placeholder="Enter your biography in English"
              />
            </div>

            <div>
              <label className="block text-sm text-yankees-blue dark:text-white mb-2">
                Biography (Arabic)
              </label>
              <textarea
                name="biographyArabic"
                value={formValues.biographyArabic || null}
                onChange={handleInputChange}
                rows={4}
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                placeholder="Enter your biography in Arabic"
              />
            </div>
              <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
                Upload Artist License 
              </label>
              <input
                type="file"
                name="Artist License"
                className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
                onChange={handleLicenseChange}
              />

            </div>

      

          )}

          <div className="mt-6">

            {/* {Error && (
              <div className="text-red-600 text-sm font-medium text-center mb-2">
                {Error}
              </div>
            )} */}
                      
            <button
              type="button"
              className="w-full bg-fire-opal text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition"
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
