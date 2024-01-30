import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();

  const placeAnotherOrder = () => {
    navigate('/');
    // window.location.reload();
  }
  return (
    <div className="flex items-center justify-center m-5">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md text-center">
            <h1 className="text-2xl font-bold text-green-500 mb-4">Your Order is Placed Successfully!</h1>
            <p className="text-gray-700">Thank you for choosing our service. Your delicious food is on the way!</p>
            <div className="flex items-center justify-center">
              <img src="https://i.pinimg.com/originals/63/30/4c/63304c0ead674232ee58af3dbc63b464.gif" alt="" className='items-center' width={150} />
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue" onClick={placeAnotherOrder}>
                Place Another Order
            </button>
        </div>
    </div>
  )
}

export default OrderPage;
