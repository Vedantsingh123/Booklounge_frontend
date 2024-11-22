import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const UserOrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const headers = {
        id: localStorage.getItem("id"),
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://bookloune-backend.onrender.com/orders/get-order-history', { headers });
                setOrders(response.data.data);
            } catch (err) {
                setError('Error fetching order history. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
            <h1 className='text-3xl font-bold md:text-5xl text-zinc-500 '>
                Your Order History
            </h1>
            <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 mb-3'>
                <div className='w-[3%]'>
                    <h1 className='text-center'>Sr.</h1>
                </div>
                <div className='w-[22%]'>
                 <h1 >Books</h1>
                </div>
                <div className='w-[45%]'>
                 <h1 >Description</h1>
                </div>
                <div className='w-[9%]'>
                 <h1 >Price</h1>
                </div>
                <div className='w-[16%]'>
                 <h1 >Status</h1>
                </div>
                <div className='w-none md:w-[5%] hidden md:block'>
                 <h1 >Mode</h1>
                </div>
            </div>
            {orders.map((items, i) => (
                <div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-pzinc-900 hover:cursor-pointer mb-1'>
                    <div className='w-[3%]'>
                        <h1 className='text-center'>{i + 1}</h1>
                    </div> 
                    <div className='w-[22%]'>
                        <Link 
                        to = {'/get-book-by-id/${items.book._id}'}
                        className='hover:text-blue-300'
                        >{items.book.title}</Link>
                    </div>
                    <div className='w-[45%]'><h1>{items.book.desc.slice(0,30)}.....</h1></div>
                    <div className='w-[9%]'><h1> ₹ {items.book.price}</h1></div>
                    <div className='w-[16%]'>
                        <h1 className='font-semibold text-green-500'> {items.status === "Order placed" ? (
                            <div className='text-yellow-500'>{items.status}</div>
                        ) : items.status ==="Canceled" ? (
                            <div className='text-red-500'>{items.status}</div>
                        ):(
                            items.status
                        )
                        }</h1>
                    </div>
                    <div className='md:w-[5%] w-none hidden md:block '><h1 className='text-sm text-zinc-400'>COD</h1></div>
                </div>
            ))}
        </div>
    );
};

export default UserOrderHistory;
