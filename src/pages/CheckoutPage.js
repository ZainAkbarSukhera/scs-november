import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow px-2 py-4 max-w-auto mx-auto mt-28">
        <CheckoutSteps active={1} />
        <div className="mt-3 p-2">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;