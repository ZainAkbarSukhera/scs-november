// import React from 'react';

// const CheckoutSteps = ({ active }) => {
//   return (
//     <div className='w-full flex justify-center mb-8'>
//       <div className="w-[90%] max-w-4xl flex items-center">
//         {/* Step 1 */}
//         <div className="flex items-center">
//           <div className={`px-4 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${active >= 1 ? 'bg-[#f63b60]' : 'bg-[#FDE1E6]'}`}>
//             <span className={`text-[16px] font-semibold ${active >= 1 ? 'text-white' : '#f63b60'}`}>1. Shipping</span>
//           </div>
//           <div className={`w-8 h-1 transition-colors duration-300 ${active >= 1 ? 'bg-[#f63b60]' : 'bg-[#FDE1E6]'}`} />
//         </div>

//         {/* Step 2 */}
//         <div className="flex items-center mx-4">
//           <div className={`px-4 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${active >= 2 ? 'bg-[#f63b60]' : 'bg-[#FDE1E6]'}`}>
//             <span className={`text-[16px] font-semibold ${active >= 2 ? 'text-white' : '#f63b60'}`}>2. Payment</span>
//           </div>
//           <div className={`w-8 h-1 transition-colors duration-300 ${active >= 2 ? 'bg-[#f63b60]' : 'bg-[#FDE1E6]'}`} />
//         </div>

//         {/* Step 3 */}
//         <div className="flex items-center">
//           <div className={`px-4 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${active >= 3 ? 'bg-[#f63b60]' : 'bg-[#FDE1E6]'}`}>
//             <span className={`text-[16px] font-semibold ${active >= 3 ? 'text-white' : '#f63b60'}`}>3. Success</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutSteps;

import React from 'react';

const CheckoutSteps = ({ active }) => {
  return (
    <div className='w-full flex justify-center mb-8'>
      <div className="w-[90%] max-w-4xl flex items-center">
        {/* Step-1 */}
        <div className="flex items-center">
          <div className={`px-4 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${active >= 1 ? 'bg-madder-lake' : 'bg-[#FDE1E6]'}`}>
            <span className={`text-[16px] font-semibold ${active >= 1 ? 'text-white' : 'text-madder-lake'}`}>1. Shipping</span>
          </div>
          {active >= 1 && <div className={`w-8 h-1 transition-colors duration-300 ${active >= 2 ? 'bg-madder-lake' : 'bg-[#FDE1E6]'}`} />}
        </div>

        {/* Step 2 */}
        <div className="flex items-center mx-4">
          <div className={`px-4 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${active >= 2 ? 'bg-madder-lake' : 'bg-[#FDE1E6]'}`}>
            <span className={`text-[16px] font-semibold ${active >= 2 ? 'text-white' : 'text-madder-lake'}`}>2. Payment</span>
          </div>
          {active >= 2 && <div className={`w-8 h-1 transition-colors duration-300 ${active >= 3 ? 'bg-madder-lake' : 'bg-[#FDE1E6]'}`} />}
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div className={`px-4 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${active >= 3 ? 'bg-madder-lake' : 'bg-[#FDE1E6]'}`}>
            <span className={`text-[16px] font-semibold ${active >= 3 ? 'text-white' : 'text-madder-lake'}`}>3. Success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;