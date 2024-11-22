import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import {Link, useNavigate } from 'react-router-dom';

const BookDetails = () => {
const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const { id } = useParams();
  console.log(id);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://bookloune-backend.onrender.com/booksapi/get-book-by-id/${id}`);
        
        // Check if the response has valid data
        if (response.data && response.data.data) {
          setBook(response.data.data);
        } else {
          setError('Book not found.');
        }
      } catch (error) {
        console.error('Error fetching book:', error);
        setError('Failed to fetch book details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  // Display loading state
  if (loading) {
    return <div className='text-white'>Loading...</div>;
  }

  // Display error message if there's an error
  if (error) {
    return <div className='text-red-500'>{error}</div>;
  }

  // Handle case where book is not found
  if (!book) {
    return <div className='text-red-500'>Book not found.</div>;
  }
    

    const headers = {
      id: localStorage.getItem("id"),
      bookid: id,
    }
    const handelFavourites = async() => {
      const response = await axios.put('https://bookloune-backend.onrender.com/favouriteapi/add-book-to-favourite',{},{ headers })
      alert(response.data.message)
    };

    const handleCart = async() => {
      const response = await axios.put("https://bookloune-backend.onrender.com/cart/add-book-to-cart",{},{ headers })
      alert(response.data.message)
    };

    const deleteBook  = async()=>{
      const response = await axios.delete("https://bookloune-backend.onrender.com/booksapi/delete-book",{headers});
      alert(response.data.message);
      navigate("/all-books")
    }

  return (
    <div className='px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-4'>
      <div className='bg-zinc-800 rounded p-12 flex md:flex-row  flex-col justify-center gap-8 '>
        <img 
          src={book.url || 'fallback-image.png'} // Provide a fallback image
          alt={book.title}
          className='md:h-[77vh] h-full rounded' 
        />
        {isLoggedIn === true && role === "user" && (
          <div className='flex md:flex-col flex-row justify-between md:justify-normal'>
          <button className='lg:text-4xl text-xl text-red-600 p-2 rounded-full bg-white' onClick={handelFavourites}><FaHeart /></button>
          <button className='lg:text-4xl text-xl text-blue-700 p-2 rounded-full bg-white md:mt-4' onClick={handleCart} ><FaCartArrowDown /></button>
       </div>
        )}

        {isLoggedIn === true && role === "admin" && (
          <div className='flex md:flex-col flex-row justify-between md:justify-normal'>
          <Link to= {`/UpdateBook/${id}`}className='lg:text-4xl text-xl text-red-600 p-2 rounded-full bg-white'><MdEditSquare /></Link>
          <button className='lg:text-4xl text-xl text-blue-700 p-2 rounded-full bg-white md:mt-4'onClick={deleteBook}><MdDeleteForever /></button>
       </div>
        )}
        
      </div>
      <div className='p-4 md:w-1/2'>
        <h1 className='text-4xl text-white font-semibold'>{book.title}</h1>
        <p className='text-zinc-400 mt-1'>{book.author}</p>
        <p className='text-zinc-500 mt-4 text-xl'>{book.desc}</p>
        <p className='mt-4 text-zinc-400 font-semibold'>{book.language}</p>
        <p className='mt-4 text-zinc-100 text-3xl font-semibold'>₹ {book.price}</p>
      </div>
    </div>
  );
}

export default BookDetails;
