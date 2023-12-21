import React from 'react'

const OrderPage = () => {
    const playAnotherOrder = () => {
        // window.location.reload(); 
    };
  return (
    <div className="flex items-center justify-center m-5">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md text-center">
            <h1 className="text-2xl font-bold text-green-500 mb-4">Your Order is Placed Successfully!</h1>
            <p className="text-gray-700">Thank you for choosing our service. Your delicious food is on the way!</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue" onClick={playAnotherOrder}>
                Play Another Order
            </button>
        </div>
    </div>
  )
}

export default OrderPage;
