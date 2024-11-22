import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
 const navigate = useNavigate();
  const headers = { id: localStorage.getItem('id') };

  const handleRemove = async (bookId) => {
    const updatedHeaders = { ...headers, bookid: bookId };
    try {
      const response = await axios.put('https://bookloune-backend.onrender.com/cart/remove-book-from-cart', {}, { headers: updatedHeaders });
      alert(response.data.message);
      setCart((prevCart) => prevCart.filter(item => item._id !== bookId));
    } catch (error) {
      console.error('Error removing item:', error);
      alert('Failed to remove item from cart.');
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('https://bookloune-backend.onrender.com/cart/get-user-cart', { headers });
        setCart(response.data.data || []);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  // Calculate total price and number of books
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const totalBooks = cart.length;

  const handlePlaceOrder = async() => {
  try{
    const response = await axios.post('https://bookloune-backend.onrender.com/orders/place-order',{order: cart}, {headers})
    alert(response.data.message);
    navigate('/profile/orderhistory')
  }catch(error){
    console.log(error);
  }
  };

  return (
    <div className='bg-zinc-900 h-screen px-2 py-1 md:px-12 md:py-4 flex flex-col'>
      {cart.length > 0 && (
        <div>
          <p className='text-xl md:text-4xl md:font-semibold text-zinc-500'>Your Cart</p>
        </div>
      )}
      <div className='flex-grow'>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item._id} className='flex flex-row justify-between items-center bg-zinc-800 px-2 py-3 md:px-4 md:py-2 mt-5'>
                <img src={item.url} alt={item.title} className='h-[8vh]' />
                <p className='text-xl font-semibold text-zinc-400'>{item.title}</p>
                <p className='text-lg text-white'>₹ {item.price}</p>
                <button className='text-red-500' onClick={() => handleRemove(item._id)}>
                  <RiDeleteBin5Fill size={25} />
                </button>
              </div>
            ))}
            <div className='bg-zinc-800 p-4 mt-5 rounded-lg flex lg:flex-row md:flex-col items-center justify-between'>
              <p className='text-lg text-zinc-400'>Total Books: {totalBooks}</p>
              <p className='text-lg text-white'>Total Price: ₹ {totalPrice}</p>
              <button 
                className='mt-4 bg-green-500 text-white py-2 px-4 rounded' 
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </>
        ) : (
          <p className='text-zinc-500 md:text-5xl md:font-bold text-3xl font-semibold'>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
