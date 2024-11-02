// import React from 'react';
//
// const SignUpComponent = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-yankees-blue">
//       <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         <div className="bg-stone-50 rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-montserrat-regular text-yankees-blue text-center mb-6">Create Your Account</h2>

//           <form className="space-y-6">
//             {/* Name Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (English)</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (Arabic)</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="جون دو"
//                 />
//               </div>
//             </div>

//             {/* Username & Email */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Username</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="username123"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Email</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="email"
//                   placeholder="email@example.com"
//                 />
//               </div>
//             </div>

//             {/* Password & Mobile */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Password</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="password"
//                   placeholder="********"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Mobile Number</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="tel"
//                   placeholder="+966 5X XXX XXXX"
//                 />
//               </div>
//             </div>

//             {/* City & Country */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">City</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="Riyadh"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Country</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="Saudi Arabia"
//                 />
//               </div>
//             </div>

//             {/* Profile Picture & Role */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Profile Picture</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="file"
//                   accept="image/*"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Role</label>
//                 <select
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                 >
//                   <option value="">Select Role</option>
//                   <option value="general">General User</option>
//                   <option value="artist">Artist</option>
//                   <option value="patron">Patron</option>
//                   <option value="intermediary">Intermediary</option>
//                 </select>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-8">
//               <button className="bg-fire-opal rounded text-white font-montserrat-light py-2 px-4 w-full rounded hover:bg-orange-400 transition duration-300">
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           {/* Already have an account */}
//           <div className="mt-6 flex items-center justify-center">
//             <p className="text-sm text-yankees-blue font-montserrat-light">Already have an account?</p>
//             <a href="/login" className="text-sm text-red-600 ml-2 font-montserrat-light">Login</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpComponent;


// import React, { useState } from 'react';

// const SignUpComponent = () => {
//   const [role, setRole] = useState(''); // Track the selected role
//   const [selectedInterests, setSelectedInterests] = useState([]); // Track selected interests for general user

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

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-yankees-blue">
//       <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         <div className="bg-stone-50 rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-montserrat-regular text-yankees-blue text-center mb-6">Create Your Account</h2>

//           <form className="space-y-6">
//             {/* Name Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (English)</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Full Name (Arabic)</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="جون دو"
//                 />
//               </div>
//             </div>

//             {/* Username & Email */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Username</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="username123"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Email</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="email"
//                   placeholder="email@example.com"
//                 />
//               </div>
//             </div>

//             {/* Password & Mobile */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Password</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="password"
//                   placeholder="********"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Mobile Number</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="tel"
//                   placeholder="+966 5X XXX XXXX"
//                 />
//               </div>
//             </div>

//              {/* City & Country */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                <div>
//                  <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">City</label>
//              <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="Riyadh"
//                 />
//               </div>

//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Country</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="text"
//                   placeholder="Saudi Arabia"
//                 />
//               </div>
//             </div>

//             {/* Profile Picture & Role */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Profile Picture</label>
//                 <input
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   type="file"
//                   accept="image/*"
//                 />
//               </div>
//               </div>


//             {/* Role Selection */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Role</label>
//                 <select
//                   className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                 >
//                   <option value="">Select Role</option>
//                   <option value="general">General User</option>
//                   <option value="artist">Artist</option>
//                   <option value="patron">Patron</option>
//                   <option value="intermediary">Intermediary</option>
//                 </select>
//               </div>
//             </div>

//             {/* Additional Fields Based on Role */}
//             {role === 'general' && (
//               <div className="mt-4">
//                 <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Select Interests</label>
//                 <div className="flex flex-wrap gap-2">
//                   {interestCategories.map((interest) => (
//                     <button
//                       key={interest}
//                       type="button"
//                       className={`py-1 px-4 border rounded-full ${
//                         selectedInterests.includes(interest)
//                           ? 'bg-red-600 text-white'
//                           : 'bg-gray-200 text-gray-700'
//                       }`}
//                       onClick={() => handleInterestClick(interest)}
//                     >
//                       {interest}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {role === 'artist' && (
//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Biography (English)</label>
//                   <textarea
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     placeholder="Enter your biography in English"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Biography (Arabic)</label>
//                   <textarea
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     placeholder="Enter your biography in Arabic"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">National ID</label>
//                   <input
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     type="text"
//                     placeholder="Enter your National ID"
//                   />
//                 </div>

//                 {/* Portfolio Upload */}
//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Upload Portfolio</label>
//                   <input
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     type="file"
//                     accept="image/*"
//                     multiple
//                   />
//                 </div>
//               </div>
//             )}

//             {role === 'patron' && (
//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Organization Name (English)</label>
//                   <input
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     type="text"
//                     placeholder="Organization Name in English"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Authorized Representative Full Name</label>
//                   <input
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     type="text"
//                     placeholder="Full Name of Authorized Representative"
//                   />
//                 </div>

//                 {/* Other patron profile fields can be added here similarly */}
//               </div>
//             )}

//             {role === 'intermediary' && (
//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Organization Name (English)</label>
//                   <input
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     type="text"
//                     placeholder="Organization Name in English"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-yankees-blue text-sm font-montserrat-light mb-2">Authorized Representative Full Name</label>
//                   <input
//                     className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full"
//                     type="text"
//                     placeholder="Full Name of Authorized Representative"
//                   />
//                 </div>

//                 {/* Other intermediary profile fields can be added here similarly */}
//               </div>
//             )}

//             {/* Submit Button */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-madder-lake text-white py-2 px-6 rounded-full hover:bg-red-600"
//               >
//                 Create Account
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpComponent;

import React, { useState } from 'react';
import logo from '../assets/SCS Logo.png'; // Ensure you provide the correct path for the logo

const SignUpComponent = () => {
  const [role, setRole] = useState(''); // Track the selected role
  const [selectedInterests, setSelectedInterests] = useState([]); // Track selected interests for general user

  // Interest categories for General User
  const interestCategories = [
    'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media',
    'Painting', 'Photography', 'Printmaking', 'Sculpture'
  ];

  // Function to handle interest selection
  const handleInterestClick = (interest) => {
    setSelectedInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest) // Deselect
        : [...prevInterests, interest] // Select
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2 ">
      <div className="max-w-screen-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-28">
        <div>
          <img src={logo} alt="Saudi Creative Streams Logo" className="h-24 w-full mb-6 object-contain" />
        </div>
        <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">
          Create Your Account
        </h2>

        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Full Name (English)
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="text"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Full Name (Arabic)
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="text"
                placeholder="جون دو"
              />
            </div>
          </div>

          {/* Username & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Username
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="text"
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Email
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="email"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Password & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Password
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="password"
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Mobile Number
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="tel"
                placeholder="+966 5X XXX XXXX"
              />
            </div>
          </div>

          {/* City & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                City
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="text"
                placeholder="Riyadh"
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Country
              </label>
              {/* <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="text"
                placeholder="Saudi Arabia"
              /> */}
              <form class="max-w-xl w-full mx-auto text-yankees-blue">
              {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label> */}
              <select id="countries" class="bg-gray-50  border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" >Select a Country</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Brazil</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Cabo Verde</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Congo (Congo-Brazzaville)</option>
                <option>Costa Rica</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cyprus</option>
                <option>Czechia (Czech Republic)</option>
                <option>Democratic Republic of the Congo</option>
                <option>Denmark</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Eswatini (fmr. "Swaziland")</option>
                <option>Ethiopia</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Greece</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Honduras</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kiribati</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Marshall Islands</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mexico</option>
                <option>Micronesia</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar (formerly Burma)</option>
                <option>Namibia</option>
                <option>Nauru</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>North Korea</option>
                <option>North Macedonia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Palau</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Qatar</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>Samoa</option>
                <option>San Marino</option>
                <option>Sao Tome and Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Solomon Islands</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Korea</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Tonga</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Tuvalu</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Vanuatu</option>
                <option>Vatican City</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </select>
            </form>

            </div>
          </div>

          {/* Profile Picture & Role */}
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Profile Picture
              </label>
              <input
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                type="file"
                accept="image/*"
              />
            </div> */}
             <form class="max-w-xl w-full mx-auto ">
              <label class="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white" for="user_avatar">Upload Profile Picture</label>
              <input class="block w-full text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
            </form>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Role
              </label>
              <select
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="general">General User</option>
                <option value="artist">Artist</option>
                <option value="patron">Patron</option>
                <option value="intermediary">Intermediary</option>
              </select>
            </div>

          </div>

          {/* Role Selection */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           
          </div> */}

          {/* Additional Fields Based on Role */}
          {role === 'general' && (
            <div className="mt-4">
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Select Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {interestCategories.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    className={`py-1 px-4 border rounded-full ${
                      selectedInterests.includes(interest)
                        ? 'bg-fire-opal text-white'
                        : 'bg-gray-200 dark:bg-gray-600 dark:text-white text-gray-700'
                    }`}
                    onClick={() => handleInterestClick(interest)}
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
                  Biography (English)
                </label>
                <textarea
                  className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                  placeholder="Enter your biography in English"
                />
              </div>

              <div>
                <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                  Biography (Arabic)
                </label>
                <textarea
                  className="bg-gray-50 dark:bg-gray-700 dark:text-white text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                  placeholder="Enter your biography in Arabic"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6 p-8">
            <button
              type="submit"
              className="w-full justify-center bg-fire-opal text-white py-2 rounded-lg font-montserrat-light hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
