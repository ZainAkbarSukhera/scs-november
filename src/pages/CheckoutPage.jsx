// import React from 'react';
// import Navbar from '../components/NavigationBar/Navbar';
// import CheckoutSteps from "../components/Checkout/CheckoutSteps";
// import Checkout from "../components/Checkout/Checkout";

// const CheckoutPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//   {/* Navbar */}
//   <Navbar />

//   {/* Main content area */}
//   <div className="flex-grow px-2 py-4 mx-auto mt-12 xs:mt-20 sm:mt-28 max-w-full xs:max-w-screen-sm">
//     {/* Checkout steps and form */}
//     <div className="p-2 bg-white rounded shadow-sm border border-gray-200 xs:p-4">
//       <Checkout />
//     </div>
//   </div>
// </div>
//   );
// }

// export default CheckoutPage;


import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import CheckoutSteps from "../components/Checkout/CheckoutSteps"; // Make sure CheckoutSteps is rendered somewhere, even if not explicitly shown in the snippet
import Checkout from "../components/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> {/* Added a subtle background for professionalism */}
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      {/* Removed px-2 py-4, increased max-width to lg */}
      <div className="flex-grow mx-auto mt-12 xs:mt-20 sm:mt-28 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"> {/* Adjusted max-width for better responsiveness and wider layout */}
        {/* Checkout steps (consider placing this outside the form container if it spans the full width) */}
        {/* For now, placing it inside, but you might want to adjust its placement */}
        {/* <div className="mb-8"> Added margin bottom for spacing
          <CheckoutSteps active={1} /> Assuming 'active' prop is used
        </div> */}


        {/* Checkout form container */}
        {/* Keeping existing padding here as it's internal to the form card */}
        <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-200 sm:p-6 lg:p-2"> {/* Increased internal padding, rounded-lg, shadow-lg for professional look */}
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;