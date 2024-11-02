import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow px-4 py-8 max-w-6xl mx-auto">
        <CheckoutSteps active={2} />
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;