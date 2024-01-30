import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobile, faWallet, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleUPIPayment = () => {
    setPaymentMethod('UPI');
  };

  const handlePayPalPayment = () => {
    setPaymentMethod('PayPal');
  };

  const handleWalletPayment = () => {
    setPaymentMethod('Wallet');
  };

  const handleCODPayment = () => {
    setPaymentMethod('Cash on Delivery');
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded-md shadow-md flex flex-col">
      <h2 className="text-2xl text-red-500 font-bold mb-4">Select Payment Method</h2>
      <div className="mb-4 flex items-center pointer-events-none opacity-50">
        <input type="radio" name="paymentMethod" id="upi" onChange={handleUPIPayment} className="mr-2" />
        <label htmlFor="upi" className="cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faMobile} className="mr-2" />
          UPI
        </label>
      </div>
      <div className="mb-4 flex items-center pointer-events-none opacity-50">
        <input type="radio" name="paymentMethod" id="paypal" onChange={handlePayPalPayment} className="mr-2" />
        <label htmlFor="paypal" className="cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
          PayPal
        </label>
      </div>

      <div className="mb-4 flex items-center pointer-events-none opacity-50">
        <input type="radio" name="paymentMethod" id="wallet" onChange={handleWalletPayment} className="mr-2" />
        <label htmlFor="wallet" className="cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faWallet} className="mr-2" />
          Wallet
        </label>
      </div>
      <div className="mb-4 flex items-center">
        <input type="radio" name="paymentMethod" id="cod" onChange={handleCODPayment} className="mr-2" />
        <label htmlFor="cod" className="cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
          Cash on Delivery
        </label>
      </div>
      <Link to="/order" className='ml-auto'>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Proceed to Payment
        </button>
      </Link>
    </div>
  );
};

export default PaymentPage;
