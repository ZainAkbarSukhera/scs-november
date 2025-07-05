import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
    {/* Navbar at the top */}
    <Navbar />
  
    {/* Main content */}
    <div className="flex-grow px-4 py-8 max-w-6xl mx-auto xs:px-2 xs:py-4">
      {/* Payment Section */}
      <div className="mt-16 xs:mt-20 bg-white shadow-md rounded-lg p-6 xs:p-4">
        <Payment />
      </div>
    </div>
  </div>
  );
}

export default PaymentPage;